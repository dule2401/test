import { api } from "@/apis/api";
import { FETCH_ALL_INFO } from "@/config/swr-keys";
import { Config, useAxiosSWR } from "@/shared/hooks/useAxiosSWR";
import { Key } from "swr";

const fetcher = (_key: Key, param: any) => api.getAllInfoPage(param);

export const useFetchAllInfo = (
  options?: Partial<
    Pick<
      Config,
      | "suspense"
      | "revalidateOnMount"
      | "revalidateIfStale"
      | "revalidateWhenUndefined"
    >
  >
) => {
  const { data, mutate } = useAxiosSWR([FETCH_ALL_INFO], fetcher, options);

  return {
    data: data?.[0],
    fetchAllInfo: mutate,
  };
};
