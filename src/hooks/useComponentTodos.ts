import { useState, useEffect } from "react";

export interface ComponentTodo {
  id: string;
  content: string;
  status: "completed" | "pending" | "in_progress" | "cancelled";
}

// This hook provides a way to manage component todos
// In a real implementation, this could connect to your todo system
export function useComponentTodos() {
  const [todos, setTodos] = useState<ComponentTodo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading from your todo system
    // In a real implementation, this would fetch from your actual todo system
    const componentTodos: ComponentTodo[] = [
      { id: "accordion", content: "Accordion component", status: "completed" },
      { id: "alerts", content: "Alert component", status: "completed" },
      { id: "buttons", content: "Button component", status: "completed" },
      { id: "breadcrumb", content: "Breadcrumb component", status: "pending" },
      { id: "cards", content: "Card component", status: "completed" },
      { id: "carousel", content: "Carousel component", status: "completed" },
      { id: "checkbox", content: "Checkbox component", status: "completed" },
      { id: "dialog", content: "Dialog component", status: "completed" },
      { id: "radio", content: "Radio component", status: "completed" },
      { id: "tabs", content: "Tabs component", status: "completed" },
      { id: "select", content: "Select component", status: "pending" },
      { id: "input", content: "Input component", status: "pending" },
      { id: "drawer", content: "Drawer component", status: "pending" },
      { id: "dropdown", content: "Dropdown component", status: "pending" },
      { id: "footer", content: "Footer component", status: "pending" },
      { id: "header", content: "Header component", status: "pending" },
      {
        id: "pagination",
        content: "Pagination component",
        status: "completed",
      },
      {
        id: "progress-bar",
        content: "Progress bar component",
        status: "completed",
      },
      { id: "spinner", content: "Spinner component", status: "completed" },
      {
        id: "sort-filter",
        content: "Sort filter component",
        status: "pending",
      },
      {
        id: "tables-datagrid",
        content: "Tables & datagrid component",
        status: "pending",
      },
      { id: "tooltips", content: "Tooltips component", status: "completed" },
    ];

    // Simulate async loading
    setTimeout(() => {
      setTodos(componentTodos);
      setLoading(false);
    }, 100);
  }, []);

  const updateTodoStatus = (id: string, status: ComponentTodo["status"]) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  const getProgressStats = () => {
    const completed = todos.filter((todo) => todo.status === "completed");
    const pending = todos.filter((todo) => todo.status === "pending");
    const inProgress = todos.filter((todo) => todo.status === "in_progress");

    return {
      total: todos.length,
      completed: completed.length,
      pending: pending.length,
      inProgress: inProgress.length,
      progressPercentage: Math.round((completed.length / todos.length) * 100),
    };
  };

  return {
    todos,
    loading,
    updateTodoStatus,
    getProgressStats,
  };
}
