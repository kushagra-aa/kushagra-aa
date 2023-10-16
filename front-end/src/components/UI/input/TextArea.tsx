import React from "react";

function TextArea({
  id,
  inputName,
  className,
  cols,
  rows,
  placeholder,
}: {
  id: string;
  inputName: string;
  className?: string;
  cols?: number;
  rows?: number;
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
    />
  );
}

export default TextArea;
