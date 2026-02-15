"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Category } from "@/lib/types"

export type FilterStatus = "all" | "active" | "completed"

interface FilterBarProps {
  status: FilterStatus
  category: Category | "all"
  onStatusChange: (status: FilterStatus) => void
  onCategoryChange: (category: Category | "all") => void
  taskCounts: { all: number; active: number; completed: number }
}

export function FilterBar({
  status,
  category,
  onStatusChange,
  onCategoryChange,
  taskCounts,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Tabs value={status} onValueChange={(val) => onStatusChange(val as FilterStatus)}>
        <TabsList className="h-10 bg-muted">
          <TabsTrigger value="all" className="text-sm data-[state=active]:bg-card data-[state=active]:text-foreground">
            All ({taskCounts.all})
          </TabsTrigger>
          <TabsTrigger value="active" className="text-sm data-[state=active]:bg-card data-[state=active]:text-foreground">
            Active ({taskCounts.active})
          </TabsTrigger>
          <TabsTrigger value="completed" className="text-sm data-[state=active]:bg-card data-[state=active]:text-foreground">
            Done ({taskCounts.completed})
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Select value={category} onValueChange={(val) => onCategoryChange(val as Category | "all")}>
        <SelectTrigger className="h-10 w-[160px] border-border bg-card text-foreground">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="learning">Learning</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
