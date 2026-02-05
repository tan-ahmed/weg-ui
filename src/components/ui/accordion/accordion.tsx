import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { accordionVariants } from "./accordion.variants";

export type AccordionProps = Omit<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
  "type"
> &
  VariantProps<typeof accordionVariants> & {
    /** When true, multiple sections can be open at once. When false, only one section is open at a time. */
    isMultipleOpen?: boolean;
    /** When true, the open section can be closed by clicking again. Only applies when isMultipleOpen is false. */
    collapsible?: boolean;
    /** Background colour of the accordion container. Useful for CMS/theming. */
    backgroundColor?: string;
    /** Colour of the divider between accordion items. Useful for CMS/theming. */
    dividerColor?: string;
    /** Text colour for trigger headings and content. Useful for CMS/theming. */
    textColor?: string;
  };

const ACCORDION_DEFAULT_DIVIDER = "#9ca3af";
const ACCORDION_DEFAULT_TEXT = "#000000";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(
  (
    {
      className,
      size,
      fullWidth,
      isMultipleOpen,
      style,
      backgroundColor,
      dividerColor,
      textColor,
      ...props
    },
    ref
  ) => {
    const rootType = isMultipleOpen ? "multiple" : "single";
    const cssVars = {
      ...(backgroundColor != null && { "--accordion-bg": backgroundColor }),
      ...(dividerColor != null && { "--accordion-divider": dividerColor }),
      ...(textColor != null && { "--accordion-text": textColor }),
    } as React.CSSProperties;
    const rootProps = {
      ref,
      type: rootType,
      className: cn(accordionVariants({ size, fullWidth }), className),
      style: {
        ...cssVars,
        ...(backgroundColor != null && { backgroundColor: "var(--accordion-bg)" }),
        ...style,
      },
      ...props,
    };
    return (
      <AccordionPrimitive.Root
        {...(rootProps as React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>)}
      />
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, style, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b last:border-b-0", className)}
    style={{
      borderColor: "var(--accordion-divider, " + ACCORDION_DEFAULT_DIVIDER + ")",
      ...style,
    }}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, style, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between w-full py-4 text-left font-['Open_Sans'] text-[18px] leading-[28px] font-semibold tracking-normal transition-all",
        "hover:opacity-80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      style={{
        color: "var(--accordion-text, " + ACCORDION_DEFAULT_TEXT + ")",
        ...style,
      }}
      {...props}
    >
      {children}
      <ChevronDown
        className="shrink-0 transition-transform duration-200 [color:inherit]"
        size={24}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, style, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn("pb-7 font-light leading-6", className)}
      style={{
        color: "var(--accordion-text, " + ACCORDION_DEFAULT_TEXT + ")",
        ...style,
      }}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
