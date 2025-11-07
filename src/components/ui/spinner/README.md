# Spinner

A spinner component that displays a loading indicator to show that content is being processed or loaded.

## Features

- **Loading Indicator**: Visual indicator for loading states
- **Multiple Sizes**: Small, medium, and large sizes
- **Color Variants**: Default, primary, secondary, success, warning, and error colors
- **Accessible**: Built with proper ARIA attributes for screen readers
- **Customizable**: Supports custom styling and animations
- **Flexible**: Can be used in buttons, badges, and other components

## Installation

```bash
# Install the required dependencies
npm install lucide-react
```

## Usage

### Basic Usage

```tsx
import { Spinner } from "@/components/ui/spinner";

export function SpinnerDemo() {
  return <Spinner />;
}
```

### With Size and Color

```tsx
import { Spinner } from "@/components/ui/spinner";

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" color="primary" />
      <Spinner size="md" color="success" />
      <Spinner size="lg" color="error" />
    </div>
  );
}
```

### In Buttons

```tsx
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function LoadingButton() {
  return (
    <Button disabled>
      <Spinner size="sm" />
      Loading...
    </Button>
  );
}
```

### In Badges

```tsx
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

export function LoadingBadge() {
  return (
    <Badge>
      <Spinner size="sm" />
      Processing
    </Badge>
  );
}
```

### Loading States

```tsx
import { Spinner } from "@/components/ui/spinner";

export function LoadingStates() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Spinner size="sm" />
        <span>Processing payment...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="sm" color="success" />
        <span>Uploading file...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="sm" color="warning" />
        <span>Validating data...</span>
      </div>
    </div>
  );
}
```

## API Reference

### Spinner Props

| Prop        | Type                                                                         | Default     | Description                  |
| ----------- | ---------------------------------------------------------------------------- | ----------- | ---------------------------- |
| `size`      | `"sm" \| "md" \| "lg"`                                                       | `"md"`      | Size of the spinner          |
| `color`     | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "error"` | `"default"` | Color variant of the spinner |
| `className` | `string`                                                                     | -           | Additional CSS classes       |

### Size Variants

| Size | CSS Class | Description           |
| ---- | --------- | --------------------- |
| `sm` | `size-3`  | Small spinner (12px)  |
| `md` | `size-4`  | Medium spinner (16px) |
| `lg` | `size-6`  | Large spinner (24px)  |

### Color Variants

| Color       | CSS Class         | Description          |
| ----------- | ----------------- | -------------------- |
| `default`   | `text-gray-600`   | Default gray color   |
| `primary`   | `text-purple-600` | Primary brand color  |
| `secondary` | `text-gray-500`   | Secondary gray color |
| `success`   | `text-green-600`  | Success green color  |
| `warning`   | `text-yellow-600` | Warning yellow color |
| `error`     | `text-red-600`    | Error red color      |

### Styling

The spinner component uses Tailwind CSS classes and can be customized with additional classes:

```tsx
// Custom size
<Spinner className="size-8" />

// Custom color
<Spinner className="text-blue-500" />

// Custom animation speed
<Spinner className="animate-spin" style={{ animationDuration: '2s' }} />
```

## Design Guidelines

### Usage

- **Loading States**: Use spinners to indicate that content is being loaded or processed
- **Button States**: Show spinners in buttons when actions are in progress
- **Form Validation**: Display spinners during form submission or validation
- **Data Fetching**: Use spinners when fetching data from APIs

### Accessibility

The spinner component is built with accessibility in mind:

- Uses semantic HTML elements
- Includes proper ARIA attributes (`role="status"`, `aria-label="Loading"`)
- Supports screen readers with descriptive labels
- Maintains focus management during loading states

### Best Practices

1. **Use appropriate sizes**: Match spinner size to the context (small for buttons, medium for general use, large for prominent loading states)
2. **Choose meaningful colors**: Use color variants to indicate the type of operation (success for uploads, warning for validation, error for failures)
3. **Provide context**: Always include text or labels to explain what is loading
4. **Consider duration**: For long operations, consider showing progress bars instead of spinners
5. **Maintain consistency**: Use the same spinner style throughout your application

## Examples

### File Upload

```tsx
import { Spinner } from "@/components/ui/spinner";

export function FileUpload({ isUploading }: { isUploading: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {isUploading && <Spinner size="sm" color="primary" />}
      <span>{isUploading ? "Uploading..." : "Upload Complete"}</span>
    </div>
  );
}
```

### Form Submission

```tsx
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting && <Spinner size="sm" />}
      {isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  );
}
```

### Data Loading

```tsx
import { Spinner } from "@/components/ui/spinner";

export function DataTable({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: any[];
}) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-3">
          <Spinner size="lg" color="primary" />
          <span className="text-sm text-gray-600">Loading data...</span>
        </div>
      </div>
    );
  }

  return <div>{/* Table content */}</div>;
}
```

### Progress with Spinner

```tsx
import { Spinner } from "@/components/ui/spinner";
import { Progress } from "@/components/ui/progress";

export function DownloadProgress({
  progress,
  isComplete,
}: {
  progress: number;
  isComplete: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        {!isComplete && <Spinner size="sm" />}
        <span className="text-sm">Downloading file...</span>
      </div>
      <Progress value={progress} showPercentage />
    </div>
  );
}
```

## Troubleshooting

### Common Issues

1. **Spinner not spinning**: Ensure Tailwind CSS animations are properly configured
2. **Size not applying**: Check that the size prop is correctly passed
3. **Color not showing**: Verify that the color variant is supported
4. **Accessibility issues**: Ensure proper ARIA attributes are included

### Browser Support

The spinner component supports all modern browsers and uses CSS animations, which are well-supported across browsers.
