import axios, { AxiosResponse } from "axios";
import { IArticle, IGardianResponse } from "../models/article";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, params: {}) => axios.get(url, params).then(responseBody),
};

const Articles = {
  guardian: (): Promise<IGardianResponse> =>
    requests.get("https://content.guardianapis.com/search", {
      params: { "api-key": "0c78c472-198c-4413-9f87-92bc2f621783" },
    }),
};

export default {
  Articles,
};
