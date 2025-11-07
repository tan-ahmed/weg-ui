import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./pagination";

const meta = {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    currentPage: 1,
    totalItems: 100,
    itemsPerPage: 10,
    showItemsPerPage: true,
    onPageChange: () => {},
  },
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "Which page is currently being viewed",
    },
    totalItems: {
      control: { type: "number", min: 0 },
      description: "Total number of items across all pages",
    },
    itemsPerPage: {
      control: { type: "number", min: 1 },
      description: "How many items to show on each page",
    },
    showItemsPerPage: {
      control: "boolean",
      description: "Show or hide the 'Items per page' text",
    },
    onPageChange: {
      action: "page-changed",
      description:
        "Function that runs when user changes pages (for developers)",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return (
      <div className="w-full max-w-2xl p-8">
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
            args.onPageChange?.(page);
          }}
        />
      </div>
    );
  },
};

export const WithoutItemsPerPage: Story = {
  args: {
    currentPage: 1,
    totalItems: 50,
    itemsPerPage: 5,
    showItemsPerPage: false,
    onPageChange: () => {},
  },
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return (
      <div className="w-full max-w-2xl p-8">
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
            args.onPageChange?.(page);
          }}
        />
      </div>
    );
  },
};

export const Interactive: Story = {
  args: {
    currentPage: 1,
    totalItems: 100,
    itemsPerPage: 10,
    showItemsPerPage: true,
    onPageChange: () => {},
  },
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    // Simulate data
    const data = Array.from({ length: args.totalItems }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }));

    const startIndex = (currentPage - 1) * args.itemsPerPage;
    const endIndex = startIndex + args.itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
      <div className="w-full max-w-2xl p-8 space-y-6">
        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-semibold text-lg mb-4">Current Page Items</h3>
          <div className="space-y-2">
            {currentData.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-gray-50 rounded-md text-sm text-gray-700"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
            args.onPageChange?.(page);
          }}
        />
      </div>
    );
  },
};
