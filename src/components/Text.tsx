import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Text = ({ children, size = "md", asChild = false }: TextProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
};
