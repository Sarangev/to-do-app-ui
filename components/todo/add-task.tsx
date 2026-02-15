"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Priority, Category } from "@/lib/types"

interface AddTaskProps {
  onAdd: (title: string, priority: Priority, category: Category) => void
}

export function AddTask({ onAdd }: AddTaskProps) {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState<Priority>("medium")
  const [category, setCategory] = useState<Category>("personal")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title.trim(), priority, category)
    setTitle("")
    setPriority("medium")
    setCategory("personal")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Input
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-12 border-border bg-card pl-4 pr-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>
      <div className="flex items-center gap-2">
        <Select value={priority} onValueChange={(val) => setPriority(val as Priority)}>
          <SelectTrigger className="h-12 w-[120px] border-border bg-card text-foreground">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>
        <Select value={category} onValueChange={(val) => setCategory(val as Category)}>
          <SelectTrigger className="h-12 w-[130px] border-border bg-card text-foreground">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="learning">Learning</SelectItem>
          </SelectContent>
        </Select>
        <Button
          type="submit"
          size="lg"
          className="h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Add</span>
        </Button>
      </div>
    </form>
  )
}
