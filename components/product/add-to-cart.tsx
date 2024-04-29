'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useContext, useState, useTransition } from 'react';

import { AppContext } from 'app/appcontext';
import LoadingDots from 'components/loading-dots';
import { Product } from 'lib/shopify/types';

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
  const {cart, setCart} = useContext(AppContext);

  const isMutating = adding || isPending;
  async function handleAdd() {
    if (!availableForSale) return;

    setAdding(true);

    // const productId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    // addToCart('8d5c1c90ef2116fbc554137159686f99', product);

    setCart?.({product: product, });
    

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
