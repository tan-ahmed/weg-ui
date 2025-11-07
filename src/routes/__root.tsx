import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Sidebar } from "../components/Sidebar";
import { getBaseStorybookUrl } from "../lib/storybook";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Fixed Sidebar */}
        <div className="fixed left-0 top-0 h-screen z-20">
          <Sidebar
            components={[
              { title: "Button", category: "Form Controls" },
              { title: "Checkbox", category: "Form Controls" },
              { title: "Progress", category: "Form Controls" },
              { title: "Radio", category: "Form Controls" },
              { title: "Spinner", category: "Form Controls" },
              { title: "Alert", category: "Feedback" },
              { title: "Accordion", category: "Layout" },
              { title: "Card", category: "Layout" },
              { title: "Carousel", category: "Layout" },
              { title: "Dialog", category: "Overlay" },
              { title: "Tooltip", category: "Overlay" },
              { title: "Pagination", category: "Navigation" },
              { title: "Tabs", category: "Navigation" },
            ]}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-64">
          <header className="bg-white shadow-sm border-b sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">UW</span>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">
                        University of Warwick
                      </h1>
                      <p className="text-sm text-gray-600">Design System</p>
                    </div>
                  </Link>
                </div>
                <nav className="flex space-x-8">
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    activeProps={{
                      className:
                        "text-purple-600 bg-purple-50 px-3 py-2 rounded-md text-sm font-medium",
                    }}
                    activeOptions={{ exact: true }}
                  >
                    Home
                  </Link>
                  <a
                    href={getBaseStorybookUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Storybook
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  ),
});
