import React from "react";

type InputTypes = "text" | "password" | "email" | "number";

function Input({
  type,
  id,
  inputName,
  className,
}: {
  type: InputTypes;
  id: string;
  inputName: string;
  className?: string;
}) {
  return <input type={type} name={inputName} id={id} className={className} />;
}

export default Input;
