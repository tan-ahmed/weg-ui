## Radio Component

A fully accessible radio group component built on Radix UI and customized with WEG Design System styles.

## Component Structure

```
radio/
├── radio.tsx          # Component with Tailwind styles
├── radio.variants.ts  # CVA variants for sizes
├── radio.stories.tsx  # Storybook stories
├── index.ts           # Barrel export
└── README.md          # This file
```

## Features

- **Accessible**: Built on Radix UI primitives with full keyboard navigation
- **Form Integration**: Works seamlessly with form libraries
- **Customizable**: Supports custom styling and variants
- **Disabled State**: Support for disabled radio items
- **Green Styling**: Clean green design with proper focus states

## Installation

Import from the radio folder:

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
```

## Usage

### Basic Radio Group

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <label htmlFor="option2">Option 2</label>
  </div>
</RadioGroup>
```

### Basic Usage

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <label htmlFor="option2">Option 2</label>
  </div>
</RadioGroup>
```

### Disabled State

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" disabled />
    <label htmlFor="option1">Disabled Option</label>
  </div>
</RadioGroup>
```

### Form Integration

```tsx
<form>
  <label className="text-sm font-medium text-gray-900 mb-3 block">
    Choose your preference
  </label>
  <RadioGroup name="preference" defaultValue="email">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="email" id="email" />
      <label htmlFor="email">Email</label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="phone" id="phone" />
      <label htmlFor="phone">Phone</label>
    </div>
  </RadioGroup>
</form>
```

## Props

### RadioGroup

| Prop            | Type       | Default | Description                    |
| --------------- | ---------- | ------- | ------------------------------ |
| `defaultValue`  | `string`   | -       | Default selected value         |
| `value`         | `string`   | -       | Controlled selected value      |
| `onValueChange` | `function` | -       | Callback when value changes    |
| `disabled`      | `boolean`  | `false` | Disable the entire radio group |

### RadioGroupItem

| Prop       | Type      | Description                          |
| ---------- | --------- | ------------------------------------ |
| `value`    | `string`  | Unique value for the item (required) |
| `disabled` | `boolean` | Disable this specific radio item     |

## Design Specifications

### Colors

- **Border**: `oklch(0.465 0.155 145)` (success color from design system)
- **Selected**: Success color
- **Focus Ring**: Success color with offset
- **Disabled**: Reduced opacity

### Spacing

- **Default**: 12px gap between items

### Accessibility

- ✅ Full keyboard navigation (Tab, Arrow keys, Space, Enter)
- ✅ ARIA attributes for screen readers
- ✅ Focus visible indicators
- ✅ Proper labeling support
- ✅ Semantic HTML structure

## Storybook

View all radio variations in Storybook:

```bash
npm run storybook
```

Navigate to **UI/Radio** to see:

- Basic radio group examples
- Disabled states
- Form integration examples
- Interactive playground

## Accessibility

- ✅ Full keyboard navigation (Tab, Arrow keys, Space, Enter)
- ✅ ARIA attributes for screen readers
- ✅ Focus visible indicators
- ✅ Proper heading hierarchy
- ✅ Semantic HTML structure

## Credits

Based on the WEG Design Styles Guide and built with Radix UI Radio Group primitives.
