import axios from "axios";

type ApiClientType = {
  url: string;
  options?: {
    method?: string;
    body?: string;
    params?: { fields: string };
  };
};

export const apiClient = async ({
  url,
  options = {
    method: "GET",
  },
}: ApiClientType) => {
  return await axios({
    url,
    method: options?.method,
    data: options?.body,
    params: options?.params,
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.data)
    .catch((error) => console.error(`Error retrieving data: ${error}`));
};
