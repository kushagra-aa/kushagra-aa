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
type SetSearchParamsConfigType = {
  clearPrevious?: boolean;
};

function useURLSearchParams(): [
  SearchParamsType,
  (
    obj: SearchParamsExpandedType | SearchParamsExpandedType[],
    config?: SetSearchParamsConfigType,
  ) => void,
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
    config?: SetSearchParamsConfigType,
  ) => {
    let newParams = new URLSearchParams("");
    if (!config?.clearPrevious)
      newParams = new URLSearchParams(params.toString());
    if (Array.isArray(obj)) obj.forEach((v) => newParams.set(v.key, v.value));
    else newParams.set(obj.key, obj.value);
    router.push(`${pathname}?${newParams}`);
  };

  const clearSearchParams = () => {
    console.log("Clear search params");
    console.log("pathname :>> ", pathname);
    router.push(`${pathname}`);
  };

  return [searchParams, setSearchParams, clearSearchParams];
}

export default useURLSearchParams;
