import { usePathname, useRouter, useSearchParams } from "next/navigation";

function useURLSearchParams() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchParams = (() => {
    const paramsObject: { [key: string]: string } = {};
    params.forEach((value, key) => {
      paramsObject[key] = value;
    });
    return paramsObject;
  })();
  const setSearchParams = (
    obj: { key: string; value: string } | { key: string; value: string }[],
  ) => {
    const newParams = new URLSearchParams(params.toString());
    if (Array.isArray(obj)) obj.forEach((v) => newParams.set(v.key, v.value));
    else newParams.set(obj.key, obj.value);
    router.push(`${pathname}?${newParams}`);
  };

  return { searchParams, setSearchParams };
}

export default useURLSearchParams;
