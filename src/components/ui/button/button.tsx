import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button.variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      iconLeft,
      iconRight,
      children,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled}
        style={{ fontFamily: '"Open Sans", sans-serif', ...style }}
        {...props}
      >
        {iconLeft && (
          <span className="button__icon button__icon--left flex items-center justify-center shrink-0">
            {iconLeft}
          </span>
        )}
        <span className="button__text flex flex-col justify-center leading-none">
          {children}
        </span>
        {iconRight && (
          <span className="button__icon button__icon--right flex items-center justify-center shrink-0">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
