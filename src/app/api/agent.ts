import axios, { AxiosResponse } from "axios";
import {
  IGardianResponseSearch,
  IGuardianResponseSingle,
} from "../models/article";

const responseBody = (response: AxiosResponse) => response.data;

const guardianApiKey = process.env.GUARDIAN_API_KEY;

const requests = {
  get: (url: string, params: {}) => axios.get(url, params).then(responseBody),
};

const Articles = {
  guardian: (): Promise<IGardianResponseSearch> =>
    requests.get("https://content.guardianapis.com/search", {
      params: { "api-key": guardianApiKey },
    }),
};

const Article = {
  guardian: (url: string): Promise<IGuardianResponseSingle> =>
    requests.get(url, {
      params: { "api-key": guardianApiKey },
    }),
};

export default {
  Articles,
  Article
};
