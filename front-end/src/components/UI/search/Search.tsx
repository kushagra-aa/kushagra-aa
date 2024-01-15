import { useEffect, useState } from "react";
import Input from "@/components/UI/input/Input";
import InputGroup from "@/components/UI/input/InputGroup";
import { CloseIcon, SearchIcon } from "@/components/Icons";
import Button from "@/components/UI/button/Button";
import "./search.css";
import useDebounce from "@/hooks/useDebounce";

export default function Search({
  onSearch,
  className,
  value,
  searchFor,
  debounceTimeout,
}: {
  value?: string;
  className?: string;
  searchFor: string;
  onSearch: (val?: string) => void;
  debounceTimeout?: number;
}) {
  const [searchValue, setSearchValue] = useState("");
  const [visibleSearchValue, setVisibleSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(visibleSearchValue);
  };
  const handleSearchClear = () => {
    onSearch(undefined);
    setSearchValue("");
  };
  const handleSearchValueChange = (val: string) => {
    setSearchValue(val);
    setVisibleSearchValue(val);
  };

  useDebounce(
    () => {
      if (onSearch) {
        onSearch(searchValue);
      }
    },
    [searchValue],
    debounceTimeout,
  );

  useEffect(() => {
    setVisibleSearchValue(value || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <InputGroup
      className={`${className} search`}
      title=""
      hoverTitle={`Search in ${searchFor}`}
      inputName="search"
    >
      <Button
        onClick={handleSearch}
        className="search_button"
        size="small"
        type="button"
      >
        <SearchIcon />
      </Button>
      <Input
        placeholder={`Search in ${searchFor}`}
        inputName="search"
        id="search"
        type="text"
        value={visibleSearchValue || ""}
        onChange={(e) => {
          handleSearchValueChange(e.target.value);
        }}
      />
      <Button
        onClick={handleSearchClear}
        className="search_clear_button"
        size="small"
        type="button"
      >
        <CloseIcon />
      </Button>
    </InputGroup>
  );
}
