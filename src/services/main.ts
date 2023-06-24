import type {
  HttpClient,
  HttpMethods,
  RequestConfig,
} from "./types/httpClient";
import type { Service } from "./types/service";

import { getUser } from "./core/getUser.ts";

function createService(apiHttpClient: HttpClient): Service {
  return {
    getUser: getUser(apiHttpClient),
  };
}

export { createService, Service, HttpMethods, HttpClient, RequestConfig };
