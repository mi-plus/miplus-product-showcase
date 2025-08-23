"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
}

// Default export
export default function WhatsAppButton({
  phoneNumber = "+1234567890",
  message = "Hi! I'm interested in your products.",
  className = "",
  variant = "default",
  size = "default",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant}
      size={size}
      className={`bg-mi-primary hover:bg-mi-primary/90 text-white font-body ${className}`}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      Inquire via WhatsApp
    </Button>
  )
}

// Named export for compatibility
export { WhatsAppButton }
