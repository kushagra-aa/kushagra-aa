import React from "react";

function TextArea({
  id,
  inputName,
  className,
  cols,
  rows,
}: {
  id: string;
  inputName: string;
  className?: string;
  cols?: number;
  rows?: number;
}) {
  return (
    <textarea
      name={inputName}
      id={id}
      className={className}
      cols={cols}
      rows={rows}
    />
  );
}

export default TextArea;
