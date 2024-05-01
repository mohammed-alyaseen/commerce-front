'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useContext, useState, useTransition } from 'react';

import { AppContext } from 'app/appcontext';
import LoadingDots from 'components/loading-dots';
import { CartItem, Product } from 'lib/shopify/types';

export function AddToCart({
  product,
  availableForSale
}: {
  product: Product;
  availableForSale: boolean;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [adding, setAdding] = useState(false);
  const { cart, setCart } = useContext(AppContext);

  const isMutating = adding || isPending;
  async function handleAdd() {
    if (!availableForSale) return;

    setAdding(true);

    // const productId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    // addToCart('8d5c1c90ef2116fbc554137159686f99', product);

    console.log(product);
    
    if(!cart.lines?.find((line: CartItem) => line.merchandise?.product?.id === product?.id))
      setCart?.({
        lines: [...cart.lines, {
          merchandise: { product }, quantity: 1, cost: {
            totalAmount: product?.priceRange?.maxVariantPrice
          }
        }],
        cost: {
          subtotalAmount: {
            amount: Number(cart?.cost?.totalAmount?.amount) || 0 + Number(product?.priceRange?.maxVariantPrice?.amount) || 0,
            currencyCode: 'USD'
          },
          totalTaxAmount: {
            amount: "0",
            currencyCode: 'USD'
          },
          totalAmount: {
            amount: Number(cart?.cost?.totalAmount?.amount || 0) + Number(product?.priceRange?.maxVariantPrice?.amount) || 0,
            currencyCode: 'USD'
          },
      }});

    
    setAdding(false);

    startTransition(() => {
      router.refresh();
    });
  }


  return (
    <button
      aria-label="Add item to cart"
      disabled={isMutating}
      onClick={handleAdd}
      className={clsx(
        'flex w-full items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100 dark:bg-white dark:text-black',
        {
          'cursor-not-allowed opacity-60': !availableForSale,
          'cursor-not-allowed': isMutating
        }
      )}
    >
      <span>{availableForSale ? 'Add To Cart' : 'Out Of Stock'}</span>
      {isMutating ? <LoadingDots className="bg-white dark:bg-black" /> : null}
    </button>
  );
}
