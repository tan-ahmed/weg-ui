import { createFileRoute } from "@tanstack/react-router";
import { Alert } from "@/components/ui/alert";
import { Copy } from "lucide-react";
import { useState } from "react";
import { getComponentStorybookUrl } from "@/lib/storybook";

export const Route = createFileRoute("/components/alert")({
  component: AlertPage,
});

function AlertPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const codeExample = `import { Alert } from "@/components/ui/alert"

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
            Feedback
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Alert</h1>
        <p className="text-xl text-gray-600">
          Display important messages and notifications to users.
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
            <div className="space-y-3">
              <Alert variant="success">
                <strong>Success:</strong> Your action was completed
                successfully.
              </Alert>
              <Alert variant="warning">
                <strong>Warning:</strong> Please review your input before
                proceeding.
              </Alert>
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

      {/* Documentation sections */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage</h2>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <pre className="text-sm">
              <code>{`import { Alert } from "@/components/ui/alert"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Variants
          </h2>
          <p className="text-gray-600 mb-4">
            The alert component supports multiple variants for different message
            types.
          </p>
          <div className="p-8 bg-gray-50 rounded-lg border">
            <div className="space-y-3">
              <Alert variant="success">
                <strong>Default:</strong> This is a default alert message.
              </Alert>
              <Alert variant="success">
                <strong>Success:</strong> Operation completed successfully.
              </Alert>
              <Alert variant="warning">
                <strong>Warning:</strong> Please proceed with caution.
              </Alert>
              <Alert variant="error">
                <strong>Error:</strong> Something went wrong.
              </Alert>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
          <div className="space-y-2">
            <a
              href={getComponentStorybookUrl("ALERT")}
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
