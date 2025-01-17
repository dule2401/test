import { AxiosError } from "axios";

export type STErrorResponse<T = any> = {
  statusCode: number | undefined;
  messages: Array<string | undefined>;
  errorCode: string;
  additionalData: T;
};

export class STApiError extends Error {
  constructor(private info: STErrorResponse) {
    super();
    this.name = "STApiError";
  }

  getInfo() {
    return this.info;
  }
}

export type ApiErrorHandler = (error: AxiosError<STErrorResponse>) => void;
