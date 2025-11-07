import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./button";

// Icon components for demonstrations
const ChevronLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const { fullWidth } = context.args;
      return fullWidth ? (
        <div style={{ width: "600px" }}>
          <Story />
        </div>
      ) : (
        <Story />
      );
    },
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["fill", "outline", "text"],
      description: "Choose the button style - filled, outlined, or text-only",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Choose the button size from small to extra large",
    },
    fullWidth: {
      control: "boolean",
      description:
        "Make the button stretch across the full width of its container",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button so it cannot be clicked",
    },
    children: {
      control: "text",
      description: "The text that appears on the button",
    },
    onClick: {
      control: false,
      description: "Function that runs when button is clicked (for developers)",
    },
    iconLeft: {
      control: false,
      description:
        "Icon to show on the left side of the button (for developers)",
    },
    iconRight: {
      control: false,
      description:
        "Icon to show on the right side of the button (for developers)",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: "fill",
    size: "md",
    children: "Button",
    disabled: false,
    fullWidth: false,
  },
};

// All Variants - Show all button variants together
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Button Variants</h3>
      <div className="flex items-center gap-4">
        <Button variant="fill">Fill Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="text">Text Button</Button>
      </div>
    </div>
  ),
};

// All Sizes - All variants and sizes in one comprehensive story
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold">All Button Sizes & Variants</h3>

      {/* Fill Variant Sizes */}
      <div className="flex flex-col gap-2">
        <h4 className="text-md font-medium text-gray-700">Fill Variant</h4>
        <div className="flex items-center gap-4">
          <Button variant="fill" size="sm">
            Small
          </Button>
          <Button variant="fill" size="md">
            Medium
          </Button>
          <Button variant="fill" size="lg">
            Large
          </Button>
          <Button variant="fill" size="xl">
            Extra Large
          </Button>
        </div>
      </div>

      {/* Outline Variant Sizes */}
      <div className="flex flex-col gap-2">
        <h4 className="text-md font-medium text-gray-700">Outline Variant</h4>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="md">
            Medium
          </Button>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button variant="outline" size="xl">
            Extra Large
          </Button>
        </div>
      </div>

      {/* Text Variant Sizes */}
      <div className="flex flex-col gap-2">
        <h4 className="text-md font-medium text-gray-700">Text Variant</h4>
        <div className="flex items-center gap-4">
          <Button variant="text" size="sm">
            Small
          </Button>
          <Button variant="text" size="md">
            Medium
          </Button>
          <Button variant="text" size="lg">
            Large
          </Button>
          <Button variant="text" size="xl">
            Extra Large
          </Button>
        </div>
      </div>
    </div>
  ),
};

// With Icons - All icon variations in one story
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Buttons with Icons</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Button variant="fill" iconLeft={<ChevronLeftIcon />}>
            Back
          </Button>
          <Button variant="fill" iconRight={<ChevronRightIcon />}>
            Next
          </Button>
          <Button
            variant="fill"
            iconLeft={<ChevronLeftIcon />}
            iconRight={<ChevronRightIcon />}
          >
            Both Icons
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" iconLeft={<ChevronLeftIcon />}>
            Back
          </Button>
          <Button variant="outline" iconRight={<ChevronRightIcon />}>
            Next
          </Button>
          <Button variant="text" iconLeft={<ChevronLeftIcon />}>
            Back
          </Button>
          <Button variant="text" iconRight={<ChevronRightIcon />}>
            Next
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Disabled States - All variants in one story
export const DisabledStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Disabled States</h3>
      <div className="flex items-center gap-4">
        <Button variant="fill" disabled>
          Disabled Fill
        </Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
        <Button variant="text" disabled>
          Disabled Text
        </Button>
      </div>
    </div>
  ),
};

// Full Width
export const FullWidth: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Full Width Buttons</h3>
      <div className="flex flex-col gap-4" style={{ width: "600px" }}>
        <Button variant="fill" fullWidth>
          Full Width Button
        </Button>
        <Button variant="fill" fullWidth iconRight={<ChevronRightIcon />}>
          Full Width with Icon
        </Button>
      </div>
    </div>
  ),
};
