import { cva } from "class-variance-authority";

export const accordionVariants = cva("bg-[#e6e7e7] rounded-xl", {
  variants: {
    size: {
      sm: "p-4 text-base",
      md: "px-6 py-4 text-lg",
      lg: "px-12 py-8 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
