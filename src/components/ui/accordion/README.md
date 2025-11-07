## Accordion Component

A fully accessible accordion component built on Radix UI and customized with WEG Design System styles.

## Component Structure

```
accordion/
├── accordion.tsx          # Component with Tailwind styles
├── accordion.variants.ts  # CVA variants for sizes
├── accordion.stories.tsx  # Storybook stories
├── index.ts               # Barrel export
└── README.md              # This file
```

## Features

- **Three Sizes**: Small (16px padding), Medium (32px padding), Large (28px padding)
- **Two Modes**: Single (one open at a time) or Multiple (multiple open simultaneously)
- **Collapsible**: Can be toggled on/off
- **Full Width Support**: Container can expand up to 1280px with text max 960px
- **Smooth Animations**: Open/close transitions
- **Fully Accessible**: Built on Radix UI primitives
- **Keyboard Navigation**: Full keyboard support
- **WEG Styling**: Light gray background (#e6e7e7), rounded corners, proper spacing

## Installation

Import from the accordion folder:

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
```

## Usage

### Basic Accordion

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1 goes here.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2 goes here.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Sizes

```tsx
// Small (16px padding, smaller text)
<Accordion type="single" collapsible size="sm">
  {/* items */}
</Accordion>

// Medium (32px padding - default)
<Accordion type="single" collapsible size="md">
  {/* items */}
</Accordion>

// Large (28px padding)
<Accordion type="single" collapsible size="lg">
  {/* items */}
</Accordion>
```

### Multiple Items Open

```tsx
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Full Width with Text Constraints

```tsx
<Accordion type="single" collapsible size="lg" style={{ maxWidth: "1280px" }}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      <div style={{ maxWidth: "960px" }}>
        Your content here with optimal reading width.
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Default Open Item

```tsx
<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>This Section Opens by Default</AccordionTrigger>
    <AccordionContent>Content here</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props

### Accordion

| Prop            | Type                     | Default | Description                                |
| --------------- | ------------------------ | ------- | ------------------------------------------ |
| `type`          | `'single' \| 'multiple'` | -       | Whether one or multiple items can be open  |
| `size`          | `'sm' \| 'md' \| 'lg'`   | `'md'`  | Size variant                               |
| `collapsible`   | `boolean`                | -       | Can items be collapsed (for type='single') |
| `defaultValue`  | `string \| string[]`     | -       | Default open item(s)                       |
| `value`         | `string \| string[]`     | -       | Controlled open item(s)                    |
| `onValueChange` | `function`               | -       | Callback when value changes                |

### AccordionItem

| Prop    | Type     | Description                          |
| ------- | -------- | ------------------------------------ |
| `value` | `string` | Unique value for the item (required) |

### AccordionTrigger

Standard button props plus children.

### AccordionContent

Standard div props plus children.

## Design Specifications

### Colors

- **Background**: `#e6e7e7` (light gray)
- **Text**: `#000000` (black)
- **Border**: `#e5e5e5` (gray-200)
- **Focus Ring**: WEG Purple

### Typography

- **Trigger**: Open Sans SemiBold, 18px, line-height 28px
- **Content**: Open Sans Light, 16px, line-height 24px

### Spacing

- **Small**: 16px padding, 16px gap
- **Medium**: 32px padding, 28px gap
- **Large**: 28px padding, 28px gap
- **Border Radius**: 12px

### Animations

- Smooth open/close animations
- Chevron rotates 180° when expanded
- Content fades and slides in/out

## Storybook

View all accordion variations in Storybook:

```bash
npm run storybook
```

Navigate to **UI/Accordion** to see:

- Small, Medium, Large sizes
- Single vs Multiple modes
- Full width examples
- Interactive playground

## Accessibility

- ✅ Full keyboard navigation (Tab, Enter, Space, Arrow keys)
- ✅ ARIA attributes for screen readers
- ✅ Focus visible indicators
- ✅ Proper heading hierarchy
- ✅ Semantic HTML structure

## Credits

Based on the WEG Design Styles Guide and built with Radix UI Accordion primitives.
