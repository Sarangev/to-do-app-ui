"use client"

import { ClipboardList } from "lucide-react"

interface EmptyStateProps {
  isFiltered: boolean
}

export function EmptyState({ isFiltered }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        <ClipboardList className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">
        {isFiltered ? "No matching tasks" : "No tasks yet"}
      </h3>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">
        {isFiltered
          ? "Try adjusting your filters to find what you're looking for."
          : "Get started by adding your first task above. Stay organized and productive!"}
      </p>
    </div>
  )
}
