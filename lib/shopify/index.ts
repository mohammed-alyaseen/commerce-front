/* eslint-disable no-unused-vars */
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from 'lib/constants';

import { Cart, Collection, Menu, Product } from './types';

const domain = `https://${process.env.SHOPIFY_STORE_DOMAIN!}`;
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

const products = [
  {
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
      maxVariantPrice: { amount: '70.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '35.0', currencyCode: 'USD' }
    },
    featuredImage: {
      url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
      altText: '',
      width: 600,
      height: 600
    },
    handle: 'acme-cup',
    seo: { description: 'test', title: 'test' },
    tags: [],
    title: 'ACME Cup',
    updatedAt: '2018-04-09T15:00:00.000Z'
  },
  {
    id: 'gid://shopify/Product/5447325024420',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418',
        altText: '',
        width: 1000,
        height: 1000
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-4.png?v=1622902418',
        altText: '',
        width: 1000,
        height: 1000
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-3.png?v=1622902418',
        altText: '',
        width: 1000,
        height: 1000
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-2.png?v=1622902418',
        altText: '',
        width: 1000,
        height: 1000
      }
    ],
    featuredImage: {
      url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418',
      altText: '',
      width: 600,
      height: 600
    },
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
        id: 'gid://shopify/ProductOption/6940503769252',
        name: 'size',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'gid://shopify/ProductOption/8655765471396',
        name: 'color',
        values: ['#FFFFFF', '#808080', '#00CED1', '#FFA07A']
      }
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.',
    descriptionHtml:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.<br></p>',
    availableForSale: true,
    handle: 'short-sleeve-t-shirt',
    title: 'Short Sleeve T-Shirt',
    seo: { description: 'test', title: 'test' },
    tags: [],
    updatedAt: '2018-04-09T15:00:00.000Z',
    priceRange: {
      maxVariantPrice: { amount: '70.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '35.0', currencyCode: 'USD' }
    }
  },
  {
    id: 'gid://shopify/Product/5447325024420',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418',
        altText: '',
        width: 1000,
        height: 1000
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-4.png?v=1622902418',
        altText: '',
        width: 1000,
        height: 1000
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-3.png?v=1622902418',
        altText: '',
        width: 1000,
        height: 1000
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-2.png?v=1622902418',
        altText: '',
        width: 1000,
        height: 1000
      }
    ],
    featuredImage: {
      url: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-0.png?v=1622901991',
      altText: '',
      width: 600,
      height: 600
    },
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
        id: 'gid://shopify/ProductOption/6940503769252',
        name: 'size',
        values: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        id: 'gid://shopify/ProductOption/8655765471396',
        name: 'color',
        values: ['#FFFFFF', '#808080', '#00CED1', '#FFA07A']
      }
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.',
    descriptionHtml:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.<br></p>',
    availableForSale: true,
    title: 'New Short Sleeve T-Shirt',
    handle: 'new-short-sleeve-t-shirt',
    seo: { description: 'test', title: 'test' },
    tags: [],
    updatedAt: '2018-04-09T15:00:00.000Z',
    priceRange: {
      maxVariantPrice: { amount: '70.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '35.0', currencyCode: 'USD' }
    }
  }
];

let cart: any = {};
const cartItems: Product[] = [];

export function getCollection(handle: string): Collection | undefined {
  // const res = await shopifyFetch<ShopifyCollectionOperation>({
  //   query: getCollectionQuery,
  //   variables: {
  //     handle
  //   }
  // });

  // return reshapeCollection(res.body.data.collection);
  console.log(handle);
  return {
    handle: 'handle',
    title: 'handle',
    description: 'description',
    seo: { title: 'seo', description: 'description' },
    updatedAt: 'updatedAt',
    path: 'path'
  };
}

export function getCollections(): Array<Collection> {
  // const res = await shopifyFetch<ShopifyCollectionOperation>({
  //   query: getCollectionQuery,
  //   variables: {
  //     handle
  //   }
  // });

  // return reshapeCollection(res.body.data.collection);
  return [
    {
      handle: 'handle',
      title: 'handle',
      description: 'description',
      seo: { title: 'seo', description: 'description' },
      updatedAt: 'updatedAt',
      path: 'path'
    }
  ];
}

