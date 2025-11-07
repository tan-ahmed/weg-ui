import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.ComponentProps<"svg"> {
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
}

function Spinner({
  className,
  size = "md",
  color = "default",
  ...props
}: SpinnerProps) {
  const sizeClasses = {
    sm: "size-3",
    md: "size-4",
    lg: "size-6",
  };

  const colorClasses = {
    default: "text-gray-600",
    primary: "text-purple-600",
    secondary: "text-gray-500",
    success: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-600",
  };

  return (
    <AiOutlineLoading3Quarters
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
    />
  );
}

export { Spinner };
