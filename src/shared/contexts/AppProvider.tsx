/* eslint-disable react-refresh/only-export-components */
// useAppProvider
import { getAccountStorages, TAccount } from "@/core/storages/auth";
import { getProductToStorages, TProduct } from "@/core/storages/product";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type TAppProps = {
  allInfo: any;
  collapsed: boolean;
};

export const initialProps: TAppProps = {
  allInfo: null,
  collapsed: false,
};

export type TAppUpdateProps = TAppProps & {
  updateAppProps: (newSearchParams: Partial<TAppUpdateProps>) => void;
};
const AppProviderCtx = createContext<TAppUpdateProps>({
  ...initialProps,
  updateAppProps: () => {},
});

export const AppProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [appProps, setAppProps] = useState<TAppProps>({
    ...initialProps,
  });

  const updateAppProps: TAppUpdateProps["updateAppProps"] = useCallback(
    (newPartialSP) => {
      setAppProps((oldSearchParams) => ({
        ...oldSearchParams,
        ...newPartialSP,
      }));
    },
    []
  );

  const providedValues: TAppUpdateProps = useMemo(
    () => ({
      ...appProps,
      updateAppProps,
    }),
    [appProps, updateAppProps]
  );

  return (
    <AppProviderCtx.Provider value={providedValues}>
      {children}
    </AppProviderCtx.Provider>
  );
};

export function useAppProvider() {
  const ctx = useContext(AppProviderCtx);

  if (typeof ctx === "undefined") {
    throw new Error("useAppProvider must be used within AuthProvider");
  }

  return ctx;
}
