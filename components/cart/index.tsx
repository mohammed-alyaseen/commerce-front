'use client';
// import { cookies } from 'next/headers';
import { AppContext } from 'app/appcontext';
import { useContext } from 'react';
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
    lines: [
      {
        id: 'gid://shopify/Product/6621772644516',
        quantity: 1,
        cost: {
          totalAmount: {
            amount: 'string',
            currencyCode: 'USD'
          }
        },
        merchandise: {
          id: 'gid://shopify/ProductVariant/40064679805092',
          title: 'Product',
          selectedOptions: [
            {
              name: 'color',
              value: '#FFFFFF'
            }
          ],
          product: {
            id: 'gid://shopify/Product/6621772644516',
            images: [
              {
                url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
                altText: '',
                width: 2048,
                height: 2048
              },
              {
                url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-white.png?v=1623159430',
                altText: '',
                width: 2048,
                height: 2048
              }
            ],
            variants: [
              {
                id: 'gid://shopify/ProductVariant/40064679805092',
                price: {
                  amount: '25',
                  currencyCode: 'USD'
                },
                availableForSale: true,
                title: 'Product',
                selectedOptions: []
              }
            ],
            options: [
              {
                id: 'gid://shopify/ProductOption/8505918849188',
                name: 'color',
                values: ['#FFFFFF', '#000000']
              }
            ],
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.',
            descriptionHtml:
              '<meta charset="utf-8"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</span>',
            availableForSale: true,
            priceRange: {
              maxVariantPrice: {
                amount: '70.0',
                currencyCode: 'USD'
              },
              minVariantPrice: {
                amount: '35.0',
                currencyCode: 'USD'
              }
            },
            featuredImage: {
              url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
              altText: '',
              width: 600,
              height: 600
            },
            handle: 'acme-cup',
            seo: {
              description: 'test',
              title: 'test'
            },
            tags: [],
            title: 'ACME Cup',
            updatedAt: '2018-04-09T15:00:00.000Z'
          }
        }
      }
    ],
    totalQuantity: 0
  };

  const { cart: crt } = useContext(AppContext);
  console.log('crt');
  console.log(crt);

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
  return <CartButton cart={crt} cartIdUpdated={cartIdUpdated} />;
}
