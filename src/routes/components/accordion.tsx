import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Copy } from "lucide-react";
import { useState } from "react";
import { getComponentStorybookUrl } from "@/lib/storybook";

export const Route = createFileRoute("/components/accordion")({
  component: AccordionPage,
});

function AccordionPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const codeExample = `import {
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
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="mb-4">
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
            Layout
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Accordion</h1>
        <p className="text-xl text-gray-600">
          Collapsible content sections for organizing information.
        </p>
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
      <div className="mb-8">
        {activeTab === "preview" ? (
          <div className="p-8 bg-gray-50 rounded-lg border">
            <Accordion type="single" collapsible size="md">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the Warwick Design System?
                </AccordionTrigger>
                <AccordionContent>
                  A comprehensive collection of reusable components and
                  guidelines for building consistent user interfaces.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I install it?</AccordionTrigger>
                <AccordionContent>
                  You can install components individually using npm or yarn.
                  Each component is available as a separate package.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes, all components are built with accessibility in mind and
                  follow WCAG guidelines.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
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

      {/* Documentation sections */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage</h2>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <pre className="text-sm">
              <code>{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sizes</h2>
          <p className="text-gray-600 mb-4">
            The accordion component supports different sizes: sm, md, and lg.
          </p>
          <div className="p-8 bg-gray-50 rounded-lg border space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Small</p>
              <Accordion type="single" collapsible size="sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Small Accordion</AccordionTrigger>
                  <AccordionContent>
                    This is a small-sized accordion.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Medium (Default)
              </p>
              <Accordion type="single" collapsible size="md">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Medium Accordion</AccordionTrigger>
                  <AccordionContent>
                    This is a medium-sized accordion.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Large</p>
              <Accordion type="single" collapsible size="lg">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Large Accordion</AccordionTrigger>
                  <AccordionContent>
                    This is a large-sized accordion.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
          <div className="space-y-2">
            <a
              href={getComponentStorybookUrl("ACCORDION")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              View in Storybook →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
