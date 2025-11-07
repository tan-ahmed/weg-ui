import { AiOutlineCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { TbTarget } from "react-icons/tb";
import { Card } from "./ui/card";
import { useComponentTodos } from "../hooks/useComponentTodos";

export function ComponentProgress() {
  const { todos, loading, getProgressStats } = useComponentTodos();

  if (loading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </Card>
    );
  }

  const stats = getProgressStats();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <AiOutlineCheckCircle className="w-4 h-4 text-green-600" />;
      case "in_progress":
        return <AiOutlineClockCircle className="w-4 h-4 text-blue-600" />;
      case "pending":
        return <BsCircle className="w-4 h-4 text-gray-400" />;
      case "cancelled":
        return <BsCircle className="w-4 h-4 text-gray-300" />;
      default:
        return <BsCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50 border-green-200";
      case "in_progress":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "pending":
        return "text-gray-600 bg-gray-50 border-gray-200";
      case "cancelled":
        return "text-gray-400 bg-gray-25 border-gray-100";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TbTarget className="w-5 h-5 text-purple-600" />
            Component Progress
          </h3>
          <div className="text-sm text-gray-600">
            {stats.completed}/{stats.total} completed
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Overall Progress</span>
            <span>{stats.progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${stats.progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <AiOutlineCheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-gray-600">{stats.completed} Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle className="w-4 h-4 text-blue-600" />
            <span className="text-gray-600">
              {stats.inProgress} In Progress
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BsCircle className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">{stats.pending} Pending</span>
          </div>
        </div>
      </Card>

      {/* Component List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {todos.map((todo) => (
          <Card
            key={todo.id}
            className={`p-4 border-l-4 ${getStatusColor(todo.status)}`}
          >
            <div className="flex items-start gap-3">
              {getStatusIcon(todo.status)}
              <div className="flex-1">
                <div className="font-medium text-gray-900 mb-1">
                  {todo.content
                    .replace(/ - ✅ COMPLETED.*$/, "")
                    .replace(/ - ❌ NOT STARTED.*$/, "")}
                </div>
                <div className="text-sm text-gray-600 capitalize">
                  {todo.status.replace("_", " ")}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
