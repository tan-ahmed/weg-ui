import { createFileRoute } from "@tanstack/react-router";
import { Progress } from "../../components/ui/progress/progress";
import { useState, useEffect } from "react";
import { ExternalLink, Copy } from "lucide-react";
import { getComponentStorybookUrl } from "../../lib/storybook";

export const Route = createFileRoute("/components/progress")({
  component: ProgressComponent,
});

function ProgressComponent() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExample);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const codeExample = `import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} showPercentage />;
}`;

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
            Form Controls
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Progress</h1>
        <p className="text-lg text-gray-600 mb-6">
          Displays an indicator showing the completion progress of a task,
          typically displayed as a progress bar.
        </p>
      </div>

      {/* Component Showcase */}
      <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Progress Component
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Interactive progress bar with optional percentage display
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
                  <h3 className="text-lg font-semibold">Basic Progress</h3>
                  <Progress value={50} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">With Percentage</h3>
                  <Progress value={75} showPercentage />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Animated Progress</h3>
                  <Progress value={progress} showPercentage />
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
            href={getComponentStorybookUrl("PROGRESS")}
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
