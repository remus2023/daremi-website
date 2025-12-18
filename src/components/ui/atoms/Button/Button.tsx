import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  className,
  type = "button",
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
}: ButtonProps) {
  const classes = clsx(
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    {
      "btn--full": full,
      "btn--disabled": disabled,
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
