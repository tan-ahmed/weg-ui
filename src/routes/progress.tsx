import { createFileRoute, Link } from "@tanstack/react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TbTarget } from "react-icons/tb";
import { ComponentProgress } from "../components/ComponentProgress";

export const Route = createFileRoute("/progress")({
  component: Progress,
});

function Progress() {
  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors mb-6"
        >
          <AiOutlineArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <TbTarget className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Component Development Progress
            </h1>
            <p className="text-gray-600">
              Track the development status of all UI components in the design
              system
            </p>
          </div>
        </div>
      </div>

      {/* Progress Component */}
      <ComponentProgress />

      {/* Additional Info */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Development Guidelines
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• All components should be built with TypeScript</li>
            <li>• Include comprehensive Storybook stories</li>
            <li>• Add README.md with usage examples</li>
            <li>• Ensure accessibility compliance (WCAG 2.1)</li>
            <li>• Follow the established component structure</li>
            <li>• Include proper variant support where applicable</li>
          </ul>
        </div>

        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Quality Standards
          </h3>
          <ul className="text-sm text-blue-700 space-y-2">
            <li>• Built on Radix UI primitives for accessibility</li>
            <li>• Styled with Tailwind CSS and CVA</li>
            <li>• Fully responsive design</li>
            <li>• Keyboard navigation support</li>
            <li>• Screen reader compatible</li>
            <li>• Consistent with WEG design system</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
