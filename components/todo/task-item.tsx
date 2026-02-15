"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, GripVertical } from "lucide-react"
import type { Task } from "@/lib/types"
import { cn } from "@/lib/utils"

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const priorityConfig = {
  low: { label: "Low", className: "bg-muted text-muted-foreground border-border" },
  medium: { label: "Med", className: "bg-primary/10 text-primary border-primary/20" },
  high: { label: "High", className: "bg-destructive/10 text-destructive border-destructive/20" },
}

const categoryConfig = {
  personal: { label: "Personal", className: "bg-chart-1/10 text-chart-1" },
  work: { label: "Work", className: "bg-chart-2/10 text-chart-2" },
  health: { label: "Health", className: "bg-chart-4/10 text-chart-4" },
  learning: { label: "Learning", className: "bg-chart-3/10 text-chart-3" },
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const priority = priorityConfig[task.priority]
  const category = categoryConfig[task.category]

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200",
        "hover:border-primary/30 hover:shadow-sm",
        task.completed && "opacity-60"
      )}
    >
      <GripVertical
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground/40 transition-opacity",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        className="h-5 w-5 shrink-0 rounded-full border-2 border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
        <span
          className={cn(
            "flex-1 truncate text-sm font-medium text-foreground transition-all",
            task.completed && "text-muted-foreground line-through"
          )}
        >
          {task.title}
        </span>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={cn("shrink-0 text-xs font-medium", priority.className)}>
            {priority.label}
          </Badge>
          <Badge variant="secondary" className={cn("shrink-0 text-xs font-medium", category.className)}>
            {category.label}
          </Badge>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(task.id)}
        className={cn(
          "h-8 w-8 shrink-0 text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        aria-label={`Delete task: ${task.title}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
