import React from "react";

function InputGroup({
  children,
  title,
  inputName,
  className,
  hoverTitle,
}: {
  children: React.ReactNode;
  title: string;
  inputName: string;
  className?: string;
  hoverTitle?: string;
}) {
  return (
    <label title={hoverTitle} className={className} htmlFor={inputName}>
      {title}
      {children}
    </label>
  );
}

export default InputGroup;
