"use client"

import type { Task } from "@/lib/types"

interface ProgressRingProps {
  tasks: Task[]
}

export function ProgressRing({ tasks }: ProgressRingProps) {
  const total = tasks.length
  const completed = tasks.filter((t) => t.completed).length
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
      <div className="relative h-14 w-14 shrink-0">
        <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="5"
          />
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 24}`}
            strokeDashoffset={`${2 * Math.PI * 24 * (1 - percentage / 100)}`}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-foreground">{percentage}%</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">Today{"'"}s Progress</p>
        <p className="text-xs text-muted-foreground">
          {completed} of {total} tasks completed
        </p>
      </div>
    </div>
  )
}
