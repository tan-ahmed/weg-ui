import { createFileRoute } from "@tanstack/react-router";
import { Spinner } from "../../components/ui/spinner/spinner";
import { Button } from "../../components/ui/button/button";
import { Badge } from "../../components/ui/badge";
import { useState } from "react";
import { ExternalLink, Copy } from "lucide-react";
import { getComponentStorybookUrl } from "../../lib/storybook";

export const Route = createFileRoute("/components/spinner")({
  component: SpinnerComponent,
});

function SpinnerComponent() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const codeExample = `import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" color="primary" />
      <Spinner size="md" color="success" />
      <Spinner size="lg" color="error" />
    </div>
  );
}`;

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
            Form Controls
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Spinner</h1>
        <p className="text-lg text-gray-600 mb-6">
          A spinner component that displays a loading indicator to show that
          content is being processed or loaded.
        </p>
      </div>

      {/* Component Showcase */}
      <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Spinner Component
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Loading indicator with multiple sizes and color variants
            </p>
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
            <div className="p-4 bg-gray-50 rounded-lg border">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Basic Spinner</h3>
                  <Spinner />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Different Sizes</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="sm" />
                      <span className="text-sm text-gray-600">Small</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="md" />
                      <span className="text-sm text-gray-600">Medium</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="lg" />
                      <span className="text-sm text-gray-600">Large</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Color Variants</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="default" size="lg" />
                      <span className="text-sm text-gray-600">Default</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="primary" size="lg" />
                      <span className="text-sm text-gray-600">Primary</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="success" size="lg" />
                      <span className="text-sm text-gray-600">Success</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="warning" size="lg" />
                      <span className="text-sm text-gray-600">Warning</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner color="error" size="lg" />
                      <span className="text-sm text-gray-600">Error</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">In Buttons</h3>
                  <div className="flex flex-col items-center gap-4">
                    <Button disabled size="sm" iconLeft={<Spinner size="sm" />}>
                      Loading...
                    </Button>
                    <Button
                      variant="outline"
                      disabled
                      size="sm"
                      iconLeft={<Spinner size="sm" />}
                    >
                      Please wait
                    </Button>
                    <Button
                      variant="text"
                      disabled
                      size="sm"
                      iconLeft={<Spinner size="sm" />}
                    >
                      Processing
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">In Badges</h3>
                  <div className="flex items-center gap-4">
                    <Badge>
                      <Spinner size="sm" />
                      Syncing
                    </Badge>
                    <Badge variant="secondary">
                      <Spinner size="sm" />
                      Updating
                    </Badge>
                    <Badge variant="outline">
                      <Spinner size="sm" />
                      Processing
                    </Badge>
                  </div>
                </div>
              </div>
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
      </div>

      {/* Links */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Links</h2>
        <div className="flex gap-2">
          <a
            href={getComponentStorybookUrl("SPINNER")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View in Storybook
          </a>
        </div>
      </div>
    </div>
  );
}
