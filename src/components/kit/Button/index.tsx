// // import React from "react";

// // type ButtonVariant = "contained" | "outlined" | "text";
// // type ButtonSize = "sm" | "md" | "lg";
// // type ButtonColor = "primary" | "secondary" | "danger";

// // type ButtonProps = {
// //   variant?: ButtonVariant;
// //   buttonSize?: ButtonSize;
// //   fullWidth?: boolean;
// //   active?: boolean;
// //   loading?: boolean;
// //   color?: ButtonColor;
// //   children?: React.ReactNode;
// //   onClick?: () => void;
// //   className?: string;
// // };

// // const sizeClasses: Record<ButtonSize, string> = {
// //   sm: "px-3 py-1 text-sm",
// //   md: "px-4 py-2 text-base",
// //   lg: "px-6 py-3 text-lg",
// // };

// // const colorClasses: Record<ButtonColor, string> = {
// //   primary: "bg-blue-[#4880FF] text-white border-blue-600",
// //   secondary: "bg-gray-600 text-white border-gray-600",
// //   danger: "bg-red-600 text-white border-red-600",
// // };

// // const Button: React.FC<ButtonProps> = ({
// //   variant = "contained",
// //   buttonSize = "md",
// //   fullWidth = false,
// //   active = false,
// //   loading = false,
// //   color = "primary",
// //   children,
// //   onClick,
// //   className = "",
// // }) => {
// //   const base =
// //     "inline-flex items-center justify-center rounded-lg font-medium transition border";

// //   const size = sizeClasses[buttonSize];

// // const variants: Record<ButtonVariant, string> = {
// //   contained: "",
// //   outlined: "bg-transparent border",
// //   text: "bg-transparent border-none",
// // };
// // const colorClasses: Record<ButtonColor, string> = {
// //   primary: "bg-blue-600 text-white border-blue-600",
// //   secondary: "bg-gray-600 text-white border-gray-600",
// //   danger: "bg-red-600 text-white border-red-600",
// // };

// //   return (
// //     <button
// //       onClick={onClick}
// //       disabled={loading}
// //       className={`
// //         ${base}
// //         ${size}
// //         ${variants[variant]}
// //         ${fullWidth ? "w-full" : ""}
// //         ${active ? "ring-2 ring-offset-2 ring-blue-400" : ""}
// //         ${loading ? "opacity-60 cursor-not-allowed" : ""}
// //         ${className}
// //       `}
      
// //     >
// //       {loading ? "Loading..." : children}
// //     </button>
// //   );
// // };

// // export default Button;




// import className from "classnames";
// import classNames from "classnames";
// import React from "react";

// type ButtonProps = {
//   children: React.ReactNode;

//   primary?: boolean;
//   secondary?: boolean;
//   success?: boolean;
//   warning?: boolean;
//   danger?: boolean;

//   outline?: boolean;
//   rounded?: boolean;

//   onClick?: () => void;
// };

// export default function Button({
//   children,
//   primary,
//   secondary,
//   success,
//   warning,
//   danger,
//   outline,
//   rounded,
// } : ButtonProps) {
//   //1st arg:: for all variations.
//   const classes = className("px-3 py-1.5 border", {
//     "border-blue-500 bg-blue-500 text-white": primary,
//     "border-gray-900 bg-gray-900 text-white": secondary,
//     "border-green-500 bg-green-500 text-white": success,
//     "border-yellow-400 bg-yellow-400 text-white": warning,
//     "border-red-500 bg-red-500 text-white": danger,
//     "rounded-full": rounded,
//     "bg-white": outline,
//     "text-blue-500": outline && primary,
//     "text-gray-900": outline && secondary,
//     "text-green-500": outline && success,
//     "text-yellow-500": outline && warning,
//     "text-red-500": outline && danger,
//   });

//   return <button className={classes}>{children}</button>;
// }

// Button.propTypes = {
//   checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
//     const count =
//       Number(!!primary) +
//       Number(!!secondary) +
//       Number(!!success) +
//       Number(!!danger) +
//       Number(!!warning);
//     if (count > 1) {
//       return new Error("Only one of p, s, w , s ,d can be true");
//     }
//   },
// };