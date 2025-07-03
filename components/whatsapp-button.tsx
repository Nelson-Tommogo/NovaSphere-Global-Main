"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "+254700447664"
  const message = "Hello! I'm interested in Nova Sphere CV templates. Can you help me?"

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  )
}
