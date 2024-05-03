import CloseIcon from 'components/icons/close';
import LoadingDots from 'components/loading-dots';
import { useContext, useState } from 'react';

import { AppContext } from 'app/appcontext';
import clsx from 'clsx';
import type { CartItem } from 'lib/shopify/types';

export default function DeleteItemButton({ item }: { item: CartItem }) {
  const [removing, setRemoving] = useState(false);
  const { cart, setCart } = useContext(AppContext);

  async function handleRemove() {
    setRemoving(true);

    setCart?.({
      lines: cart.lines.filter(
        (line: CartItem) => line.merchandise?.product?.id !== item?.merchandise?.product?.id
      ),
      cost: {
        subtotalAmount: {
          amount:
            Number(cart?.cost?.totalAmount?.amount) ||
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
            Number(cart?.cost?.totalAmount?.amount || 0) -
              Number(item?.merchandise?.product?.priceRange?.maxVariantPrice?.amount) || 0,
          currencyCode: 'USD'
        }
      }
    });
    // const response = await fetch(`/api/cart`, {
    //   method: 'DELETE',
    //   body: JSON.stringify({
    //     lineId: item.id
    //   })
    // });
    // const data = await response.json();

    // if (data.error) {
    //   alert(data.error);
    //   return;
    // }

    setRemoving(false);

    // startTransition(() => {
    //   router.refresh();
    // });
  }
  return (
    <button
      aria-label="Remove cart item"
      onClick={handleRemove}
      disabled={removing}
      className={clsx(
        'ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900',
        {
          'cursor-not-allowed px-0': removing
        }
      )}
    >
      {removing ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : (
        <CloseIcon className="hover:text-accent-3 mx-[1px] h-4 w-4" />
      )}
    </button>
  );
}
