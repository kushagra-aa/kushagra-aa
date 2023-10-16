"use client";

import { useEffect, useState } from "react";
import { Colors } from "@/constants/colors";
import "./dropdown.css";
import Input from "../input/Input";
import { CloseIcon, DownIcon } from "@/components/Icons";
import useDebounce from "@/hooks/useDebounce";

export type DropDownPropsType = {
  backgroundColor: Colors;
  options: {
    value: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    selected?: boolean;
  }[];
  className?: string;
  placeholder: string;
  name: string;
  id: string;
  value?: string;
  onChange?: (value: string) => void;
  search?: boolean;
  searchValue?: string;
  onSearch?: (value: string) => void;
  autoSearch?: boolean;
  multiple?: boolean;
  debounceTimeout?: number;
};

function DropDown({
  backgroundColor,
  options,
  className,
  id,
  name,
  value,
  onChange,
  search,
  searchValue,
  onSearch,
  autoSearch,
  multiple,
  placeholder,
  debounceTimeout,
}: DropDownPropsType) {
  const [inputValue, setInputValue] = useState("");
  const [inputDisplayValue, setInputDisplayValue] = useState("");
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [dropdownFocused, setDropdownFocused] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState<
    DropDownPropsType["options"]
  >([]);
  const checkSelectedValues = (op: DropDownPropsType["options"]) => {
    const selectedValues = inputValue.split(",");
    return op.map((option) => ({
      ...option,
      selected: selectedValues.some((v) => option.value === v),
    }));
  };

  const searchOptions = (v: string, op: DropDownPropsType["options"]) => {
    if (v === "") return op;
    const foundOptions = op.filter(
      (item) =>
        item.value.toLowerCase().includes(v.toLowerCase()) ||
        (item.label && item.label.toLowerCase().includes(v.toLowerCase())),
    );
    return foundOptions;
  };

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputDisplayValue(e.target.value);
    if (search) {
      setInputSearchValue(e.target.value);
    }
  };
  const inputFocus = (): void => {
    if (search && inputSearchValue !== undefined)
      setInputDisplayValue(inputSearchValue);
    setDropdownFocused(true);
  };
  const inputBlur = (): void => {
    if (multiple) setInputDisplayValue(value || "");
    else setInputDisplayValue(value || "");
    setDropdownFocused(false);
    setInputSearchValue(searchValue || "");
  };
  const handleOptionSelect = (val: string): void => {
    let newValue = "";
    if (!multiple) {
      newValue = val;
    } else {
      const tempValueArray: string[] = [];
      let isItemFound = false;
      value?.split(",").forEach((v) => {
        if (v === "") return;
        if (v === val) isItemFound = true;
        else tempValueArray.push(v);
      });
      if (!isItemFound) tempValueArray.push(val);
      newValue = tempValueArray.join(",");
    }
    if (onChange) onChange(newValue);
    if (!multiple) inputBlur();
  };
  const clearSelected = (): void => {
    setInputValue("");
    setInputDisplayValue("");
    setInputSearchValue("");
    setDropdownFocused(false);
    if (onChange) onChange("");
  };

  useDebounce(
    () => {
      if (onSearch) {
        onSearch(inputSearchValue);
      }
      if (autoSearch) {
        setDropdownOptions(
          checkSelectedValues(searchOptions(inputSearchValue, options)),
        );
      }
    },
    [inputSearchValue],
    debounceTimeout,
  );

  useEffect(() => {
    if (!multiple) setInputValue(value || "");
    else setInputValue(value || "");
    setInputSearchValue(searchValue || "");
  }, [multiple, search, searchValue, value]);
  useEffect(() => {
    setDropdownOptions(checkSelectedValues(options));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, inputValue]);

  return (
    <div
      onFocus={inputFocus}
      onBlur={inputBlur}
      className={`dropdown_outer ${backgroundColor} ${className}`}
      title={inputValue}
    >
      <div className="dropdown_inner">
        <Input
          id={id}
          inputName={name}
          placeholder={placeholder}
          type="text"
          value={inputDisplayValue}
          onChange={changeInputValue}
          onFocus={inputFocus}
          onBlur={inputBlur}
          readOnly={!search}
        />
      </div>
      <div className={`dropdown_icon ${dropdownFocused ? "open" : "close"}`}>
        <DownIcon />
      </div>
      <button
        onClick={clearSelected}
        type="button"
        className="dropdown_clear_icon"
      >
        <CloseIcon />
      </button>
      <div className={`dropdown_options ${dropdownFocused ? "open" : "close"}`}>
        {dropdownOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              handleOptionSelect(option.value);
            }}
            disabled={option.isDisabled}
            className={`${option.selected ? "selected" : ""} ${
              option.className
            }`}
          >
            {option.label ? option.label : option.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
