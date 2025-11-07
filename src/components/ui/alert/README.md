# Alert Component

A comprehensive alert component system built from the [WEG Design Styles Guide](https://www.figma.com/design/tGPiGcdv0H7ULErsCevNgT/WEG-Design-Styles-Guide---Front-End-Development?node-id=607-389&p=f&m=dev).

## Component Structure

This component follows a folder-per-component pattern where all related files are colocated:

```
alert/
├── alert.tsx          # Component with all Tailwind styles (using CVA)
├── alert.variants.ts  # CVA variant definitions
├── alert.stories.tsx  # Storybook stories
├── index.ts           # Barrel export
└── README.md          # This file
```

**Note:** This component uses Tailwind utility classes directly via `class-variance-authority` (CVA) - no separate CSS file needed! This is the modern, recommended approach by the Tailwind team.

## Features

✨ **Three Variants**

- **Success** - Green background with checkmark icon
- **Error** - Red background with X icon
- **Warning** - Yellow background with warning triangle icon

📱 **Responsive Design**

- Automatically adapts to screen size
- Smaller padding on mobile devices
- Larger padding on desktop screens

🎨 **Additional Features**

- Custom icon support
- Optional dismissible close button
- Smooth transitions and animations
- Fully accessible with proper ARIA attributes
- Pill-shaped design (fully rounded)

## Installation

The component is located at `/src/components/ui/alert/`

Import using the barrel export:

```tsx
import { Alert } from "@/components/ui/alert";
```

Or direct import:

```tsx
import { Alert } from "@/components/ui/alert/alert";
```

### Theme Integration

The alert colors are integrated into your Tailwind theme (`src/index.css`):

- **Success**: `var(--success)` / `--color-success`
- **Warning**: `var(--warning)` / `--color-warning`
- **Destructive/Error**: `var(--destructive)` / `--color-destructive`

## Usage

### Basic Usage

```tsx
import { Alert } from "@/components/ui/alert";

// Success alert (default)
<Alert>Success message here</Alert>

// Error alert
<Alert variant="error">Error message here</Alert>

// Warning alert
<Alert variant="warning">Warning message here</Alert>
```

### Responsive Design

The alert automatically adapts to different screen sizes:

```tsx
// Automatically responsive - no size prop needed
<Alert variant="success">Success message</Alert>
```

### With Custom Icons

```tsx
import { Star } from "lucide-react"; // or your icon library

<Alert variant="success" icon={<Star />}>
  Custom success alert with star icon
</Alert>;
```

### Dismissible Alerts

```tsx
const [showAlert, setShowAlert] = useState(true);

{
  showAlert && (
    <Alert variant="error" onDismiss={() => setShowAlert(false)}>
      This alert can be dismissed
    </Alert>
  );
}
```

### Combining Props

```tsx
<Alert
  variant="warning"
  icon={<CustomIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
  onDismiss={() => console.log("Dismissed!")}
>
  Custom warning alert
</Alert>
```

## Storybook

View all alert variants and states in Storybook:

```bash
npm run storybook
```

Navigate to **UI/Alert** to see:

- All variants (Success, Error, Warning)
- Responsive design examples
- With custom icons
- Dismissible examples
- Interactive playground

## Design Specifications

### Colors (CSS Variables)

- **Success**: `var(--success)` (oklch(0.465 0.155 145))
- **Success Foreground**: `var(--success-foreground)` (oklch(1 0 0))
- **Warning**: `var(--warning)` (oklch(0.65 0.15 65))
- **Warning Foreground**: `var(--warning-foreground)` (oklch(0.145 0 0))
- **Destructive**: `var(--destructive)` (oklch(0.577 0.245 27.325))
- **Destructive Foreground**: `var(--destructive-foreground)` (oklch(1 0 0))

### Typography

- **Font Family**: Inherited from parent
- **Font Weight**: Medium (500)
- **Text Size**: 16px (1rem)

### Spacing

- **Border Radius**: 9999px (fully rounded)
- **Gap between elements**: 0.75rem (12px)
- **Mobile Padding**: 1rem horizontal, 1rem vertical
- **Desktop Padding**: 1.75rem horizontal, 1rem vertical

### Icons

- **Default Icon Size**: 24px × 24px (mobile), 32px × 32px (desktop)
- **Dismiss Icon Size**: 20px × 20px
- **Uses react-icons/io5**: IoCheckmark, IoClose, IoWarning

### Implementation

The component uses **Tailwind utility classes directly** via `class-variance-authority` (CVA):

- ✅ No separate CSS file needed
- ✅ All styles visible in one place
- ✅ Uses Tailwind theme colors (success, warning, destructive)
- ✅ Recommended by Tailwind team
- ✅ Better tree-shaking and smaller bundles
- ✅ Easy to see exactly what styles apply

## Props

| Prop        | Type                                | Default     | Description                                    |
| ----------- | ----------------------------------- | ----------- | ---------------------------------------------- |
| `variant`   | `'success' \| 'error' \| 'warning'` | `'success'` | Alert type variant                             |
| `icon`      | `ReactNode`                         | -           | Custom icon to display (overrides default)     |
| `onDismiss` | `function`                          | -           | Function called when dismiss button is clicked |
| `children`  | `ReactNode`                         | -           | Alert message content                          |
| `className` | `string`                            | -           | Additional CSS classes                         |

All standard HTML div attributes are also supported.

## States

### Default

The normal resting state of the alert with appropriate colors and icons.

### Dismissible

When `onDismiss` is provided, a close button appears on the right side with hover and focus states.

### Focus

The dismiss button has visible focus ring for keyboard navigation.

## Accessibility

- ✅ Proper ARIA role="alert" for screen readers
- ✅ Keyboard navigable dismiss button with visible focus states
- ✅ Proper ARIA label for dismiss button
- ✅ High contrast for text readability
- ✅ Semantic HTML structure

## Browser Support

Works with all modern browsers that support CSS nesting (2023+).

## Credits

Design based on the WEG Design Styles Guide Figma file.
