import { createFileRoute } from "@tanstack/react-router";
import { Pagination } from "@/components/ui/pagination";
import { Copy } from "lucide-react";
import { useState } from "react";
import { getComponentStorybookUrl } from "@/lib/storybook";

export const Route = createFileRoute("/components/pagination")({
  component: PaginationPage,
});

function PaginationPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [currentPage, setCurrentPage] = useState(1);

  const codeExample = `import { Pagination } from "@/components/ui/pagination"
import { useState } from "react"

export function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      currentPage={currentPage}
      totalItems={100}
      itemsPerPage={10}
      onPageChange={setCurrentPage}
    />
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
            Navigation
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pagination</h1>
        <p className="text-xl text-gray-600">
          Navigation component for paginating through data sets with
          previous/next controls.
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
            <Pagination
              currentPage={currentPage}
              totalItems={100}
              itemsPerPage={10}
              onPageChange={setCurrentPage}
            />
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
              <code>{`import { Pagination } from "@/components/ui/pagination"`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Basic Pagination
              </h3>
              <p className="text-gray-600 mb-4">
                Standard pagination with items per page display.
              </p>
              <div className="p-8 bg-gray-50 rounded-lg border">
                <Pagination
                  currentPage={currentPage}
                  totalItems={100}
                  itemsPerPage={10}
                  onPageChange={setCurrentPage}
                  showItemsPerPage={true}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Without Items Per Page Label
              </h3>
              <p className="text-gray-600 mb-4">
                Hide the items per page label for a more compact display.
              </p>
              <div className="p-8 bg-gray-50 rounded-lg border">
                <Pagination
                  currentPage={currentPage}
                  totalItems={50}
                  itemsPerPage={5}
                  onPageChange={setCurrentPage}
                  showItemsPerPage={false}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Interactive Example with Data
              </h3>
              <p className="text-gray-600 mb-4">
                See pagination in action with actual data items.
              </p>
              <InteractiveExample />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Accessibility
          </h2>
          <p className="text-gray-600 mb-4">
            The pagination component includes accessibility features:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>ARIA labels for previous and next buttons</li>
            <li>Disabled state for buttons at boundaries</li>
            <li>Clear visual feedback for interactive elements</li>
            <li>Keyboard accessible navigation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
          <div className="space-y-2">
            <a
              href={getComponentStorybookUrl("PAGINATION")}
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

function InteractiveExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = 25;

  // Simulate data
  const data = Array.from({ length: totalItems }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is item number ${i + 1}`,
  }));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="p-8 bg-gray-50 rounded-lg border space-y-6">
      <div className="bg-white rounded-lg border p-4">
        <h4 className="font-semibold text-gray-900 mb-4">Current Page Items</h4>
        <div className="space-y-2">
          {currentData.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
            >
              <div className="font-medium text-gray-900">{item.name}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
