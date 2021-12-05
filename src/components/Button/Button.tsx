import { IconLoader } from "@tabler/icons";
import clsx from "clsx";
import type { FC, ReactNode } from "react";

interface ButtonProps {
  variant?: "filled" | "tonal";
  onClick?(): void;
  className?: string;
  fetching?: boolean;
  disabled?: boolean;
  left?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "filled",
  children,
  className,
  onClick,
  fetching,
  disabled,
  left,
}) => {
  disabled = disabled || fetching;
  return (
    <button
      className={clsx(
        `flex overflow-hidden relative justify-center items-center px-6 space-x-2 h-10 rounded-full focus-visible:ring-2 focus:outline-none`,
        variant === "filled" &&
          !disabled &&
          "text-on-primary bg-primary after:bg-on-primary",
        variant === "tonal" &&
          !disabled &&
          "text-on-secondary-container bg-secondary-container after:bg-on-secondary-container",
        "after:absolute after:inset-0 after:bg-opacity-0 hover:after:bg-opacity-8 focus:after:bg-opacity-12 after:pointer-events-none",
        disabled &&
          "text-on-surface text-opacity-40 bg-on-surface bg-opacity-12",
        className
      )}
      onClick={onClick}
      disabled={fetching || disabled}
    >
      {fetching ? (
        <span className="animate-spin">
          <IconLoader />
        </span>
      ) : (
        left
      )}
      <span className="text-sm font-medium">{children}</span>
    </button>
  );
};

export default Button;
