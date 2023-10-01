import React from "react";

function InputGroup({
  children,
  title,
  inputName,
  className,
}: {
  children: React.ReactNode;
  title: string;
  inputName: string;
  className?: string;
}) {
  return (
    <label className={className} htmlFor={inputName}>
      {title}
      {children}
    </label>
  );
}

export default InputGroup;
