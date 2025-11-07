# Button Component

A comprehensive button component system built from the [WEG Design Styles Guide](https://www.figma.com/design/tGPiGcdv0H7ULErsCevNgT/WEG-Design-Styles-Guide---Front-End-Development?node-id=1-46&p=f&m=dev).

## Component Structure

This component follows a folder-per-component pattern where all related files are colocated:

```
button/
├── button.tsx          # Component with all Tailwind styles (using CVA)
├── button.stories.tsx  # Storybook stories
├── index.ts            # Barrel export
└── README.md           # This file
```

**Note:** This component uses Tailwind utility classes directly via `class-variance-authority` (CVA) - no separate CSS file needed! This is the modern, recommended approach by the Tailwind team.

## Features

✨ **Three Variants**

- **Fill** - Solid purple background with white text
- **Outline** - Purple border with colored text
- **Text** - Underlined text link style

📏 **Four Sizes**

- **Small (sm)** - 44px height, 16px font
- **Medium (md)** - 48px height, 18px font (default)
- **Large (lg)** - 56px height, 20px font
- **Extra Large (xl)** - 64px height, 22px font

🎨 **Additional Features**

- Icon support (left and right)
- Full width option
- Hover, focus, and disabled states
- Fully accessible with keyboard navigation
- Smooth transitions and animations

## Installation

The component is located at `/src/components/ui/button/`

Import using the barrel export:

```tsx
import { Button } from "@/components/ui/button";
```

Or direct import:

```tsx
import { Button } from "@/components/ui/button/button";
```

### Theme Integration

The WEG design colors have been integrated into your Tailwind theme using shadcn's semantic tokens (`src/index.css`):

- **Primary**: WEG Purple (`#503d96`)
- **Primary Hover**: Darker WEG Purple (`#3f2f7a`)
- **Secondary**: WEG Blue (`#1d70b8`)
- **Secondary Hover**: Darker WEG Blue (`#144a7a`)

This means you can now use these colors throughout your app with standard Tailwind classes:

```tsx
<div className="bg-primary text-primary-foreground">Uses WEG Purple</div>
<button className="bg-secondary hover:bg-secondary-hover">Uses WEG Blue</button>
```

## Usage

### Basic Usage

```tsx
import { Button } from "@/components/ui/button";

// Fill button (default)
<Button>Click me</Button>

// Outline button
<Button variant="outline">Click me</Button>

// Text button
<Button variant="text">Click me</Button>
```

### Sizes

```tsx
// Small
<Button size="sm">Small Button</Button>

// Medium (default)
<Button size="md">Medium Button</Button>

// Large
<Button size="lg">Large Button</Button>

// Extra Large
<Button size="xl">Extra Large Button</Button>
```

### With Icons

```tsx
import { ChevronLeft, ChevronRight } from "lucide-react"; // or your icon library

// Icon on the left
<Button iconLeft={<ChevronLeft />}>Back</Button>

// Icon on the right
<Button iconRight={<ChevronRight />}>Next</Button>

// Both icons
<Button iconLeft={<ChevronLeft />} iconRight={<ChevronRight />}>
  Both Sides
</Button>
```

### Full Width

```tsx
<Button fullWidth>Full Width Button</Button>

<Button fullWidth iconRight={<ChevronRight />}>
  Full Width with Icon
</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

### Combining Props

```tsx
<Button
  variant="outline"
  size="lg"
  iconLeft={<StarIcon />}
  onClick={() => console.log("Clicked!")}
>
  Favorite
</Button>
```

## Storybook

View all button variants and states in Storybook:

```bash
npm run storybook
```

Navigate to **UI/Button** to see:

- All variants (Fill, Outline, Text)
- All sizes (Small, Medium, Large, Extra Large)
- With icons (left, right, both)
- States (default, disabled)
- Full width examples
- Interactive playground

## Design Specifications

### Colors (CSS Variables)

- **Primary (WEG Purple)**: `var(--color-primary)` (`#503d96` / `oklch(0.35 0.15 285)`)
- **Primary Hover**: `var(--color-primary-hover)` (`#3f2f7a` / `oklch(0.3 0.15 285)`)
- **Secondary (WEG Blue)**: `var(--color-secondary)` (`#1d70b8` / `oklch(0.5 0.15 240)`)
- **Secondary Hover**: `var(--color-secondary-hover)` (`#144a7a` / `oklch(0.4 0.15 240)`)
- **Disabled Background**: `#d1d5db`
- **Disabled Text**: `#9ca3af`

### Typography

- **Font Family**: Open Sans
- **Fill/Outline Buttons**: Bold (700)
- **Text Buttons**: Light (300)

### Spacing

- **Border Radius**: 9999px (fully rounded)
- **Gap between elements**: 0.5rem (8px)
- **Shadow (fill)**: `0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -1px rgba(0,0,0,0.06)`

### Implementation

The component uses **Tailwind utility classes directly** via `class-variance-authority` (CVA):

- ✅ No separate CSS file needed
- ✅ All styles visible in one place
- ✅ Uses shadcn semantic color tokens (primary, secondary)
- ✅ Recommended by Tailwind team
- ✅ Better tree-shaking and smaller bundles
- ✅ Easy to see exactly what styles apply

## Props

| Prop        | Type                            | Default  | Description                               |
| ----------- | ------------------------------- | -------- | ----------------------------------------- |
| `variant`   | `'fill' \| 'outline' \| 'text'` | `'fill'` | Button style variant                      |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl'`  | `'md'`   | Button size                               |
| `fullWidth` | `boolean`                       | `false`  | Makes button take full width of container |
| `iconLeft`  | `ReactNode`                     | -        | Icon to display on the left               |
| `iconRight` | `ReactNode`                     | -        | Icon to display on the right              |
| `disabled`  | `boolean`                       | `false`  | Disables the button                       |
| `onClick`   | `function`                      | -        | Click handler                             |
| `className` | `string`                        | -        | Additional CSS classes                    |

All standard HTML button attributes are also supported.

## States

### Default

The normal resting state of the button.

### Hover

Triggered when the user hovers over the button:

- Fill: Darker background, enhanced shadow
- Outline: Lighter background, darker border
- Text: Darker text, thicker underline

### Focus

Visible focus ring for keyboard navigation (3px outline with 2px offset).

### Disabled

Grayed out appearance, cursor changes to `not-allowed`, no hover effects.

### Active

Slight scale down effect (0.98) when clicked.

## Accessibility

- ✅ Keyboard navigable with visible focus states
- ✅ Proper ARIA attributes inherited from native button
- ✅ Disabled state properly communicated
- ✅ High contrast for text readability
- ✅ Touch-friendly minimum sizes (44px height on small)

## Browser Support

Works with all modern browsers that support CSS nesting (2023+).

## Credits

Design based on the WEG Design Styles Guide Figma file.
