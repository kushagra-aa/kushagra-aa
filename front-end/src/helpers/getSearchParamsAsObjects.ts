import { ReadonlyURLSearchParams } from "next/navigation";

const getSearchParamsAsObjects = (params: ReadonlyURLSearchParams) => {
  const paramsObject: { [key: string]: string } = {};
  params.forEach((value, key) => {
    paramsObject[key] = value;
  });
  return paramsObject;
};
export default getSearchParamsAsObjects;
