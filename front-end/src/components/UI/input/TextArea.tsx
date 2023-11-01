import React from "react";

function TextArea({
  id,
  inputName,
  className,
  cols,
  rows,
  placeholder,
  required,
}: {
  id: string;
  inputName: string;
  className?: string;
  cols?: number;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <textarea
      name={inputName}
      id={id}
      className={className}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default TextArea;
