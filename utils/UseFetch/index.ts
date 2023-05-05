import { useState, useEffect } from "react";
import HttpService from "../../services/http.service";
import { Callback } from "../types";

type QueryParams = { [key: string]: string };

export interface FetchValue<T> {
  data: T | null;
  error: any;
  isLoading: boolean;
}

export const useFetch = <T>(
  url: string,
  queryParams: QueryParams = {},
  callback: Callback<T> = () => {}
): FetchValue<T> => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params =
    Object.keys(queryParams).length > 0
      ? `?${new URLSearchParams(queryParams).toString()}`
      : "";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await HttpService.get(`${url}${params}`);
        const { data, meta } = response.data;

        if (meta.status) {
          setData(data);
        } else {
          setError(data);
        }
        if (callback) {
          callback(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [url, params]);

  return { data, error, isLoading };
};
