'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Plus, MessageSquare, Search, Image, Music, Menu, Lightbulb } from 'lucide-react'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="p-4 pb-4 border-b">
        <div className="flex items-center gap-2 mb-4">
        <Lightbulb />
          <span className="font-semibold text-xl text-orange-600">Sky AI</span>
        </div>
        <Button className="w-full justify-start gap-2" variant="outline">
          <Plus className="h-4 w-4" />
          Start New
        </Button>
      </div>
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium px-2">Tools</h3>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <MessageSquare className="h-4 w-4" />
                AI Chat
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Search className="h-4 w-4" />
                AI Search Engine
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Image className="h-4 w-4" />
                Image Generation
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Music className="h-4 w-4" />
                Music Generation
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="p-4 border-t mt-auto">
        <div className="flex flex-col gap-4">
          <div className="bg-primary/10 rounded-lg p-4">
            <h4 className="font-semibold">Unlock all premium features</h4>
            <p className="text-sm text-muted-foreground">
              Supercharge your productivity with Chatly Pro
            </p>
            <Button className="w-full mt-4" variant="default">
              Upgrade
            </Button>
          </div>
          <Button variant="ghost" className="w-full justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <span>Mani Pal</span>
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden absolute left-4 top-4 z-50">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-[300px] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarContent />
      </div>
    </>
  )
}

