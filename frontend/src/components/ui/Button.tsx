import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  fullWidth?: boolean;
}

function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60",

        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "bg-slate-900 text-white hover:bg-slate-800":
            variant === "secondary",

          "border border-slate-300 bg-white hover:bg-slate-100":
            variant === "outline",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",

          "w-full": fullWidth,
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;