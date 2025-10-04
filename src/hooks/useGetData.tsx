import { useQuery } from "@tanstack/react-query";

import { getData } from "../api/getData";

type useGetDataProps = {
  keys: string[];
  url: string;
  retry?: boolean;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { keys, url, retry = true } = props;
  return useQuery({
    queryKey: keys,
    queryFn: () => getData<T>(url),
    retry,
  });
};

export default useGetData;
