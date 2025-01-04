'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Pen, Image, Code, Eye, Link2, HelpCircle, FileText, BarChart2, Lightbulb, Globe } from 'lucide-react'

export function ChatInterface() {
  const features = [
    { name: "Help me write", icon: Pen },
    { name: "Create images", icon: Image, pro: true },
    { name: "Code", icon: Code },
    { name: "Analyze image", icon: Eye, pro: true },
    { name: "Summarize link", icon: Link2, pro: true },
    { name: "Get advice", icon: HelpCircle },
    { name: "Process doc", icon: FileText, pro: true },
    { name: "Analyze data", icon: BarChart2, pro: true },
    { name: "Brainstorm", icon: Lightbulb },
    { name: "Web search", icon: Globe },
  ]

  return (
    <ScrollArea className="flex-1">
      <div className="flex flex-col min-h-full p-4 md:p-6">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-center text-zinc-300">
            How can I help you today?
          </h1>
          
          <div className="relative">
            <Textarea
              placeholder="Type your message ..."
              className="min-h-[100px] resize-none pl-12 bg-zinc-900/50"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute left-3 top-3 h-6 w-6 text-muted-foreground"
            >
              <Link2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {features.map((feature) => (
              <Card
                key={feature.name}
                className="p-3 md:p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent cursor-pointer transition-colors"
              >
                <div className="relative">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                  {feature.pro && (
                    <Badge
                      variant="secondary"
                      className="absolute -top-2 -right-2 text-[10px] md:text-xs"
                    >
                      Pro
                    </Badge>
                  )}
                </div>
                <span className="text-xs md:text-sm text-center">{feature.name}</span>
              </Card>
            ))}
          </div>

          <p className="text-xs md:text-sm text-center text-muted-foreground pb-4">
            skyAI can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </ScrollArea>
  )
}

