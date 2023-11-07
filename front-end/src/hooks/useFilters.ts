import { useEffect, useMemo, useState } from "react";
import useURLSearchParams, {
  SearchParamsExpandedType,
} from "./useURLSearchParams";

export type ParamsConfigType = {
  name: string;
  as?: string;
  calculate?: (val: string) => string;
};

export type FilterConfigType<F, V> = {
  name: F;
  getter?: (val: V) => string;
  setter?: (val: string) => V;
  isSearchParam?: boolean;
};

export type UseFiltersPropsType<F> = {
  defaultFilters: F;
  filtersConfig: FilterConfigType<keyof F, any>[];
  resetAbleKeys?: F[];
  refresh: (
    paramsConfig: ParamsConfigType[],
    extraParams?: object | undefined,
  ) => void;
};

export default function useFilters<FiltersType>({
  filtersConfig,
  defaultFilters,
  refresh,
}: UseFiltersPropsType<FiltersType>) {
  const [filters, setFilters] = useState<FiltersType>(defaultFilters);
  const [searchParams, setSearchParams, clearSearchParams] =
    useURLSearchParams();

  const getFilters = (name: keyof FiltersType): any => {
    const val = filters ? filters[name] : undefined;
    if (!val) return undefined;
    const filterConfig = filtersConfig.find((filter) => filter.name === name);
    if (filterConfig === undefined || !filterConfig.getter) return val;
    return filterConfig.getter(val);
  };
  const getAllFilters = (): FiltersType => filters;

  const changeFilter = (name: keyof FiltersType, value: any) => {
    const filterConfig = filtersConfig.find((f) => f.name === name);
    let newValue = value;
    if (filterConfig && filterConfig.setter)
      newValue = filterConfig.setter(value);
    setFilters((fil) => ({ ...fil, [name]: newValue }) as FiltersType);
  };

  const deleteFilter = (name: keyof FiltersType) => {
    setFilters((fil) => ({ ...fil, [name]: undefined }) as FiltersType);
  };

  const clearFilters = () => {
    setFilters(() => defaultFilters);
    clearSearchParams();
  };

  const refreshData = () => {
    refresh([{ name: "limit" }], { ...getAllFilters(), offset: 0 });
  };

  useEffect(() => {
    const params: SearchParamsExpandedType[] = [];
    Object.entries(filters || {}).forEach(([key, value]) => {
      const filterConfig = filtersConfig.find((f) => f.name === key);
      if (filterConfig?.isSearchParam && (value || value === 0))
        params.push({
          key,
          value: value as string,
        });
    });
    setSearchParams(params, { clearPrevious: true });
    refreshData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  useEffect(() => {
    setFilters(
      () => ({ ...defaultFilters, ...searchParams }) as unknown as FiltersType,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterMethods = useMemo(
    () => ({
      get: getFilters,
      all: getAllFilters,
      set: changeFilter,
      delete: deleteFilter,
      clear: clearFilters,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { filters, changeFilters: filterMethods, refreshData };
}
