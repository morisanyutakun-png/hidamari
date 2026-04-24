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
    "bg-[var(--color-ink)] text-white shadow-[0_14px_30px_rgba(29,29,31,0.18)] hover:bg-stone-700",
  secondary:
    "border border-[var(--color-line)] bg-white/70 text-stone-950 shadow-sm backdrop-blur hover:bg-white",
  ghost: "text-stone-700 hover:bg-white/70",
};

function isLinkButton(props: LinkButtonProps | NativeButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-bold leading-none transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-leaf)] ${variants[variant]} ${className}`;

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
