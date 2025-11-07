# Tooltip Component

A simple tooltip component system built with Radix UI primitives and styled with Tailwind CSS.

## Component Structure

This component follows a folder-per-component pattern where all related files are colocated:

```
tooltip/
├── tooltip.tsx          # Component with all Tailwind styles (using CVA)
├── tooltip.stories.tsx  # Storybook stories
├── tooltip.variants.ts  # Variant definitions
├── index.ts            # Barrel export
└── README.md           # This file
```

**Note:** This component uses Tailwind utility classes directly via `class-variance-authority` (CVA) - no separate CSS file needed! This is the modern, recommended approach by the Tailwind team.

## Features

✨ **Simple Design**

- Clean, minimal tooltip appearance
- Consistent with design system

🎨 **Additional Features**

- Arrow support (can be disabled)
- Multiple positioning options (top, bottom, left, right)
- Smooth animations and transitions
- Fully accessible with keyboard navigation
- Built on Radix UI primitives

## Installation

The component is located at `/src/components/ui/tooltip/`

Import using the barrel export:

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
```

Or direct import:

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
```

## Usage

### Basic Usage

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is a tooltip</p>
  </TooltipContent>
</Tooltip>;
```

### Positioning

```tsx
// Top
<TooltipContent side="top">
  <p>Tooltip on top</p>
</TooltipContent>

// Bottom
<TooltipContent side="bottom">
  <p>Tooltip on bottom</p>
</TooltipContent>

// Left
<TooltipContent side="left">
  <p>Tooltip on left</p>
</TooltipContent>

// Right
<TooltipContent side="right">
  <p>Tooltip on right</p>
</TooltipContent>
```

### Without Arrow

```tsx
<TooltipContent showArrow={false}>
  <p>Tooltip without arrow</p>
</TooltipContent>
```

### With Custom Trigger

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <div className="p-4 border rounded">Custom trigger element</div>
  </TooltipTrigger>
  <TooltipContent>
    <p>Tooltip for custom element</p>
  </TooltipContent>
</Tooltip>
```

## Storybook

View all tooltip examples in Storybook:

```bash
npm run storybook
```

Navigate to **UI/Tooltip** to see:

- Basic tooltips
- With and without arrows
- Different positions
- Long content examples
- Interactive playground

## Props

### TooltipContent Props

| Prop         | Type                                     | Default | Description                    |
| ------------ | ---------------------------------------- | ------- | ------------------------------ |
| `showArrow`  | `boolean`                                | `true`  | Show or hide the tooltip arrow |
| `side`       | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip position               |
| `sideOffset` | `number`                                 | `4`     | Distance from trigger element  |

### TooltipTrigger Props

All standard HTML element attributes are supported when using `asChild`.

### Tooltip Props

| Prop                | Type     | Default | Description                       |
| ------------------- | -------- | ------- | --------------------------------- |
| `delayDuration`     | `number` | `0`     | Delay before showing tooltip (ms) |
| `skipDelayDuration` | `number` | `300`   | Delay before hiding tooltip (ms)  |

## Accessibility

- ✅ Keyboard navigable with proper focus management
- ✅ Screen reader friendly with proper ARIA attributes
- ✅ Respects user's motion preferences
- ✅ High contrast for text readability
- ✅ Proper focus trapping and escape handling

## Browser Support

Works with all modern browsers that support CSS Grid and Flexbox.

## Credits

Built with Radix UI primitives and styled with Tailwind CSS.
