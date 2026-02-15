"use client"

import { useState, useMemo } from "react"
import type { Task, Priority, Category } from "@/lib/types"
import { AddTask } from "./add-task"
import { TaskItem } from "./task-item"
import { StatsPanel } from "./stats-panel"
import { FilterBar, type FilterStatus } from "./filter-bar"
import { EmptyState } from "./empty-state"
import { ProgressRing } from "./progress-ring"

const defaultTasks: Task[] = [
  {
    id: "1",
    title: "Review quarterly project proposal",
    completed: false,
    priority: "high",
    category: "work",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Morning run - 5km",
    completed: true,
    priority: "medium",
    category: "health",
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Read chapter 5 of Design Patterns",
    completed: false,
    priority: "low",
    category: "learning",
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "Prepare grocery list for the week",
    completed: false,
    priority: "medium",
    category: "personal",
    createdAt: new Date(),
  },
  {
    id: "5",
    title: "Update resume and portfolio site",
    completed: true,
    priority: "high",
    category: "personal",
    createdAt: new Date(),
  },
]

export function TodoContainer() {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks)
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("all")
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all")

  const addTask = (title: string, priority: Priority, category: Category) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority,
      category,
      createdAt: new Date(),
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusMatch =
        statusFilter === "all"
          ? true
          : statusFilter === "active"
            ? !task.completed
            : task.completed
      const categoryMatch =
        categoryFilter === "all" ? true : task.category === categoryFilter
      return statusMatch && categoryMatch
    })
  }, [tasks, statusFilter, categoryFilter])

  const taskCounts = useMemo(
    () => ({
      all: tasks.length,
      active: tasks.filter((t) => !t.completed).length,
      completed: tasks.filter((t) => t.completed).length,
    }),
    [tasks]
  )

  const isFiltered = statusFilter !== "all" || categoryFilter !== "all"

  return (
    <div className="flex flex-col gap-6">
      {/* Progress & Stats */}
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <StatsPanel tasks={tasks} />
        <ProgressRing tasks={tasks} />
      </div>

      {/* Add Task */}
      <div className="rounded-xl border border-border bg-card p-4">
        <AddTask onAdd={addTask} />
      </div>

      {/* Filters */}
      <FilterBar
        status={statusFilter}
        category={categoryFilter}
        onStatusChange={setStatusFilter}
        onCategoryChange={setCategoryFilter}
        taskCounts={taskCounts}
      />

      {/* Task List */}
      <div className="flex flex-col gap-2">
        {filteredTasks.length === 0 ? (
          <EmptyState isFiltered={isFiltered} />
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  )
}
