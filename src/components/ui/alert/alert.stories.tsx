import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Alert } from "./alert";
import { IoStar } from "react-icons/io5";

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning"],
      description: "Choose the type of alert - success, error, or warning",
    },
    children: {
      control: "text",
      description: "The message text to display in the alert",
    },
    icon: {
      control: false,
      description: "Custom icon to show in the alert (for developers)",
    },
    onDismiss: {
      control: false,
      description:
        "Function that runs when the alert is dismissed (for developers)",
    },
  },
  args: {
    children: "This is an alert message",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: "success",
    children: "This is a customizable alert message",
  },
};

// All Variants - Show all alert variants together
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Alert Variants</h3>
      <div className="flex flex-col gap-4">
        <Alert variant="success">
          Success. Your email 'Event Staff required - 17th July' is on its way.
        </Alert>
        <Alert variant="error">
          Oops. Jobs Preferences section is not valid.
        </Alert>
        <Alert variant="warning">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </Alert>
      </div>
    </div>
  ),
};

// With Custom Icons
export const WithCustomIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Alerts with Custom Icons</h3>
      <div className="flex flex-col gap-4">
        <Alert
          variant="success"
          icon={<IoStar className="w-6 h-6 sm:w-8 sm:h-8" />}
        >
          Custom success alert with star icon
        </Alert>
        <Alert
          variant="error"
          icon={<IoStar className="w-6 h-6 sm:w-8 sm:h-8" />}
        >
          Custom error alert with star icon
        </Alert>
        <Alert
          variant="warning"
          icon={<IoStar className="w-6 h-6 sm:w-8 sm:h-8" />}
        >
          Custom warning alert with star icon
        </Alert>
      </div>
    </div>
  ),
};

// Dismissible Alerts
export const Dismissible: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Dismissible Alerts</h3>
      <div className="flex flex-col gap-4">
        <Alert variant="success" onDismiss={fn()}>
          This success alert can be dismissed
        </Alert>
        <Alert variant="error" onDismiss={fn()}>
          This error alert can be dismissed
        </Alert>
        <Alert variant="warning" onDismiss={fn()}>
          This warning alert can be dismissed
        </Alert>
      </div>
    </div>
  ),
};
