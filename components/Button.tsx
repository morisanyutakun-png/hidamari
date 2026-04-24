import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants = {
  primary:
    "bg-[var(--color-sun)] text-stone-950 shadow-sm hover:bg-[var(--color-sun-strong)]",
  secondary:
    "border border-[var(--color-leaf)] bg-white/80 text-stone-900 hover:bg-[var(--color-leaf-soft)]",
  ghost: "text-stone-800 hover:bg-white/70",
};

function isLinkButton(props: LinkButtonProps | NativeButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-bold leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-leaf)] ${variants[variant]} ${className}`;

  if (isLinkButton(props)) {
    const {
      href,
      children: _children,
      variant: _variant,
      className: _className,
      ...linkProps
    } = props;
    void _children;
    void _variant;
    void _className;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    children: _children,
    variant: _variant,
    className: _className,
    ...buttonProps
  } = props;
  void _children;
  void _variant;
  void _className;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
