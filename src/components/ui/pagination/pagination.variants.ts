import { cva } from "class-variance-authority";

export const paginationVariants = cva(
  "flex items-center justify-between w-full",
  {
    variants: {
      size: {
        sm: "max-w-xs text-xs",
        md: "max-w-sm text-sm",
        lg: "max-w-md text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
