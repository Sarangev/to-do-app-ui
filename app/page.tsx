import { Header } from "@/components/todo/header"
import { TodoContainer } from "@/components/todo/todo-container"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-8 lg:px-0">
        <div className="mb-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            Good morning
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here is what you have planned for today. Let{"'"}s make it count.
          </p>
        </div>
        <TodoContainer />
      </main>
      <footer className="border-t border-border px-6 py-4">
        <p className="text-center text-xs text-muted-foreground">
          Taskflow &mdash; Stay organized, stay productive.
        </p>
      </footer>
    </div>
  )
}
