import Input from "@/components/UI/input/Input";
import InputGroup from "@/components/UI/input/InputGroup";
import { CloseIcon, SearchIcon } from "@/components/Icons";
import Button from "@/components/UI/button/Button";
import "./search.css";

export default function Search({
  onSearch,
  value,
  searchFor,
}: {
  value?: string;
  searchFor: string;
  onSearch: (val?: string) => void;
}) {
  const handleSearch = () => {
    onSearch(value);
  };
  const handleSearchClear = () => {
    onSearch(undefined);
  };

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
        value={value || ""}
        onChange={(e) => {
          onSearch(e.target.value);
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
