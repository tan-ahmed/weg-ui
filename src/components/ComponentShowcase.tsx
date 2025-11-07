import { Button } from "./ui/button";
import { Alert } from "./ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { RadioGroup, RadioGroupItem } from "./ui/radio";
import { Progress } from "./ui/progress/progress";
import { Spinner } from "./ui/spinner/spinner";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ExternalLink, Copy } from "lucide-react";
import { useState } from "react";
import { getComponentStorybookUrl } from "../lib/storybook";

interface ComponentCardProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  codeExample: string;
  storybookUrl: string;
  category: string;
}

function ComponentCard({
  title,
  description,
  preview,
  codeExample,
  storybookUrl,
  category,
}: ComponentCardProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "preview"
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "code"
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Code
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-6">
        {activeTab === "preview" ? (
          <div className="p-4 bg-gray-50 rounded-lg border">{preview}</div>
        ) : (
          <div className="relative">
            <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg border overflow-x-auto text-sm">
              <code>{codeExample}</code>
            </pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200 transition-colors"
              title="Copy code"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <a
          href={storybookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          View in Storybook
        </a>
      </div>
    </Card>
  );
}

export function ComponentShowcase() {
  const components = [
    {
      title: "Button",
      description:
        "Interactive elements for user actions with multiple variants and sizes.",
      category: "Form Controls",
      storybookUrl: getComponentStorybookUrl("BUTTON"),
      codeExample: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex gap-3 flex-wrap">
      <Button variant="fill" size="md">
        Primary Action
      </Button>
      <Button variant="outline" size="md">
        Secondary
      </Button>
      <Button variant="text" size="md">
        Text Link
      </Button>
    </div>
  )
}`,
      preview: (
        <div className="flex gap-3 flex-wrap">
          <Button variant="fill" size="md">
            Primary Action
          </Button>
          <Button variant="outline" size="md">
            Secondary
          </Button>
          <Button variant="text" size="md">
            Text Link
          </Button>
        </div>
      ),
    },
    {
      title: "Alert",
      description: "Display important messages and notifications to users.",
      category: "Feedback",
      storybookUrl: getComponentStorybookUrl("ALERT"),
      codeExample: `import { Alert } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <div className="space-y-3">
      <Alert variant="success">
        <strong>Success:</strong> Your action was completed successfully.
      </Alert>
      <Alert variant="warning">
        <strong>Warning:</strong> Please review your input before proceeding.
      </Alert>
    </div>
  )
}`,
      preview: (
        <div className="space-y-3">
          <Alert variant="success">
            <strong>Success:</strong> Your action was completed successfully.
          </Alert>
          <Alert variant="warning">
            <strong>Warning:</strong> Please review your input before
            proceeding.
          </Alert>
        </div>
      ),
    },
    {
      title: "Accordion",
      description: "Collapsible content sections for organizing information.",
      category: "Layout",
      storybookUrl: getComponentStorybookUrl("ACCORDION"),
      codeExample: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible size="md">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What is the Warwick Design System?
        </AccordionTrigger>
        <AccordionContent>
          A comprehensive collection of reusable components and guidelines.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
      preview: (
        <Accordion type="single" collapsible size="md">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is the Warwick Design System?
            </AccordionTrigger>
            <AccordionContent>
              A comprehensive collection of reusable components and guidelines.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      title: "Card",
      description:
        "Container component for grouping related content and actions.",
      category: "Layout",
      storybookUrl: getComponentStorybookUrl("CARD"),
      codeExample: `import { Card } from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="p-4">
      <h4 className="font-semibold mb-2">Card Title</h4>
      <p className="text-sm text-gray-600">
        This is a preview of the card component.
      </p>
    </Card>
  )
}`,
      preview: (
        <Card className="p-4">
          <h4 className="font-semibold mb-2">Card Title</h4>
          <p className="text-sm text-gray-600">
            This is a preview of the card component.
          </p>
        </Card>
      ),
    },
    {
      title: "Checkbox",
      description:
        "A checkbox component for selecting multiple options from a list.",
      category: "Form Controls",
      storybookUrl: getComponentStorybookUrl("CHECKBOX"),
      codeExample: `import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="terms" defaultChecked />
      <label htmlFor="terms" className="text-sm font-medium cursor-pointer">
        Accept terms and conditions
      </label>
    </div>
  )
}`,
      preview: (
        <div className="flex items-center gap-3">
          <Checkbox id="terms-showcase" defaultChecked />
          <label
            htmlFor="terms-showcase"
            className="text-sm font-medium cursor-pointer"
          >
            Accept terms and conditions
          </label>
        </div>
      ),
    },
    {
      title: "Dialog",
      description:
        "Modal dialogs for focused user interactions and confirmations.",
      category: "Overlay",
      storybookUrl: getComponentStorybookUrl("DIALOG"),
      codeExample: `import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Preview</DialogTitle>
          <DialogDescription>
            This is a preview of the dialog component.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`,
      preview: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Preview</DialogTitle>
              <DialogDescription>
                This is a preview of the dialog component.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      title: "Radio",
      description:
        "A radio group component for selecting one option from a set of choices.",
      category: "Form Controls",
      storybookUrl: getComponentStorybookUrl("RADIO"),
      codeExample: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"

export function RadioDemo() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
    </RadioGroup>
  )
}`,
      preview: (
        <RadioGroup defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="radio-showcase-option1" />
            <label
              htmlFor="radio-showcase-option1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Option 1
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="radio-showcase-option2" />
            <label
              htmlFor="radio-showcase-option2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Option 2
            </label>
          </div>
        </RadioGroup>
      ),
    },
    {
      title: "Progress",
      description:
        "Display completion progress of tasks with visual progress bars.",
      category: "Form Controls",
      storybookUrl: getComponentStorybookUrl("PROGRESS"),
      codeExample: `import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <Progress value={50} showPercentage />
      <Progress value={progress} showPercentage />
    </div>
  )
}`,
      preview: (
        <div className="space-y-4">
          <Progress value={50} showPercentage />
          <Progress value={75} showPercentage />
        </div>
      ),
    },
    {
      title: "Spinner",
      description:
        "Loading indicator for async operations with multiple sizes and colors.",
      category: "Form Controls",
      storybookUrl: getComponentStorybookUrl("SPINNER"),
      codeExample: `import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" color="primary" />
      <Spinner size="md" color="success" />
      <Button disabled iconLeft={<Spinner size="sm" />}>
        Loading...
      </Button>
    </div>
  )
}`,
      preview: (
        <div className="flex items-center gap-4">
          <Spinner size="sm" color="primary" />
          <Spinner size="md" color="success" />
          <Spinner size="lg" color="error" />
        </div>
      ),
    },
    {
      title: "Tooltip",
      description: "Contextual information displayed on hover or focus.",
      category: "Overlay",
      storybookUrl: getComponentStorybookUrl("TOOLTIP"),
      codeExample: `import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function TooltipDemo() {
  return (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}`,
      preview: (
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ),
    },
  ];

  const categories = [...new Set(components.map((c) => c.category))];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Component Library
        </h2>
        <p className="text-gray-600 mb-6">
          Browse our collection of accessible, reusable components. Each
          component includes comprehensive documentation, examples, and
          interactive controls in Storybook.
        </p>

        <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
          <ExternalLink className="w-5 h-5 text-purple-600" />
          <div>
            <p className="text-sm font-medium text-purple-900">
              Explore interactive examples and documentation
            </p>
            <p className="text-sm text-purple-700">
              Click "View in Storybook" to see all variants, sizes, and
              interactive controls
            </p>
          </div>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components
              .filter((component) => component.category === category)
              .map((component) => (
                <div
                  key={component.title}
                  id={component.title.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-24"
                >
                  <ComponentCard
                    title={component.title}
                    description={component.description}
                    preview={component.preview}
                    codeExample={component.codeExample}
                    storybookUrl={component.storybookUrl}
                    category={component.category}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Getting Started
        </h3>
        <div className="space-y-3 text-sm text-gray-600">
          <p>
            <strong>Installation:</strong> Components are available as npm
            packages and can be imported directly into your React applications.
          </p>
          <p>
            <strong>Documentation:</strong> Each component includes
            comprehensive documentation, usage examples, and accessibility
            guidelines.
          </p>
          <p>
            <strong>Customization:</strong> All components support theming and
            can be customized to match your application's design requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
