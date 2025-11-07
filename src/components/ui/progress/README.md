# Progress

A progress bar component that displays the completion progress of a task, typically displayed as a progress bar.

## Features

- **Visual Progress Indicator**: Shows completion progress with a visual bar
- **Percentage Display**: Optional percentage label above the progress bar
- **Smooth Animations**: Smooth transitions when progress changes
- **Accessible**: Built with accessibility in mind using Radix UI primitives
- **Customizable**: Supports custom styling and sizing

## Installation

```bash
# Install the required dependencies
npm install @radix-ui/react-progress
```

## Usage

### Basic Usage

```tsx
import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  return <Progress value={33} className="w-[60%]" />;
}
```

### With Percentage Display

```tsx
import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  return <Progress value={66} showPercentage={true} className="w-[60%]" />;
}
```

### Animated Progress

```tsx
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function AnimatedProgress() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} showPercentage className="w-[60%]" />;
}
```

### Multiple Progress Bars

```tsx
import { Progress } from "@/components/ui/progress";

export function MultipleProgress() {
  const tasks = [
    { name: "Task 1", progress: 100 },
    { name: "Task 2", progress: 75 },
    { name: "Task 3", progress: 50 },
    { name: "Task 4", progress: 25 },
  ];

  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{task.name}</span>
            <span>{task.progress}%</span>
          </div>
          <Progress value={task.progress} className="w-full" />
        </div>
      ))}
    </div>
  );
}
```

## API Reference

### Progress Props

| Prop             | Type      | Default | Description                                  |
| ---------------- | --------- | ------- | -------------------------------------------- |
| `value`          | `number`  | -       | The progress value (0-100)                   |
| `showPercentage` | `boolean` | `false` | Show percentage label above the progress bar |
| `className`      | `string`  | -       | Additional CSS classes                       |
| `max`            | `number`  | `100`   | Maximum value for the progress bar           |

### Styling

The progress component uses Tailwind CSS classes and can be customized with additional classes:

```tsx
// Custom height
<Progress value={50} className="h-6" />

// Custom width
<Progress value={50} className="w-full" />

// Custom colors (using CSS variables or Tailwind)
<Progress value={50} className="[&>div]:bg-green-500" />
```

## Design Guidelines

### Spacing

- **Height**: 16px (h-4) by default
- **Spacing**: 8px between multiple progress bars

### Colors

- **Background**: Light gray (#e5e7eb)
- **Progress**: Purple (#9333ea)
- **Text**: Dark gray for labels

### Accessibility

The progress component is built with accessibility in mind:

- Uses semantic HTML elements
- Supports screen readers with proper ARIA attributes
- Keyboard navigation support
- High contrast colors for better visibility

## Examples

### File Upload Progress

```tsx
import { Progress } from "@/components/ui/progress";

export function FileUploadProgress({ progress }: { progress: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Uploading file...</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="w-full" />
    </div>
  );
}
```

### Step Progress

```tsx
import { Progress } from "@/components/ui/progress";

export function StepProgress({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="w-full" />
    </div>
  );
}
```

### Loading Progress

```tsx
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function LoadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Loading...</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="w-full" />
    </div>
  );
}
```

## Best Practices

1. **Use appropriate values**: Progress values should be between 0 and 100
2. **Provide context**: Use labels to explain what the progress represents
3. **Consider accessibility**: Ensure sufficient color contrast and provide alternative text
4. **Smooth transitions**: Use the built-in animations for better user experience
5. **Consistent sizing**: Use consistent heights across your application

## Troubleshooting

### Common Issues

1. **Progress not showing**: Ensure the `value` prop is between 0 and 100
2. **Styling issues**: Check that Tailwind CSS is properly configured
3. **Animation not working**: Ensure the component is properly mounted and unmounted

### Browser Support

The progress component supports all modern browsers and uses CSS transforms for animations, which are well-supported across browsers.
