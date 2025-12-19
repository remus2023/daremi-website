import NextLink from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

export type LinkVariant = "default" | "muted" | "underline" | "block";

export type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: LinkVariant;
  className?: string;
};

export default function Link({
  href,
  children,
  variant = "default",
  className,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={clsx(
        "link",
        variant !== "default" && `link--${variant}`,
        className
      )}
    >
      {children}
    </NextLink>
  );
}
