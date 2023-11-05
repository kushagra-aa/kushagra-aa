import { useEffect, useMemo, useState } from "react";
import useURLSearchParams from "./useURLSearchParams";

type FilterType<F> = {
  name: F;
  value: string;
};

export type ParamsConfigType = {
  name: string;
  as?: string;
  calculate?: (val: string) => string;
};

export type UseFiltersPropsType<F> = {
  resetAbleKeys?: F[];
  refresh: (
    paramsConfig: ParamsConfigType[],
    extraParams?: object | undefined,
  ) => void;
};

export default function useFilters<FilterKeysType extends string>({
  refresh,
}: UseFiltersPropsType<FilterKeysType>) {
  const [filters, setFilters] = useState<FilterType<FilterKeysType>[]>([]);
  const [searchParams, setSearchParams, clearSearchParams] =
    useURLSearchParams();

  const getFilters = (name: FilterKeysType): string | undefined =>
    filters.find((filter) => filter.name === name)?.value;

  const getAllFilters = (): { [key in FilterKeysType]: string } | undefined =>
    filters.reduce(
      (acc, obj) => {
        acc[obj.name] = obj.value;
        return acc;
      },
      {} as { [key in FilterKeysType]: string },
    );

  const changeFilter = (name: FilterKeysType, value: string) => {
    setFilters((fil) => {
      const foundFilter = fil.findIndex((filter) => filter.name === name);

      if (foundFilter < 0) return [...fil, { name, value }];
      return fil.map((filter) =>
        filter.name === name ? { ...filter, value } : filter,
      );
    });
  };

  const deleteFilter = (name: FilterKeysType) => {
    setFilters((fil) => fil.filter((f) => f.name !== name));
  };

  const clearFilters = () => {
    setFilters(() => []);
    clearSearchParams();
  };

  const refreshData = () => {
    refresh([{ name: "limit" }], { ...getAllFilters(), offset: 0 });
  };

  useEffect(() => {
    setSearchParams(
      filters.map((filter) => ({ key: filter.name, value: filter.value })),
    );
    refreshData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
  useEffect(() => {
    setFilters(() => {
      const newFilters: FilterType<FilterKeysType>[] = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(searchParams)) {
        newFilters.push({ name: key as FilterKeysType, value });
      }
      return newFilters;
    });
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

  return { filters: filterMethods, refreshData };
}
