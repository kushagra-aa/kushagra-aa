"use client";

type InputTypes = "text" | "password" | "email" | "number";

function Input({
  type,
  id,
  inputName,
  className,
  value,
  placeholder,
  disabled,
  readOnly,
  onChange,
  onClick,
  onKeyDown,
  onFocus,
  onBlur,
}: {
  type: InputTypes;
  id: string;
  inputName: string;
  className?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      name={inputName}
      id={id}
      className={className}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      onChange={(e) => {
        if (onChange) onChange(e);
      }}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      onKeyDown={(e) => {
        if (onKeyDown) onKeyDown(e);
      }}
      onFocus={(e) => {
        if (onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        if (onBlur) onBlur(e);
      }}
    />
  );
}

export default Input;
