/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/require-default-props */
import "./button.css";

type Colors =
  | "dark-1"
  | "dark-2"
  | "light-1"
  | "light-2"
  | "accent-1"
  | "accent-2";

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
}: ButtonPropType) {
  return (
    <div
      title={title}
      style={style}
      className={`${className} ${theme}-button background-${backgroundColor} foreground-${foregroundColor} stroke-${strokeColor} ${stoke} button-${size} ${type}
      ${disabled ? "disabled" : ""}`}
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </div>
  );
}

export default Button;
