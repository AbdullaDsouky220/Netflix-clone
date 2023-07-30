import useSwr from "swr";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useFavorites = () => {
  const { data, error, isloading, mutate } = useSwr("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  return { data, error, isloading, mutate };
};


export default useFavorites