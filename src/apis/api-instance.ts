//? If you need authentication

import { getToken } from "@/core/storages/auth";
import { ApiErrorHandler } from "./Models";
import { createInternalRestfulApiIns } from "./utils";

const apiIns = createInternalRestfulApiIns("/");

apiIns.interceptors.request.use(function (config) {
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  config.headers!.Authorization = `Bearer ${getToken().token}`;
  /* eslint-enable */

  return config;
});

const setApiErrorHandler = (errorHandler: ApiErrorHandler) => {
  return apiIns.interceptors.response.use((r) => r, errorHandler);
};

export { apiIns, setApiErrorHandler };
