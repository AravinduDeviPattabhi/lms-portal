import type { LabelHTMLAttributes } from "react";
import clsx from "clsx";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={clsx(
        "mb-2 block text-sm font-medium text-slate-700",
        className
      )}
      {...props}
    />
  );
}

export default Label;