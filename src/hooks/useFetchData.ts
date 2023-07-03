import { useEffect, useState } from "react";

import axios from "axios";

type OptionsType = {
  url: string;
  options?: {
    method?: string;
    body?: string;
    params?: { fields: string };
  };
};

const useFetchData = ({ url, options }: OptionsType) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios({
          url,
          method: options?.method || "GET",
          data: options?.body,
          params: options?.params,
          headers: {
            "Content-type": "application/json",
          },
        });
        setData(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`Error retrieving data: ${error}`);
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
