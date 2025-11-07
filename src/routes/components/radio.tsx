import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { createFileRoute } from "@tanstack/react-router";
import { Copy } from "lucide-react";
import { useState } from "react";
import { getComponentStorybookUrl } from "@/lib/storybook";

export const Route = createFileRoute("/components/radio")({
  component: RadioPage,
});

function RadioPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [selectedValue, setSelectedValue] = useState("option1");

  const codeExample = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"
import { useState } from "react"

export function RadioDemo() {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <div className="w-[400px] bg-white rounded-lg border p-4">
      <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1" className="text-base leading-none cursor-pointer">
            Option 1
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2" className="text-base leading-none cursor-pointer">
            Option 2
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="option3" />
          <label htmlFor="option3" className="text-base leading-none cursor-pointer">
            Option 3
          </label>
        </div>
      </RadioGroup>
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
            Form Controls
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Radio</h1>
        <p className="text-xl text-gray-600">
          A radio group component for selecting one option from a set of
          choices.
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
              <RadioGroup
                value={selectedValue}
                onValueChange={setSelectedValue}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="preview-option1" />
                  <label
                    htmlFor="preview-option1"
                    className="text-base leading-none cursor-pointer"
                  >
                    Option 1
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="preview-option2" />
                  <label
                    htmlFor="preview-option2"
                    className="text-base leading-none cursor-pointer"
                  >
                    Option 2
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="preview-option3" />
                  <label
                    htmlFor="preview-option3"
                    className="text-base leading-none cursor-pointer"
                  >
                    Option 3
                  </label>
                </div>
              </RadioGroup>
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
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Normal States
              </h3>
              <RadioGroup defaultValue="checked">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unchecked" id="unchecked" />
                  <label htmlFor="unchecked" className="text-sm cursor-pointer">
                    Unselected
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="checked" id="checked" />
                  <label htmlFor="checked" className="text-sm cursor-pointer">
                    Selected
                  </label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Disabled States
              </h3>
              <RadioGroup defaultValue="disabled-checked" disabled>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disabled" id="disabled" />
                  <label htmlFor="disabled" className="text-sm opacity-50">
                    Disabled
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="disabled-checked"
                    id="disabled-checked"
                  />
                  <label
                    htmlFor="disabled-checked"
                    className="text-sm opacity-50"
                  >
                    Disabled Selected
                  </label>
                </div>
              </RadioGroup>
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
              <RadioGroup defaultValue="email">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-example" />
                  <label
                    htmlFor="email-example"
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    Email notifications
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sms" id="sms-example" />
                  <label
                    htmlFor="sms-example"
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    SMS notifications
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* With Description */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              With Description
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <RadioGroup defaultValue="email">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem
                    value="email"
                    id="email-desc"
                    className="mt-0.5"
                  />
                  <div className="grid gap-1">
                    <label
                      htmlFor="email-desc"
                      className="text-sm font-medium leading-none cursor-pointer"
                    >
                      Email notifications
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates via email about your account and new
                      features.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem
                    value="push"
                    id="push-desc"
                    className="mt-0.5"
                  />
                  <div className="grid gap-1">
                    <label
                      htmlFor="push-desc"
                      className="text-sm font-medium leading-none cursor-pointer"
                    >
                      Push notifications
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Get instant notifications on your device.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Form Example */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Form Example
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-3 block">
                    Preferred contact method
                  </label>
                  <RadioGroup defaultValue="email">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="form-email" />
                      <label
                        htmlFor="form-email"
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        Email
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="form-phone" />
                      <label
                        htmlFor="form-phone"
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        Phone
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mail" id="form-mail" />
                      <label
                        htmlFor="form-mail"
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        Mail
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Links</h2>
        <div className="flex gap-2">
          <a
            href={getComponentStorybookUrl("RADIO")}
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
