'use client';
import { Cart } from 'lib/shopify/types';
import { createContext, useState } from 'react';

interface AppContextProps {
  cart?: Cart;
  setCart?: React.Dispatch<React.SetStateAction<Cart>>;
}

export const AppContext = createContext<AppContextProps>({
  cart: undefined,
  setCart: undefined
});

const AppContextProvider = (props: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>({
    lines: [],
    // @ts-ignore
    cost: {
      totalAmount: {
        amount: '0.0',
        currencyCode: 'USD'
      }
    }
  });

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
