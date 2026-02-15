"use client"

import { Logo } from "./logo"
import { CalendarDays } from "lucide-react"

export function Header() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4 lg:px-8">
      <Logo />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarDays className="h-4 w-4" />
        <span>{formattedDate}</span>
      </div>
    </header>
  )
}
