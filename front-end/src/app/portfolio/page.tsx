"use client";

import { useEffect, useState } from "react";
import Input from "@/components/UI/input/Input";
import styles from "./page.module.css";
import InputGroup from "@/components/UI/input/InputGroup";
import { CloseIcon, SearchIcon } from "@/components/Icons";
import Button from "@/components/UI/button/Button";
import DropDown from "@/components/UI/dropDown/DropDown";

function Search({
  onSearch,
  value,
}: {
  value?: string;
  onSearch: (val?: string) => void;
}) {
  const handleSearch = () => {
    onSearch(value);
  };
  const handleSearchClear = () => {
    onSearch(undefined);
  };

  return (
    <InputGroup className={styles.search} title="" inputName="search">
      <Button
        onClick={handleSearch}
        className={styles.search_button}
        size="small"
        type="button"
      >
        <SearchIcon />
      </Button>
      <Input
        placeholder="Search"
        inputName="search"
        id="search"
        type="text"
        value={value || ""}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
      <Button
        onClick={handleSearchClear}
        className={styles.search_clear_button}
        size="small"
        type="button"
      >
        <CloseIcon />
      </Button>
    </InputGroup>
  );
}

type FiltersType = {
  tech?: string;
  tag?: string;
  search?: string;
};

const defaultFiltersValue: FiltersType = {};

export default function Portfolio() {
  const [filters, setFilters] = useState<FiltersType>(defaultFiltersValue);
  const handleTechChange = (value: string): void => {
    setFilters((f) => ({ ...f, tech: value }));
  };
  const handleTagChange = (value: string): void => {
    setFilters((f) => ({ ...f, tag: value }));
  };
  const onSearch = (value?: string): void => {
    console.log("value :>> ", value);
    setFilters((f) => ({ ...f, search: value }));
  };

  useEffect(() => {
    console.log("filters :>> ", filters);
  }, [filters]);

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h1>Portfolio</h1>
        <p className={styles.sub}>
          Want to see my Creations
          <span>?</span>
        </p>
      </div>
      <div className={styles.filters}>
        <Search value={filters.search} onSearch={onSearch} />
        <div className={styles.filters_selects}>
          <p>filters:</p>
          <DropDown
            id="tech"
            name="tech"
            placeholder="Tech"
            className={styles.filter_dropdown}
            options={[
              { value: "css" },
              { value: "html" },
              { value: "js" },
              { value: "ts" },
              { value: "dart" },
            ]}
            backgroundColor="light-2"
            value={filters.tech}
            onChange={handleTechChange}
            search
            autoSearch
            multiple
          />
          <DropDown
            id="tag"
            name="tag"
            placeholder="Tag"
            className={styles.filter_dropdown}
            options={[
              { value: "game" },
              { value: "app" },
              { value: "android" },
              { value: "website" },
              { value: "desktop" },
            ]}
            backgroundColor="light-2"
            value={filters.tag}
            onChange={handleTagChange}
            search
            autoSearch
            multiple
          />
        </div>
      </div>
    </div>
  );
}
