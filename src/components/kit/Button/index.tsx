import clsx from "clsx";

type TSize = "sm" | "md" | "lg";
type TColor =
  | "brand"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info";

type TVariant = "contained" | "outlined" | "text";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
  size?: TSize;
  active?: boolean;
  loading?: boolean;
  color?: TColor;
}

const sizeStyles = {
  sm: "h-9 text-sm px-3",
  md: "h-12 text-base px-4",
  lg: "h-16 text-lg px-6",
};

const colorStyles: Record<TColor, string> = {
  brand: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-gray-500 text-white hover:bg-gray-600",
  success: "bg-green-500 text-white hover:bg-green-600",
  error: "bg-red-500 text-white hover:bg-red-600",
  warning: "bg-yellow-500 text-black hover:bg-yellow-600",
  info: "bg-blue-500 text-white hover:bg-blue-600",
};

const variantStyles: Record<TVariant, string> = {
  contained: "",
  outlined: "bg-transparent border border-current",
  text: "bg-transparent hover:bg-gray-100",
};

const Button: React.FC<IProps> = ({
  variant = "contained",
  fullWidth = false,
  children,
  size = "md",
  active = false,
  loading = false,
  color = "brand",
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "rounded-lg transition-all duration-200 flex items-center justify-center",
        sizeStyles[size],
        variantStyles[variant],
        variant === "contained" && colorStyles[color],
        fullWidth && "w-full",
        active && "ring-2 ring-offset-2 ring-purple-500",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;