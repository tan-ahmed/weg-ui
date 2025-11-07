import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { alertVariants } from "./alert.variants";
import { IoCheckmark, IoClose as IoCloseSmall } from "react-icons/io5";
import { BsExclamationTriangle } from "react-icons/bs";

import { AiOutlineExclamationCircle } from "react-icons/ai";

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  onDismiss?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, children, onDismiss, ...props }, ref) => {
    // Get default icon based on variant
    const getDefaultIcon = () => {
      switch (variant) {
        case "success":
          return <IoCheckmark className="w-6 h-6 sm:w-8 sm:h-8 text-white" />;
        case "error":
          return (
            <AiOutlineExclamationCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          );
        case "warning":
          return (
            <BsExclamationTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          );
        default:
          return <IoCheckmark className="w-6 h-6 sm:w-8 sm:h-8 text-white" />;
      }
    };

    return (
      <div
        className={cn(alertVariants({ variant, className }))}
        ref={ref}
        role="alert"
        {...props}
      >
        <span className="alert__icon flex items-center justify-center shrink-0">
          {icon || getDefaultIcon()}
        </span>
        <span className="alert__content flex-1">{children}</span>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="alert__dismiss flex items-center justify-center hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-1"
            aria-label="Dismiss alert"
          >
            <IoCloseSmall className="w-5 h-5" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert };
