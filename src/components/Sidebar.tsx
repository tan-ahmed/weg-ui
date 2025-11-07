import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { getBaseStorybookUrl } from "../lib/storybook";

interface SidebarProps {
  components: Array<{
    title: string;
    category: string;
  }>;
}

export function Sidebar({ components }: SidebarProps) {
  const categories = [...new Set(components.map((c) => c.category))];

  // Map component titles to their routes
  const getComponentRoute = (title: string) => {
    const routeMap: Record<string, string> = {
      Button: "/components/button",
      Alert: "/components/alert",
      Accordion: "/components/accordion",
      Card: "/components/card",
      Carousel: "/components/carousel",
      Checkbox: "/components/checkbox",
      Dialog: "/components/dialog",
      Pagination: "/components/pagination",
      Progress: "/components/progress",
      Radio: "/components/radio",
      Spinner: "/components/spinner",
      Tabs: "/components/tabs",
      Tooltip: "/components/tooltip",
    };
    return routeMap[title] as
      | "/components/button"
      | "/components/alert"
      | "/components/accordion"
      | "/components/card"
      | "/components/carousel"
      | "/components/checkbox"
      | "/components/dialog"
      | "/components/pagination"
      | "/components/progress"
      | "/components/radio"
      | "/components/spinner"
      | "/components/tabs"
      | "/components/tooltip";
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Components</h2>

        <nav className="space-y-1">
          {categories.map((category) => (
            <div key={category} className="mb-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                {category}
              </h3>
              <div className="space-y-1">
                {components
                  .filter((component) => component.category === category)
                  .map((component) => (
                    <Link
                      key={component.title}
                      to={getComponentRoute(component.title)}
                      className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors group"
                      activeProps={{
                        className:
                          "flex items-center justify-between px-3 py-2 text-sm bg-purple-50 text-purple-600 rounded-md group",
                      }}
                    >
                      <span>{component.title}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200 space-y-2">
          <Link
            to="/progress"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
          >
            <span>Development Progress</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <a
            href={getBaseStorybookUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
          >
            <span>View in Storybook</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
