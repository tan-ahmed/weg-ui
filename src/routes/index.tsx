import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Search,
  BookOpen,
  Play,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Weg UI Component Library
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A collection of pre-built, professional UI components that help teams
          create consistent, accessible, and beautiful user interfaces faster
          than ever before.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/components/button"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            Browse Components
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="/storybook/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium"
          >
            View Storybook
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Palette className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Save Time & Money
          </h3>
          <p className="text-gray-600">
            Pre-built components eliminate the need to design and code from
            scratch, reducing development time and costs significantly.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Consistent Quality
          </h3>
          <p className="text-gray-600">
            All components follow the same design standards, ensuring your
            applications look professional and cohesive across all pages and
            features.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg border shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Accessible to Everyone
          </h3>
          <p className="text-gray-600">
            Components are designed to work for all users, including those with
            disabilities, ensuring your applications are inclusive and
            compliant.
          </p>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gray-50 rounded-lg border p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Getting Started
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Search className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                See What's Available
              </h3>
              <p className="text-gray-600">
                Explore our complete library of ready-to-use components with
                live previews and examples.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Learn How to Use
              </h3>
              <p className="text-gray-600">
                Get detailed guides and examples showing how to implement each
                component in your projects.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Play className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Try Before You Use
              </h3>
              <p className="text-gray-600">
                Test and customize components in real-time to see exactly how
                they'll look and work in your application.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Get Started Quickly
              </h3>
              <p className="text-gray-600">
                Easy installation and integration into your existing projects
                with minimal setup required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Link */}
      <div className="mb-16">
        <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Track Development Progress
              </h3>
              <p className="text-gray-600">
                See which components are ready to use and what's coming next
              </p>
            </div>
            <Link
              to="/progress"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              View Progress
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Available Components */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Component Library
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/components/button"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Button</h3>
                <p className="text-sm text-gray-600">
                  Interactive elements for user actions
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/alert"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Alert</h3>
                <p className="text-sm text-gray-600">
                  Display important messages and notifications
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/accordion"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Accordion</h3>
                <p className="text-sm text-gray-600">
                  Collapsible content sections
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/card"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Card</h3>
                <p className="text-sm text-gray-600">
                  Container for related content and actions
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/carousel"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Carousel</h3>
                <p className="text-sm text-gray-600">
                  Cycle through content with touch support
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/checkbox"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Checkbox</h3>
                <p className="text-sm text-gray-600">
                  Select multiple options from a list
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/dialog"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dialog</h3>
                <p className="text-sm text-gray-600">
                  Modal dialogs for focused interactions
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/pagination"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Pagination</h3>
                <p className="text-sm text-gray-600">
                  Navigate through paginated data sets
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/tabs"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Tabs</h3>
                <p className="text-sm text-gray-600">
                  Organize content into separate views
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/radio"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Radio</h3>
                <p className="text-sm text-gray-600">
                  Select one option from a set of choices
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/progress"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Progress</h3>
                <p className="text-sm text-gray-600">
                  Display completion progress of tasks
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/spinner"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Spinner</h3>
                <p className="text-sm text-gray-600">
                  Loading indicator for async operations
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>

          <Link
            to="/components/tooltip"
            className="p-4 bg-white rounded-lg border hover:border-purple-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Tooltip</h3>
                <p className="text-sm text-gray-600">
                  Contextual information on hover or focus
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
