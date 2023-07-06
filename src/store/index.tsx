import React, { createContext, useContext, ReactNode } from 'react';
import { makeAutoObservable } from 'mobx';
import BasketStore from './basketStore';

export class RootStore {
  basketStore = new BasketStore();
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
      {children}
    </RootStoreContext.Provider>
  );
}
