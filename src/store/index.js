import { makeAutoObservable } from 'mobx';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  }
  init = async () => {};
}

export const rootStore = new RootStore();

const RootStoreContext = createContext(rootStore);

export function useStore() {
  return useContext(RootStoreContext);
}

export function RootStoreProvider(children) {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
}
