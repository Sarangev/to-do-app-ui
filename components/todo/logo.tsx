"use client"

import { CheckSquare } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <CheckSquare className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Taskflow
      </span>
    </div>
  )
}
