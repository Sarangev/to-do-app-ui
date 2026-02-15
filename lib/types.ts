export type Priority = "low" | "medium" | "high"
export type Category = "personal" | "work" | "health" | "learning"

export interface Task {
  id: string
  title: string
  completed: boolean
  priority: Priority
  category: Category
  createdAt: Date
}
