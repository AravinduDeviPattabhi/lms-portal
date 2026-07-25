import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={clsx(
        "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition",
        "focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
        className
      )}
      {...props}
    />
  );
}

export default Input;