import { useEffect, useState } from "react";
import Input from "@/components/UI/input/Input";
import InputGroup from "@/components/UI/input/InputGroup";
import { CloseIcon, SearchIcon } from "@/components/Icons";
import Button from "@/components/UI/button/Button";
import "./search.css";
import useDebounce from "@/hooks/useDebounce";

export default function Search({
  onSearch,
  value,
  searchFor,
  debounceTimeout,
}: {
  value?: string;
  searchFor: string;
  onSearch: (val?: string) => void;
  debounceTimeout?: number;
}) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    onSearch(value);
  };
  const handleSearchClear = () => {
    onSearch(undefined);
  };
  const handleSearchValueChange = (val: string) => {
    setSearchValue(val);
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
    setSearchValue(value || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputGroup
      className="search"
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
        value={searchValue || ""}
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