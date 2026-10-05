import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const GlobalContext = createContext(null);

export function GlobalContextProvider({ children }) {
  const [storeData, setStoreData] = useState({
    cart: ['item 1', 'item 2', 'item 3'],
    auth: { username: 'some user', session: 'some session' },
    theme: 'dark',
  });

const updateData = useCallback((data) => {
    setStoreData((oldData) => ({
      theme: data.theme !== undefined ? data.theme : oldData.theme,
      auth: data.auth !== undefined ? { ...data.auth } : { ...oldData.auth },
      cart: [...oldData.cart, data.cart],
    }));
  }, []);

  const context = useMemo(
    () => ({
      storeData,
      updateData,
    }),
    [storeData, updateData]
  );

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('No Global Context Provided.');
  }
  return context;
}
