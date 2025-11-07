import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, RadioGroupItem } from "./radio";

const meta = {
  title: "UI/Radio",
  component: RadioGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disable the radio group",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        <p>
          <strong>Note:</strong> Radio groups allow users to select one option
          from a set of choices.
        </p>
      </div>
      <RadioGroup {...args} defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label
            htmlFor="option1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Option 1
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <label
            htmlFor="option2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Option 2
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="option3" />
          <label
            htmlFor="option3"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Option 3
          </label>
        </div>
      </RadioGroup>
    </div>
  ),
};

// Basic Example
export const Basic: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        <p>
          <strong>Basic radio group:</strong> Simple radio group with green
          styling.
        </p>
      </div>
      <RadioGroup {...args} defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="basic-option1" />
          <label
            htmlFor="basic-option1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Option 1
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="basic-option2" />
          <label
            htmlFor="basic-option2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Option 2
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="basic-option3" />
          <label
            htmlFor="basic-option3"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Option 3
          </label>
        </div>
      </RadioGroup>
    </div>
  ),
};

// Disabled State
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        <p>
          <strong>Disabled state:</strong> Radio groups can be disabled to
          prevent user interaction.
        </p>
      </div>
      <RadioGroup {...args} defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="disabled-option1" disabled />
          <label
            htmlFor="disabled-option1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled Option 1
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="disabled-option2" disabled />
          <label
            htmlFor="disabled-option2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled Option 2
          </label>
        </div>
      </RadioGroup>
    </div>
  ),
};

// With Labels
export const WithLabels: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        <p>
          <strong>With labels:</strong> Radio groups with descriptive labels for
          better accessibility.
        </p>
      </div>
      <RadioGroup {...args} defaultValue="email">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="email" id="email" />
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email notifications
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sms" id="sms" />
          <label
            htmlFor="sms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            SMS notifications
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="push" id="push" />
          <label
            htmlFor="push"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Push notifications
          </label>
        </div>
      </RadioGroup>
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        <p>
          <strong>Form example:</strong> Radio groups in a typical form context.
        </p>
      </div>
      <form className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-900 mb-3 block">
            Preferred contact method
          </label>
          <RadioGroup {...args} defaultValue="email">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="form-email" />
              <label
                htmlFor="form-email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="form-phone" />
              <label
                htmlFor="form-phone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Phone
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mail" id="form-mail" />
              <label
                htmlFor="form-mail"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mail
              </label>
            </div>
          </RadioGroup>
        </div>
      </form>
    </div>
  ),
};
