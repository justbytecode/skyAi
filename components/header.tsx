import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const models = [
    { name: "GPT 4o Mini", icon: "🤖" },
    { name: "GPT 4o", icon: "🤖", pro: true },
    { name: "Gemini 1.5 Pro", icon: "➕", pro: true },
    { name: "Claude 3.5 Sonnet", icon: "🎭", pro: true },
  ]

  return (
    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ScrollArea className="w-full">
        <div className="flex items-center gap-2 p-4 md:px-6">
          <div className="md:hidden w-6" /> {/* Space for mobile menu button */}
          {models.map((model) => (
            <Button
              key={model.name}
              variant="ghost"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span>{model.icon}</span>
              <span>{model.name}</span>
              {model.pro && (
                <Badge variant="secondary" className="ml-1">
                  Pro
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

