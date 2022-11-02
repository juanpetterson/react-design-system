import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild = false }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-green-500 rounded font-semibold text-color-black text-sm w-full transition-colors hover:bg-green-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
};
