import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ChatInterface } from "@/components/chat-interface"

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="flex flex-col flex-1 min-h-screen max-h-screen w-full overflow-hidden">
        <Header />
        <ChatInterface />
      </main>
    </>
  )
}

