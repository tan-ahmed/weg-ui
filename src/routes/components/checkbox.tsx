import { Checkbox } from "@/components/ui/checkbox";
import { createFileRoute } from "@tanstack/react-router";
import { Copy } from "lucide-react";
import { useState } from "react";
import { getComponentStorybookUrl } from "@/lib/storybook";

export const Route = createFileRoute("/components/checkbox")({
  component: CheckboxPage,
});

function CheckboxPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [checkedItems, setCheckedItems] = useState({
    option1: true,
    option2: false,
    option3: true,
    option4: false,
  });

  const codeExample = `import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export function CheckboxDemo() {
  const [checkedItems, setCheckedItems] = useState({
    option1: true,
    option2: false,
    option3: true,
    option4: false,
  });

  const handleChange = (option: keyof typeof checkedItems) => {
    setCheckedItems((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="w-[400px] bg-white rounded-lg border p-4">
      <div className="flex flex-col gap-4">
        {Object.entries(checkedItems).map(([key, checked], index) => (
          <div key={key} className="flex items-center gap-3">
            <Checkbox
              id={key}
              checked={checked}
              onCheckedChange={() => handleChange(key as keyof typeof checkedItems)}
            />
            <label htmlFor={key} className="text-base leading-none cursor-pointer flex-1">
              Option {index + 1}
            </label>
          </div>
        ))}
      </div>
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

  const handleChange = (option: keyof typeof checkedItems) => {
    setCheckedItems((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <div className="mb-4">
          <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
            Form Controls
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Checkbox</h1>
        <p className="text-xl text-gray-600">
          A checkbox component for selecting multiple options from a list.
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
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        {activeTab === "preview" ? (
          <div className="flex items-center justify-center">
            <div className="w-[400px] bg-white rounded-lg border p-4">
              <div className="flex flex-col gap-4">
                {Object.entries(checkedItems).map(([key, checked], index) => (
                  <div key={key} className="flex items-center gap-3">
                    <Checkbox
                      id={key}
                      checked={checked}
                      onCheckedChange={() =>
                        handleChange(key as keyof typeof checkedItems)
                      }
                    />
                    <label
                      htmlFor={key}
                      className="text-base leading-none cursor-pointer flex-1"
                    >
                      Option {index + 1}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
              title="Copy code"
            >
              <Copy className="w-4 h-4" />
            </button>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-800">{codeExample}</code>
            </pre>
          </div>
        )}
      </div>

      {/* States Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">States</h2>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <Checkbox id="unchecked" />
              <label htmlFor="unchecked" className="text-sm cursor-pointer">
                Unchecked
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="checked" defaultChecked />
              <label htmlFor="checked" className="text-sm cursor-pointer">
                Checked
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="disabled" disabled />
              <label htmlFor="disabled" className="text-sm opacity-50">
                Disabled
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="disabled-checked" disabled defaultChecked />
              <label htmlFor="disabled-checked" className="text-sm opacity-50">
                Disabled Checked
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Examples</h2>

        <div className="space-y-6">
          {/* With Label */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              With Label
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <Checkbox id="terms-example" />
                <label
                  htmlFor="terms-example"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div>
          </div>

          {/* With Description */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              With Description
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <Checkbox id="marketing" defaultChecked className="mt-0.5" />
                <div className="grid gap-2">
                  <label
                    htmlFor="marketing"
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    Marketing emails
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products, features, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Multiple Checkboxes */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Multiple Checkboxes
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox id="newsletter" defaultChecked />
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="newsletter"
                      className="text-sm font-medium leading-none cursor-pointer"
                    >
                      Newsletter
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Weekly newsletter with the latest updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="marketing-2" />
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="marketing-2"
                      className="text-sm font-medium leading-none cursor-pointer"
                    >
                      Marketing emails
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Receive promotional emails and special offers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="updates" defaultChecked />
                  <div className="grid gap-1.5">
                    <label
                      htmlFor="updates"
                      className="text-sm font-medium leading-none cursor-pointer"
                    >
                      Product updates
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new features and improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Links</h2>
        <div className="flex gap-2">
          <a
            href={getComponentStorybookUrl("CHECKBOX")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View in Storybook
          </a>
        </div>
      </div>
    </div>
  );
}
