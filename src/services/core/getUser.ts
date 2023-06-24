import { Tokens } from "../../dto/main";
import { HttpClient, HttpMethods } from "../types/httpClient";

function getUser(httpClient: HttpClient) {
  return ({ accessToken, id }: Tokens) =>
    httpClient
      .sendHttpRequest<any>({
        endpoint: `/user/get/${id}`,
        method: HttpMethods.GET,
        headers: {
          ["accessToken"]: accessToken,
        },
      })
      .then((response) => ({
        uuid: response.id,
        firstName: response.firstname,
        lastName: response.lastname,
        nickName: response.nickname,
        email: response.email,
        password: response.password,
      }))
      .catch((e) => Promise.reject({ ...e, message: e.detail || "" }));
}

export { getUser };
