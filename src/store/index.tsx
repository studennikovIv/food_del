import React, { useContext, ReactNode } from 'react';
import { makeAutoObservable } from 'mobx';
import BasketButtonSpan from './BasketButtonSpan';
import Basket from './Basket';
import { ChakraProvider } from '@chakra-ui/react';
export class RootStore {
  BasketButtonSpan = new BasketButtonSpan();
  basketStore = new Basket();
  constructor() {
    makeAutoObservable(this);
  }
  init = async () => {};
}

export const rootStore = new RootStore();

const RootStoreContext = React.createContext(rootStore);

export function useStore(): RootStore {
  return useContext(RootStoreContext);
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <ChakraProvider>{children}</ChakraProvider>
    </RootStoreContext.Provider>
  );
}
