import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./progress";
import { useState } from "react";
import * as React from "react";

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The progress value (0-100)",
    },
    showPercentage: {
      control: "boolean",
      description: "Show percentage label above the progress bar",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  args: {
    value: 33,
    showPercentage: true,
  },
  render: (args: any) => <Progress {...args} />,
};

// Basic Usage
export const Basic: Story = {
  args: {
    value: 50,
  },
  render: (args: any) => <Progress {...args} />,
};

// With Percentage
export const WithPercentage: Story = {
  args: {
    value: 75,
    showPercentage: true,
  },
  render: (args: any) => <Progress {...args} />,
};

// Different Progress Values
export const ProgressValues: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">0% Progress</h3>
        <Progress value={0} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">25% Progress</h3>
        <Progress value={25} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">50% Progress</h3>
        <Progress value={50} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">75% Progress</h3>
        <Progress value={75} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">100% Progress</h3>
        <Progress value={100} showPercentage />
      </div>
    </div>
  ),
};

// Animated Progress
export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(13);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} showPercentage />;
  },
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Default Styling</h3>
        <Progress value={60} showPercentage />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom Height</h3>
        <Progress value={60} showPercentage className="h-6" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Constrained Width</h3>
        <Progress value={60} showPercentage className="w-[60%]" />
      </div>
    </div>
  ),
};
