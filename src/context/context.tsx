import { createContext, ReactNode, useContext } from "react";
import { StoreItemProps } from "./productsHooks";
type GlobalProviderProps = {
  children: ReactNode;
};
type GlobalContext = {
  cartItems: number[];
  storeItem: StoreItemProps[];
};

export const GlobalContext = createContext({} as GlobalContext);
export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }: GlobalProviderProps) {
  return (
    <GlobalContext.Provider value={{ cartItems: [], storeItem: [] }}>
      {children}
    </GlobalContext.Provider>
  );
}
