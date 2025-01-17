import { apiIns } from "./api-instance";
import { ApiResponse } from "./base-api";
import { createRestfulApiService } from "./utils";

const apiAxios = createRestfulApiService(apiIns, "/");

type TParamsGetAllInfo = {};

export interface TApi {
  getAllInfoPage: (param: TParamsGetAllInfo) => Promise<any>;
}

export const api: TApi = {
  getAllInfoPage: (param: TParamsGetAllInfo) => {
    return apiAxios
      .get<ApiResponse<any>>(`/api/v1/pages?lang=en`)
      ?.then(({ data }) => data);
  },
};
