# Checkbox Component

A checkbox component built on top of Radix UI's Checkbox primitive.

## Usage

```tsx
import { Checkbox } from "@/components/ui/checkbox";

function MyComponent() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  );
}
```

## Features

- ✅ Multiple size variants (sm, md, lg, xl)
- ✅ Controlled and uncontrolled modes
- ✅ Disabled state
- ✅ Accessible with keyboard navigation
- ✅ Built with Radix UI primitives
- ✅ Fully typed with TypeScript

## Props

The Checkbox component extends all props from `@radix-ui/react-checkbox` Root component and adds:

| Prop              | Type                                            | Default | Description                          |
| ----------------- | ----------------------------------------------- | ------- | ------------------------------------ |
| `size`            | `"sm" \| "md" \| "lg" \| "xl"`                  | `"md"`  | Size of the checkbox                 |
| `checked`         | `boolean \| "indeterminate"`                    | -       | Controlled checked state             |
| `defaultChecked`  | `boolean`                                       | -       | Default checked state (uncontrolled) |
| `disabled`        | `boolean`                                       | `false` | Disabled state                       |
| `onCheckedChange` | `(checked: boolean \| "indeterminate") => void` | -       | Callback when checked state changes  |

## Examples

### Basic

```tsx
<Checkbox />
```

### With Label

```tsx
<div className="flex items-center gap-3">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms and conditions</label>
</div>
```

### Controlled

```tsx
const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onCheckedChange={setChecked} />;
```

### With Description

```tsx
<div className="flex items-start gap-3">
  <Checkbox id="marketing" className="mt-0.5" />
  <div className="grid gap-2">
    <label htmlFor="marketing">Marketing emails</label>
    <p className="text-sm text-muted-foreground">
      Receive emails about new products, features, and more.
    </p>
  </div>
</div>
```

### Different Sizes

```tsx
<Checkbox size="sm" />
<Checkbox size="md" />
<Checkbox size="lg" />
<Checkbox size="xl" />
```

## Accessibility

- Uses Radix UI's accessible Checkbox primitive
- Supports keyboard navigation (Space to toggle)
- Properly announces state to screen readers
- Always pair with a label for better accessibility
