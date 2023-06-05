import { createContext, useState } from 'react';

interface AppContextProps {
  value?: boolean;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
  value: undefined,
  setValue: undefined
});

const AppContextProvider = (props: { children: React.ReactNode }) => {
  const [value, setValue] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        value: value,
        setValue: setValue
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