export function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Product[] {
  // const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
  //   query: getCollectionProductsQuery,
  //   variables: {
  //     handle: collection,
  //     reverse,
  //     sortKey
  //   }
  // });

  // if (!res.body.data.collection) {
  //   console.log(`No collection found for \`${collection}\``);
  //   return [];
  // }

  console.log(collection, reverse, sortKey);

  return products;
}

export function getCart(cartId: string): Cart {
  // const res = await shopifyFetch<ShopifyCartOperation>({
  //   query: getCartQuery,
  //   variables: { cartId },
  //   cache: 'no-store'
  // });

  // if (!res.body.data.cart) {
  //   return null;
  // }

  // return reshapeCart(res.body.data.cart);
  console.log('getCart ', cartId, cart);

  return cart;
}

export function createCart(): void {
  // const res = await shopifyFetch<ShopifyCreateCartOperation>({
  //   query: createCartMutation,
  //   cache: 'no-store'
  // });

  // return reshapeCart(res.body.data.cartCreate.cart);
  cart = {
    ...cart,
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
}

export function addToCart(cartId: string, lint: Product): Array<Product> {
  // const res = await shopifyFetch<ShopifyAddToCartOperation>({
  //   query: addToCartMutation,
  //   variables: {
  //     cartId,
  //     lines
  //   },
  //   cache: 'no-store'
  // });
  // return reshapeCart(res.body.data.cartLinesAdd.cart);
  // const product = products.find((product) => product.id === lineId);
  cartItems.push(lint);
  cart.quantity++;
  console.log(cartItems);
  return cartItems;
}

export function getMenu(handle: string): Menu[] {
  // const res = await shopifyFetch<ShopifyMenuOperation>({
  //   query: getMenuQuery,
  //   variables: {
  //     handle
  //   }
  // });

  // return (
  //   res.body?.data?.menu?.items.map((item: { title: string; url: string }) => ({
  //     title: item.title,
  //     path: item.url.replace(domain, '').replace('/collections', '/search').replace('/pages', '')
  //   })) || []
  // );

  if (handle === 'next-js-frontend-header-menu')
    return [
      { title: 'All', path: '/pages' },
      { title: 'Shirts', path: 'search' }
    ];
  else {
    return [
      { title: 'Home', path: '/home' },
      { title: 'About', path: 'search' },
      { title: 'Terms & Conditions', path: 'search' },
      { title: 'Shipping & Return Policy', path: 'search' },
      { title: 'Privacy Policy', path: 'search' },
      { title: 'FAQ', path: 'search' }
    ];
  }
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  // const res = await shopifyFetch<ShopifyProductOperation>({
  //   query: getProductQuery,
  //   variables: {
  //     handle
  //   }
  // });

  // return reshapeProduct(res.body.data.product, false);

  return products?.find((product) => product.handle === handle);
}

// export async function shopifyFetch<T>({
//   query,
//   variables,
//   headers,
//   cache = 'force-cache'
// }: {
//   query: string;
//   variables?: ExtractVariables<T>;
//   headers?: HeadersInit;
//   cache?: RequestCache;
// }): Promise<{ status: number; body: T } | never> {
//   try {
//     const result = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': key,
//         ...headers
//       },
//       body: JSON.stringify({
//         ...(query && { query }),
//         ...(variables && { variables })
//       }),
//       cache,
//       next: { revalidate: 900 } // 15 minutes
//     });

//     const body = await result.json();

//     if (body.errors) {
//       throw body.errors[0];
//     }

//     return {
//       status: result.status,
//       body
//     };
//   } catch (e) {
//     if (isShopifyError(e)) {
//       throw {
//         status: e.status || 500,
//         message: e.message,
//         query
//       };
//     }

//     throw {
//       error: e,
//       query
//     };
//   }
// }

// const removeEdgesAndNodes = (array: Connection<any>) => {
//   return array.edges.map((edge) => edge?.node);
// };

// const reshapeCart = (cart: ShopifyCart): Cart => {
//   if (!cart.cost?.totalTaxAmount) {
//     cart.cost.totalTaxAmount = {
//       amount: '0.0',
//       currencyCode: 'USD'
//     };
//   }

//   return {
//     ...cart,
//     lines: removeEdgesAndNodes(cart.lines)
//   };
// };

// const reshapeCollection = (collection: ShopifyCollection): Collection | undefined => {
//   if (!collection) {
//     return undefined;
//   }

//   return {
//     ...collection,
//     path: `/search/${collection.handle}`
//   };
// };

// const reshapeCollections = (collections: ShopifyCollection[]) => {
//   const reshapedCollections = [];

//   for (const collection of collections) {
//     if (collection) {
//       const reshapedCollection = reshapeCollection(collection);

//       if (reshapedCollection) {
//         reshapedCollections.push(reshapedCollection);
//       }
//     }
//   }

//   return reshapedCollections;
// };

// const reshapeProduct = (product: ShopifyProduct, filterHiddenProducts: boolean = true) => {
//   if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
//     return undefined;
//   }

//   const { images, variants, ...rest } = product;

//   return {
//     ...rest,
//     images: removeEdgesAndNodes(images),
//     variants: removeEdgesAndNodes(variants)
//   };
// };

// const reshapeProducts = (products: ShopifyProduct[]) => {
//   const reshapedProducts = [];

//   for (const product of products) {
//     if (product) {
//       const reshapedProduct = reshapeProduct(product);

//       if (reshapedProduct) {
//         reshapedProducts.push(reshapedProduct);
//       }
//     }
//   }

//   return reshapedProducts;
// };

// export async function addToCart(
//   cartId: string,
//   lines: { merchandiseId: string; quantity: number }[]
// ): Promise<Cart> {
//   const res = await shopifyFetch<ShopifyAddToCartOperation>({
//     query: addToCartMutation,
//     variables: {
//       cartId,
//       lines
//     },
//     cache: 'no-store'
//   });
//   return reshapeCart(res.body.data.cartLinesAdd.cart);
// }

// export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
//   const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
//     query: removeFromCartMutation,
//     variables: {
//       cartId,
//       lineIds
//     },
//     cache: 'no-store'
//   });

//   return reshapeCart(res.body.data.cartLinesRemove.cart);
// }

// export async function updateCart(
//   cartId: string,
//   lines: { id: string; merchandiseId: string; quantity: number }[]
// ): Promise<Cart> {
//   const res = await shopifyFetch<ShopifyUpdateCartOperation>({
//     query: editCartItemsMutation,
//     variables: {
//       cartId,
//       lines
//     },
//     cache: 'no-store'
//   });

//   return reshapeCart(res.body.data.cartLinesUpdate.cart);
// }

// export async function getCollections(): Promise<Collection[]> {
//   const res = await shopifyFetch<ShopifyCollectionsOperation>({ query: getCollectionsQuery });
//   const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
//   const collections = [
//     {
//       handle: '',
//       title: 'All',
//       description: 'All products',
//       seo: {
//         title: 'All',
//         description: 'All products'
//       },
//       path: '/search',
//       updatedAt: new Date().toISOString()
//     },
//     // Filter out the `hidden` collections.
//     // Collections that start with `hidden-*` need to be hidden on the search page.
//     ...reshapeCollections(shopifyCollections).filter(
//       (collection) => !collection.handle.startsWith('hidden')
//     )
//   ];

//   return collections;
// }

// export async function getPage(handle: string): Promise<Page> {
//   const res = await shopifyFetch<ShopifyPageOperation>({
//     query: getPageQuery,
//     variables: { handle }
//   });

//   return res.body.data.pageByHandle;
// }

// export async function getPages(): Promise<Page[]> {
//   const res = await shopifyFetch<ShopifyPagesOperation>({
//     query: getPagesQuery
//   });

//   return removeEdgesAndNodes(res.body.data.pages);
// }

export function getProductRecommendations(productId: string): Product[] {
  // const res = await shopifyFetch<ShopifyProductRecommendationsOperation>({
  //   query: getProductRecommendationsQuery,
  //   variables: {
  //     productId
  //   }
  // });

  // return reshapeProducts(res.body.data.productRecommendations);
  return [];
}

// export async function getProducts({
//   query,
//   reverse,
//   sortKey
// }: {
//   query?: string;
//   reverse?: boolean;
//   sortKey?: string;
// }): Promise<Product[]> {
//   const res = await shopifyFetch<ShopifyProductsOperation>({
//     query: getProductsQuery,
//     variables: {
//       query,
//       reverse,
//       sortKey
//     }
//   });

//   return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
// }
