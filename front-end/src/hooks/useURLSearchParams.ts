import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import getSearchParamsAsObjects from "@/helpers/getSearchParamsAsObjects";

type SearchParamsExpandedType = {
  key: string;
  value: string;
};
type SearchParamsType = {
  [key: string]: string;
};

function useURLSearchParams(): [
  SearchParamsType,
  (obj: SearchParamsExpandedType | SearchParamsExpandedType[]) => void,
  () => void,
] {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useMemo<SearchParamsType>(
    () => getSearchParamsAsObjects(params),
    [params],
  );

  const setSearchParams = (
    obj: SearchParamsExpandedType | SearchParamsExpandedType[],
  ) => {
    const newParams = new URLSearchParams(params.toString());
    if (Array.isArray(obj)) obj.forEach((v) => newParams.set(v.key, v.value));
    else newParams.set(obj.key, obj.value);
    router.push(`${pathname}?${newParams}`);
  };

  const clearSearchParams = () => {
    router.push(`${pathname}`);
  };

  return [searchParams, setSearchParams, clearSearchParams];
}

export default useURLSearchParams;
