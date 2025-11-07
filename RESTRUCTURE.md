# UI Component Restructure - Complete

## New Component Structure

All UI components now follow a **folder-per-component** pattern where everything related to a component is colocated:

```
src/components/ui/
└── button/
    ├── button.tsx          # Component implementation
    ├── button.css          # Styles (native CSS nesting)
    ├── button.stories.tsx  # Storybook stories
    ├── index.ts            # Barrel export
    └── README.md           # Component documentation
```

## Benefits

### 1. **Better Organization**
- All related files in one place
- Easy to find component, styles, stories, and docs
- No more hunting across directories

### 2. **Scalability**
- Clear pattern for adding new components
- Each component is self-contained
- Easy to move or share components

### 3. **Better Developer Experience**
- Storybook stories right next to components
- CSS colocated with component logic
- Documentation lives with the code

### 4. **Cleaner Imports**
```tsx
// Before
import { WegButton } from "@/components/ui/weg-button";

// After (with barrel export)
import { Button } from "@/components/ui/button";
```

## Changes Made

### ✅ Created New Button Structure
- `button/button.tsx` - Main component (renamed from `weg-button`)
- `button/button.css` - Native CSS nesting styles
- `button/button.stories.tsx` - Comprehensive Storybook stories
- `button/index.ts` - Barrel export for clean imports
- `button/README.md` - Updated documentation

### ✅ Removed Old Files
- ❌ `weg-button.tsx` → ✅ `button/button.tsx`
- ❌ `weg-button.css` → ✅ `button/button.css`
- ❌ `weg-button-demo.tsx` → ✅ Storybook stories
- ❌ `color-demo.tsx` → Removed (can recreate as story)
- ❌ `WEG-BUTTON-README.md` → ✅ `button/README.md`
- ❌ Old `button.tsx` (shadcn) → Replaced with WEG button

### ✅ Renamed Components
- `WegButton` → `Button` (now the default button)
- `wegButtonVariants` → `buttonVariants`
- All CSS classes: `.weg-button` → `.button`

### ✅ Updated App.tsx
- Simple demo showing button variants
- Removed old demo components
- Added tip to use Storybook for full documentation

## Storybook Stories

The button component now has comprehensive stories showing:

### Variants
- Fill (default)
- Outline
- Text

### Sizes
- Small (sm)
- Medium (md) - default
- Large (lg)
- Extra Large (xl)

### With Icons
- Icon left
- Icon right
- Both icons

### States
- Default
- Disabled (all variants)
- Hover (interactive)
- Focus (interactive)

### Special Cases
- Full width
- Full width with icons

### Interactive Playground
- All controls exposed
- Live editing of props
- Great for testing

## How to Use

### Run Storybook
```bash
npm run storybook
```

Navigate to **UI/Button** to see all button variants and states.

### Import Button
```tsx
// Recommended (barrel export)
import { Button } from "@/components/ui/button";

// Or direct import
import { Button } from "@/components/ui/button/button";
```

### Use in Your App
```tsx
<Button variant="fill">Click Me</Button>
<Button variant="outline" size="lg">Large Outline</Button>
<Button variant="text" disabled>Disabled Text</Button>
```

## Future Component Pattern

When adding new components (Card, Dialog, etc.), follow this pattern:

```
src/components/ui/[component-name]/
├── [component-name].tsx         # Component
├── [component-name].css         # Styles (if needed)
├── [component-name].stories.tsx # Storybook stories
├── index.ts                     # Barrel export
└── README.md                    # Documentation
```

### Example: Card Component
```
src/components/ui/card/
├── card.tsx
├── card.css
├── card.stories.tsx
├── index.ts
└── README.md
```

Import:
```tsx
import { Card } from "@/components/ui/card";
```

## Migration Notes

### For Existing Code
If you have code importing the old button:

```tsx
// Old import (will break)
import { Button } from "@/components/ui/button";  // shadcn button

// Update to
import { Button } from "@/components/ui/button";  // WEG button (same import!)
```

If you were using `WegButton`:
```tsx
// Old import
import { WegButton } from "@/components/ui/weg-button";

// Update to
import { Button } from "@/components/ui/button";
```

### For Demo/Test Files
All demo files have been removed. Use Storybook instead:

```tsx
// Old
import { WegButtonDemo } from "./components/ui/weg-button-demo";

// New
// Run Storybook: npm run storybook
```

## Reference Files Kept

The following Storybook example files were kept for reference:
- `stories/Button.tsx`
- `stories/Button.stories.ts`
- `stories/Header.tsx`
- `stories/Header.stories.ts`
- `stories/Page.tsx`
- `stories/Page.stories.ts`
- `stories/Configure.mdx`

These are in a separate `stories/` folder and serve as examples/templates.

## Next Steps

1. ✅ Button component restructured
2. 📝 Repeat pattern for Card component
3. 📝 Repeat pattern for Dialog component
4. 📝 Add more WEG components from Figma

## Testing

Run the dev server and Storybook to verify everything works:

```bash
# Dev server (http://localhost:5174/)
npm run dev

# Storybook (http://localhost:6006/)
npm run storybook
```

---

**Structure is now production-ready and scalable for your WEG Design System!** 🎉

