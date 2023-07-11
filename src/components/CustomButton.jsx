/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

const CustomButton = ({
  color = "primary",
  variant = "filled",
  children,
  className,
}) => {
  const colors = {
    primary:
      "bg-primary",
    success:
      "bg-green-700 hover:bg-green-800 focus:ring-green-300 border-green-700",
  };

  const variants = {
    filled: "",
    outlined: "border bg-transparent",
  };

  return (
    <button
      className={twMerge(
        "inline-flex items-center text-normal font-semibold text-center text-white  rounded-lg  focus:ring-4 focus:outline-none",
        colors[color],
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
