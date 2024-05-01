"use client"
import { Cart } from 'lib/shopify/types';
import { createContext, useState } from 'react';

interface AppContextProps {
  value?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
  cart: undefined,
  setCart: undefined
});

const AppContextProvider = (props: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>({lines: [], cost: {
    totalAmount: {
      amount: '0.0',
      currencyCode: 'USD'
    }
  }});

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
