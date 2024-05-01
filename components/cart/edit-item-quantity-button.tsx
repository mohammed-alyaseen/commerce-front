import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

import { AppContext } from 'app/appcontext';
import clsx from 'clsx';
import MinusIcon from 'components/icons/minus';
import PlusIcon from 'components/icons/plus';
import type { CartItem } from 'lib/shopify/types';
import LoadingDots from '../loading-dots';

export default function EditItemQuantityButton({
  item,
  type
}: {
  item: CartItem;
  type: 'plus' | 'minus';
}) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const { cart, setCart } = useContext(AppContext);

  function handleEdit() {
    setEditing(true);
    setCart?.({
      lines: cart.lines.map((line: CartItem) => {
        if (
          line?.merchandise?.product?.id === item?.merchandise?.product?.id &&
          (type === 'plus' || (type === 'minus' && line?.quantity > 1))
        ) {
          return {
            ...line,
            quantity: line.quantity + (type === 'plus' ? 1 : -1),
            cost: {
              totalAmount: {
                amount:
                  type === 'plus'
                    ? Number(line.cost.totalAmount?.amount) ||
                      0 + Number(item?.merchandise?.product?.priceRange?.maxVariantPrice?.amount) ||
                      0
                    : Number(line.cost.totalAmount?.amount) ||
                      0 - Number(item?.merchandise?.product?.priceRange?.maxVariantPrice?.amount) ||
                      0,
                currencyCode: 'USD'
              }
            }
          };
        }
        return line;
      }),
      cost: {
        subtotalAmount: {
          amount:
            type === 'plus'
              ? Number(cart?.cost?.totalAmount?.amount) ||
                0 + Number(item?.merchandise?.product?.priceRange?.maxVariantPrice?.amount) ||
                0
              : Number(cart?.cost?.totalAmount?.amount) ||
                0 - Number(item?.merchandise?.product?.priceRange?.maxVariantPrice?.amount) ||
                0,
          currencyCode: 'USD'
        },
        totalTaxAmount: {
          amount: '0',
          currencyCode: 'USD'
        },
        totalAmount: {
          amount:
            type === 'plus'
              ? Number(cart?.cost?.totalAmount?.amount || 0) +
                  Number(item?.merchandise?.product?.priceRange?.maxVariantPrice?.amount) || 0
              : Number(cart?.cost?.totalAmount?.amount || 0) -
                  Number(item?.merchandise?.product?.priceRange?.maxVariantPrice?.amount) || 0,
          currencyCode: 'USD'
        }
      }
    });

    // const response = await fetch(`/api/cart`, {
    //   method: type === 'minus' && item.quantity - 1 === 0 ? 'DELETE' : 'PUT',
    //   body: JSON.stringify({
    //     lineId: item.id,
    //     variantId: item.merchandise.id,
    //     quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
    //   })
    // });

    // const data = await response.json();

    // if (data.error) {
    //   alert(data.error);
    //   return;
    // }

    setEditing(false);

    // startTransition(() => {
    //   router.refresh();
    // });
  }

  return (
    <button
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      onClick={handleEdit}
      disabled={
        editing ||
        (type === 'minus' &&
          cart.lines.find(
            (line: CartItem) => line.merchandise.product.id === item.merchandise.product.id
          )?.quantity <= 1)
      }
      className={clsx(
        'ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900',
        {
          'cursor-not-allowed': editing,
          'ml-auto': type === 'minus'
        }
      )}
    >
      {editing ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4" />
      ) : (
        <MinusIcon className="h-4 w-4" />
      )}
    </button>
  );
}
