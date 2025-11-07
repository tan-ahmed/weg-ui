/**
 * Check if we're in development environment
 */
function isDevelopment(): boolean {
  return (
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname.includes("localhost"))
  );
}

/**
 * Get the base Storybook URL (without any specific path)
 */
export function getBaseStorybookUrl(): string {
  if (isDevelopment()) {
    return "http://localhost:6006";
  } else {
    const baseUrl =
      typeof window !== "undefined"
        ? `${window.location.protocol}//${window.location.host}`
        : "";
    return `${baseUrl}/storybook`;
  }
}

/**
 * Generates Storybook URLs that work in both local development and production
 */
export function getStorybookUrl(path: string): string {
  return `${getBaseStorybookUrl()}/?path=${path}`;
}

/**
 * Predefined Storybook paths for common components
 */
export const STORYBOOK_PATHS = {
  BUTTON: "/story/ui-button--docs",
  ALERT: "/story/ui-alert--docs",
  ACCORDION: "/story/ui-accordion--docs",
  CARD: "/story/components-card--default",
  CHECKBOX: "/story/ui-checkbox--docs",
  DIALOG: "/story/ui-dialog--docs",
  CAROUSEL: "/story/ui-carousel--docs",
  PAGINATION: "/story/ui-pagination--docs",
  PROGRESS: "/story/ui-progress--docs",
  SPINNER: "/story/ui-spinner--docs",
  TABS: "/story/ui-tabs--docs",
  RADIO: "/story/ui-radio--docs",
  TOOLTIP: "/story/ui-tooltip--docs",
} as const;

/**
 * Helper function to get Storybook URL for a specific component
 */
export function getComponentStorybookUrl(
  component: keyof typeof STORYBOOK_PATHS
): string {
  return getStorybookUrl(STORYBOOK_PATHS[component]);
}
