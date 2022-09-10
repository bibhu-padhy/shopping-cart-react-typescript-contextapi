import { createContext } from "react";

type GlobalContextType = {
    cartItems: number[];
}

export const GlobalContext = createContext<GlobalContextType>({ cartItems: [] })