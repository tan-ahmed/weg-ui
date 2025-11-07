import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    checked: true,
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disable the checkbox so it cannot be clicked",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked or not",
    },
    defaultChecked: {
      control: "boolean",
      description: "Whether the checkbox starts checked when first loaded",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="unchecked" />
        <label htmlFor="unchecked" className="text-sm font-medium">
          Unchecked
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checked" defaultChecked />
        <label htmlFor="checked" className="text-sm font-medium">
          Checked
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="disabled" disabled />
        <label
          htmlFor="disabled"
          className="text-sm font-medium text-muted-foreground"
        >
          Disabled
        </label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <label
          htmlFor="disabled-checked"
          className="text-sm font-medium text-muted-foreground"
        >
          Disabled Checked
        </label>
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const WithCardContainer: Story = {
  render: () => (
    <label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-4 cursor-pointer has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/5 transition-colors">
      <Checkbox id="card-checkbox" defaultChecked className="mt-0.5" />
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm leading-none font-medium">Enable notifications</p>
        <p className="text-sm text-muted-foreground">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </label>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: true,
      marketing: false,
      updates: true,
    });

    return (
      <div className="w-[400px] space-y-6 p-6 border rounded-lg">
        <div>
          <h3 className="text-lg font-semibold mb-4">Email Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    newsletter: checked as boolean,
                  }))
                }
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="newsletter"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Newsletter
                </label>
                <p className="text-sm text-muted-foreground">
                  Weekly newsletter with the latest updates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="marketing"
                checked={formData.marketing}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    marketing: checked as boolean,
                  }))
                }
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="marketing"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Marketing emails
                </label>
                <p className="text-sm text-muted-foreground">
                  Receive promotional emails and special offers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    updates: checked as boolean,
                  }))
                }
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="updates"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Product updates
                </label>
                <p className="text-sm text-muted-foreground">
                  Get notified about new features and improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
