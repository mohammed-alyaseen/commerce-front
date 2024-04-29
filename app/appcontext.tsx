"use client"
import { CartItem } from 'lib/shopify/types';
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
  const [cart, setCart] = useState<CartItem>({
    id: "123456"
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
