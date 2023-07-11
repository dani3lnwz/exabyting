/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";

export default function CustomCard({ children, className}) {
  return (
    <div
      className={twMerge(
        "border-[2px] shadow-lg justify-center items-center flex rounded-[20px]",
        className
      )}
    >
      {children}
    </div>
  );
}
