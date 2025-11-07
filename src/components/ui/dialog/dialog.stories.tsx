import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "../button/button";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div className="min-h-[400px] w-full flex items-center justify-center">
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    onOpenChange: fn(),
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultDialog = (args: React.ComponentProps<typeof Dialog>) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog {...args} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a basic dialog with a title and description.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-600">
            This is the main content area of the dialog. You can place any
            content here.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const Default: Story = {
  render: (args) => <DefaultDialog {...args} />,
};

const ConfirmationDialogComponent = (
  args: React.ComponentProps<typeof Dialog>
) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog {...args} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="fill"
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Delete Item
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the item
            and remove it from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="fill"
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => setOpen(false)}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const ConfirmationDialog: Story = {
  render: (args) => <ConfirmationDialogComponent {...args} />,
};

const FormDialogComponent = (args: React.ComponentProps<typeof Dialog>) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog {...args} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new item to your collection.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter item name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={3}
              placeholder="Enter item description"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Add Item</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const FormDialog: Story = {
  render: (args) => <FormDialogComponent {...args} />,
};

const LargeContentDialog = (args: React.ComponentProps<typeof Dialog>) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog {...args} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Detailed Information</DialogTitle>
          <DialogDescription>
            This dialog contains a lot of content to demonstrate scrolling
            behavior.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Overview</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Feature one with detailed description</li>
                <li>• Feature two with more information</li>
                <li>• Feature three with additional details</li>
                <li>• Feature four with comprehensive explanation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Technical Details
              </h4>
              <p className="text-sm text-gray-600">
                This section contains technical information about the
                implementation, including code examples, configuration options,
                and best practices. The content is intentionally long to
                demonstrate how the dialog handles scrolling content.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                error suscipit vitae praesentium molestias ex?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                error suscipit vitae praesentium molestias ex?
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button onClick={() => setOpen(false)}>Learn More</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const LargeContent: Story = {
  render: (args) => <LargeContentDialog {...args} />,
};
