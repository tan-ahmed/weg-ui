import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface TooltipStoryArgs {
  content: string;
  side: "top" | "right" | "bottom" | "left";
}

const meta = {
  title: "UI/Tooltip",
  component: () => null, // We'll use custom render functions
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "The tooltip content text",
      defaultValue: "Enter your tooltip text here...",
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "The side of the trigger on which the tooltip appears",
      defaultValue: "top",
    },
  },
} satisfies Meta<TooltipStoryArgs>;

export default meta;
type Story = StoryObj<TooltipStoryArgs>;

// Interactive Story with Controls
export const Interactive: Story = {
  render: (args: TooltipStoryArgs) => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold">Interactive Tooltip</h3>
      <div className="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent side={args.side} showArrow={true}>
            <p>{args.content || "Enter your tooltip text here..."}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

// Long Content
export const LongContent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Tooltips with Long Content</h3>
      <div className="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Long Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              This is a longer tooltip that demonstrates how the component
              handles extended text content and wraps appropriately.
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

// Different Positions
export const Positions: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold">Tooltip Positions</h3>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h4 className="text-md font-medium text-gray-700">Top</h4>
          <div className="flex justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-md font-medium text-gray-700">Bottom</h4>
          <div className="flex justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-md font-medium text-gray-700">Left</h4>
          <div className="flex justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-md font-medium text-gray-700">Right</h4>
          <div className="flex justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ),
};
