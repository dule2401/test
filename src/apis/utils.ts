import axios, { AxiosInstance } from "axios";
import qs from "qs";
//
import { BaseApi } from "./base-api";

export const concatPath = (...paths: string[]) =>
  paths.join("/").replace(/\/{2,}/gi, "/");

export const HTTP_HEADERS = {
  ContentType: "Content-Type",
};

export const createInternalRestfulApiIns = (servicePath: string) => {
  const baseURL = "https://api.test.soa-dev.net/";
  const apiIns = axios.create({
    baseURL,
    headers: {
      [HTTP_HEADERS.ContentType]: "application/json",
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: "brackets" });
    },
  });

  return apiIns;
};

export const createRestfulApiService = (
  axiosIns: AxiosInstance,
  servicePath: string
) => new BaseApi(axiosIns, servicePath);
