/* eslint-disable react/require-default-props */
import "./buttons.css";

type Colors =
  | "dark-1"
  | "dark-2"
  | "light-1"
  | "light-2"
  | "accent-1"
  | "accent-2";

type ButtonPropType = {
  children: React.ReactNode;
  onClick: () => void;
  backgroundColor?: Colors;
  foregroundColor?: Colors;
  strokeColor?: Colors;
  size: "small" | "medium" | "large";
  stoke?: "stroke-1" | "stroke-2" | "stroke-3" | "stroke-4";
  theme?: "theme-1" | "theme-2";
  title?: string;
  className?: string;
  style?: {};
};

function Button({
  children,
  title,
  onClick,
  style,
  className,
  backgroundColor,
  foregroundColor,
  strokeColor,
  size,
  theme,
  stoke,
}: ButtonPropType) {
  return (
    <button
      title={title}
      onClick={() => onClick()}
      style={style}
      className={`${className} ${theme}-button background-${backgroundColor} foreground-${foregroundColor} stroke-${strokeColor} ${stoke} button-${size} button`}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
