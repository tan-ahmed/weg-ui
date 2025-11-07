import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./spinner";
import { Button } from "../button/button";
import { Badge } from "../badge";

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the spinner",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
      ],
      description: "Color variant of the spinner",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  args: {
    size: "md",
    color: "default",
  },
  render: (args: any) => <Spinner {...args} />,
};

// Basic Usage
export const Basic: Story = {
  args: {},
  render: (args: any) => <Spinner {...args} />,
};

// Different Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-sm text-gray-600">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-sm text-gray-600">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-sm text-gray-600">Large</span>
      </div>
    </div>
  ),
};

// Different Colors
export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner color="default" size="lg" />
        <span className="text-sm text-gray-600">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="primary" size="lg" />
        <span className="text-sm text-gray-600">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="secondary" size="lg" />
        <span className="text-sm text-gray-600">Secondary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="success" size="lg" />
        <span className="text-sm text-gray-600">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="warning" size="lg" />
        <span className="text-sm text-gray-600">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="error" size="lg" />
        <span className="text-sm text-gray-600">Error</span>
      </div>
    </div>
  ),
};

// In Buttons
export const ButtonSpinner: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm" iconLeft={<Spinner size="sm" />}>
        Loading...
      </Button>
      <Button
        variant="outline"
        disabled
        size="sm"
        iconLeft={<Spinner size="sm" />}
      >
        Please wait
      </Button>
      <Button
        variant="text"
        disabled
        size="sm"
        iconLeft={<Spinner size="sm" />}
      >
        Processing
      </Button>
    </div>
  ),
};

// In Badges
export const BadgeSpinner: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge>
        <Spinner size="sm" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner size="sm" />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner size="sm" />
        Processing
      </Badge>
    </div>
  ),
};

// Loading States
export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <Spinner size="sm" />
          <span className="text-sm text-gray-600">Processing payment...</span>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <Spinner size="sm" color="success" />
          <span className="text-sm text-gray-600">Uploading file...</span>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <Spinner size="sm" color="warning" />
          <span className="text-sm text-gray-600">Validating data...</span>
        </div>
      </div>
    </div>
  ),
};

// Custom Styling
export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom Size</h3>
        <Spinner className="size-8" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Custom Color</h3>
        <Spinner className="size-6 text-blue-500" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Slow Animation</h3>
        <Spinner
          className="size-6 animate-spin"
          style={{ animationDuration: "2s" }}
        />
      </div>
    </div>
  ),
};
