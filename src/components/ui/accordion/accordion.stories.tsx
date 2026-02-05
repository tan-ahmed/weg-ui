import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  type AccordionProps,
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
    isMultipleOpen: {
      control: "boolean",
      description:
        "When true, multiple sections can be open at once. When false, only one section is open at a time.",
    },
    collapsible: {
      control: "boolean",
      description:
        "Allow users to close an open section by clicking it again (only applies when isMultipleOpen is false)",
    },
    fullWidth: {
      control: "boolean",
      description: "When true, the accordion stretches to full width of its container.",
    },
    backgroundColor: {
      control: "color",
      description: "Background colour of the accordion container. CMS/theming-friendly.",
    },
    dividerColor: {
      control: "color",
      description: "Colour of the divider between accordion items. CMS/theming-friendly.",
    },
    textColor: {
      control: "color",
      description: "Text colour for trigger headings and content. CMS/theming-friendly.",
    },
  },
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

// Editable text args for Playground only
type PlaygroundArgs = AccordionProps & {
  section1Title?: string;
  section1Content?: string;
  section2Title?: string;
  section2Content?: string;
  section3Title?: string;
  section3Content?: string;
};

// Interactive Playground
export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    isMultipleOpen: false,
    collapsible: true,
    size: "md",
    fullWidth: false,
    backgroundColor: "#e6e7e7",
    dividerColor: "#9ca3af",
    textColor: "#000000",
    section1Title: "Section 1",
    section1Content:
      "This is the content for section 1. You can customize the accordion properties using the controls.",
    section2Title: "Section 2",
    section2Content:
      "This is the content for section 2. Turn on isMultipleOpen to open multiple sections at once.",
    section3Title: "Section 3",
    section3Content:
      "This is the content for section 3. Try fullWidth to stretch the accordion.",
  },
  argTypes: {
    section1Title: {
      control: "text",
      description: "Heading for the first section",
    },
    section1Content: {
      control: "text",
      description: "Content for the first section",
    },
    section2Title: {
      control: "text",
      description: "Heading for the second section",
    },
    section2Content: {
      control: "text",
      description: "Content for the second section",
    },
    section3Title: {
      control: "text",
      description: "Heading for the third section",
    },
    section3Content: {
      control: "text",
      description: "Content for the third section",
    },
  },
  render: (args) => {
    const {
      section1Title,
      section1Content,
      section2Title,
      section2Content,
      section3Title,
      section3Content,
      ...accordionArgs
    } = args;
    return (
      <Accordion
        {...accordionArgs}
        style={{
          ...(accordionArgs.fullWidth ? undefined : { maxWidth: "680px" }),
          ...accordionArgs.style,
        }}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{section1Title}</AccordionTrigger>
          <AccordionContent>
            <p>{section1Content}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{section2Title}</AccordionTrigger>
          <AccordionContent>
            <p>{section2Content}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{section3Title}</AccordionTrigger>
          <AccordionContent>
            <p>{section3Content}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

// All Sizes - Show all accordion sizes together
export const Sizes: Story = {
  args: {
    isMultipleOpen: false,
    collapsible: true,
    size: "md",
  },
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Small Size</h3>
        <Accordion
          isMultipleOpen={false}
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
          <AccordionItem value="item-3">
            <AccordionTrigger>Section 3</AccordionTrigger>
            <AccordionContent>
              <p>Content for section 3 in small size.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Medium Size</h3>
        <Accordion
          isMultipleOpen={false}
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
          <AccordionItem value="item-3">
            <AccordionTrigger>Section 3</AccordionTrigger>
            <AccordionContent>
              <p>Content for section 3 in medium size.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Large Size</h3>
        <Accordion
          isMultipleOpen={false}
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
          <AccordionItem value="item-3">
            <AccordionTrigger>Section 3</AccordionTrigger>
            <AccordionContent>
              <p>Content for section 3 in large size.</p>
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
    isMultipleOpen: true,
    size: "md",
    fullWidth: false,
  },
  render: (args) => (
    <Accordion {...args} style={args.fullWidth ? undefined : { maxWidth: "680px" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          <p>
            With isMultipleOpen, multiple sections can be open at the same time.
            Note: collapsible behavior is not available when multiple sections
            can be open.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          <p>Try opening multiple sections simultaneously.</p>
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
    isMultipleOpen: false,
    collapsible: true,
    size: "md",
    fullWidth: false,
  },
  render: (args) => (
    <Accordion {...args} style={args.fullWidth ? undefined : { maxWidth: "680px" }}>
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
