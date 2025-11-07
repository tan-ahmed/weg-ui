import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Choose the size of the accordion sections",
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description:
        "Allow one section open at a time, or multiple sections open together",
    },
    collapsible: {
      control: "boolean",
      description:
        "Allow users to close an open section by clicking it again (only applies to type='single')",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Playground
export const Playground: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "md",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p>
            This is the content for section 1. You can customize the accordion
            properties using the controls.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>
            This is the content for section 2. Try changing the type to
            "multiple" to open both sections at once.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// All Sizes - Show all accordion sizes together
export const Sizes: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "md",
  },
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Small Size</h3>
        <Accordion
          type="single"
          collapsible
          size="sm"
          style={{ maxWidth: "343px" }}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              <p>Small accordion content with compact spacing.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
              <p>Content for section 2 in small size.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Medium Size</h3>
        <Accordion
          type="single"
          collapsible
          size="md"
          style={{ maxWidth: "680px" }}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              <p>Medium accordion content with standard spacing and padding.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
              <p>Content for section 2 in medium size.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Large Size</h3>
        <Accordion
          type="single"
          collapsible
          size="lg"
          style={{ maxWidth: "680px" }}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              <p>Large accordion content with generous spacing and padding.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
              <p>Content for section 2 in large size.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

// Multiple Items Open
export const MultipleOpen: Story = {
  args: {
    type: "multiple",
    size: "md",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p>
            With type="multiple", multiple sections can be open at the same
            time. Note: collapsible behavior is not available for multiple type.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>Try opening both sections simultaneously.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          <p>All three sections can be open at once!</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Single Item
export const SingleItem: Story = {
  args: {
    type: "single",
    collapsible: true,
    size: "md",
  },
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Single Section</AccordionTrigger>
        <AccordionContent>
          <p>
            An accordion can also be used with just a single item for expandable
            content sections.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
