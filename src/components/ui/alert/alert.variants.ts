import { cva } from "class-variance-authority";

export const alertVariants = cva(
  "inline-flex items-center gap-3 rounded-full font-medium transition-all duration-200 text-base px-4 py-4 sm:px-7",
  {
    variants: {
      variant: {
        success: "bg-success text-success-foreground",
        error: "bg-destructive text-destructive-foreground",
        warning: "bg-warning text-warning-foreground",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);
