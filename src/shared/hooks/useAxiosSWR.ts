import useSWR, { SWRResponse, Key, SWRConfiguration } from 'swr';
import { AxiosError } from 'axios';
import { useEffect } from 'react';

interface Return<Data, Error>
  extends Pick<SWRResponse<Data | undefined, AxiosError<Error>>, 'isValidating' | 'error' | 'mutate'> {
  data: Data | undefined;
  isInitializing: boolean;
  isLoading: boolean;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<SWRConfiguration<Data | undefined, AxiosError<Error>>, 'fallbackData'> {
  fallbackData?: Data | undefined;
  revalidateWhenUndefined?: boolean;
}

export type UseAxiosSWRFetcher<Data> = (...args: any[]) => Promise<Data> | undefined;

export function useAxiosSWR<Data = unknown, Error = unknown>(
  key: Key,
  fetcher: UseAxiosSWRFetcher<Data> | null,
  { fallbackData, ...config }: Config<Data, Error> = {},
): Return<Data, Error> {
  const { data, isValidating, error, mutate } = useSWR<Data | undefined>(key, fetcher, {
    ...config,
    fallbackData,
  });

  const isInitializing = !data && !error;
  const isLoading = isInitializing || isValidating;

  useEffect(() => {
    if (config.revalidateWhenUndefined && typeof data === 'undefined') {
      mutate();
    }
  }, [config.revalidateWhenUndefined, data]);

  return {
    data,
    isValidating,
    isInitializing,
    isLoading,
    error,
    mutate,
  };
}
