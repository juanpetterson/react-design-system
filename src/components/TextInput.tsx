import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
  hasError?: boolean;
}

const TextInputRoot = ({ children, hasError }: TextInputRootProps) => {
  return (
    <div
      className={clsx(
        "w-full flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-green-300",
        {
          "ring-danger": hasError,
          "ring-2": hasError,
        }
      )}
    >
      {children}
    </div>
  );
};

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400  outline-none"
      {...props}
    />
  );
};

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
