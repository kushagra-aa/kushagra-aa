/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/require-default-props */
import { Colors } from "@/constants/colors";
import "./button.css";

type ButtonPropType = {
  children: React.ReactNode;
  backgroundColor?: Colors;
  foregroundColor?: Colors;
  strokeColor?: Colors;
  type: "link" | "button";
  size: "small" | "medium" | "large";
  stoke?: "stroke-1" | "stroke-2" | "stroke-3" | "stroke-4";
  theme?: "theme-1" | "theme-2";
  title?: string;
  className?: string;
  style?: {};
  disabled?: boolean;
  onClick?: () => void;
};

function Button({
  children,
  title,
  style,
  className,
  backgroundColor,
  foregroundColor,
  strokeColor,
  size,
  theme,
  stoke,
  type,
  disabled,
  onClick,
}: ButtonPropType) {
  return (
    <div
      title={title}
      style={style}
      className={`${className} ${theme}-button background-${backgroundColor} foreground-${foregroundColor} stroke-${strokeColor} ${stoke} button-${size} ${type}
      ${disabled ? "disabled" : ""}`}
      // tabIndex={disabled ? -1 : 0}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
