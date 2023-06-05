// import { cookies } from 'next/headers';
import CartButton from './button';

export default async function Cart() {
  // const cartId = cookies().get('cartId')?.value;
  const cartIdUpdated = false;
  const cart = {
    id: '8d5c1c90ef2116fbc554137159686f99',
    checkoutUrl: '',
    cost: {
      subtotalAmount: { amount: '25.0', currencyCode: 'USD' },
      totalAmount: { amount: '25.0', currencyCode: 'USD' },
      totalTaxAmount: { amount: '25.0', currencyCode: 'USD' }
    },
    lines: [],
    totalQuantity: 0
  };

  // if (cart?.id) {
  //   cart = await getCart(cartId);
  // }

  // If the `cartId` from the cookie is not set or the cart is empty
  // (old carts becomes `null` when you checkout), then get a new `cartId`
  //  and re-fetch the cart.
  // if (!cart?.id || !cart) {
  //   cart = await createCart();
  //   cartIdUpdated = true;
  // }

  // @ts-ignore
  return <CartButton cart={cart} cartIdUpdated={cartIdUpdated} />;
}
