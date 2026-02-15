"use client"

import { CheckCircle2, Circle, ListTodo, TrendingUp } from "lucide-react"
import type { Task } from "@/lib/types"

interface StatsPanelProps {
  tasks: Task[]
}

export function StatsPanel({ tasks }: StatsPanelProps) {
  const total = tasks.length
  const completed = tasks.filter((t) => t.completed).length
  const pending = total - completed
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  const stats = [
    {
      label: "Total Tasks",
      value: total,
      icon: ListTodo,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Completed",
      value: completed,
      icon: CheckCircle2,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      label: "Pending",
      value: pending,
      icon: Circle,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      label: "Progress",
      value: `${percentage}%`,
      icon: TrendingUp,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
        >
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${stat.bgColor}`}>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="text-lg font-bold text-foreground">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
