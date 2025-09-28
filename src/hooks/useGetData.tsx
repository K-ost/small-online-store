import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/getData";

type useGetDataProps = {
  keys: string[];
  url: string;
};

const useGetData = <T,>(props: useGetDataProps) => {
  const { keys, url } = props;
  return useQuery({
    queryKey: keys,
    queryFn: () => getData<T>(url),
  });
};

export default useGetData;
