import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { useState } from "react";
import { getComponentStorybookUrl } from "@/lib/storybook";

export const Route = createFileRoute("/components/card")({
  component: CardPage,
});

function CardPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const codeExample = `import { Card } from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="p-4">
      <h4 className="font-semibold mb-2">Card Title</h4>
      <p className="text-sm text-gray-600">
        This is a preview of the card component.
      </p>
    </Card>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Card</h1>
        <p className="text-xl text-gray-600">
          Container component for grouping related content and actions.
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
            <Card className="p-6 max-w-sm">
              <h4 className="font-semibold text-lg mb-2">Card Title</h4>
              <p className="text-sm text-gray-600">
                This is a preview of the card component. Cards are used to group
                related content and actions in a contained format.
              </p>
            </Card>
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
              <code>{`import { Card } from "@/components/ui/card"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Examples
          </h2>
          <p className="text-gray-600 mb-4">
            Cards can be used to display various types of content.
          </p>
          <div className="p-8 bg-gray-50 rounded-lg border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-2">Feature Card</h4>
                <p className="text-sm text-gray-600 mb-4">
                  A card highlighting a key feature or benefit.
                </p>
                <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  Learn More →
                </button>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold text-lg mb-2">Stats Card</h4>
                <p className="text-3xl font-bold text-purple-600 mb-2">1,234</p>
                <p className="text-sm text-gray-600">Total Users</p>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
          <div className="space-y-2">
            <a
              href={getComponentStorybookUrl("CARD")}
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
