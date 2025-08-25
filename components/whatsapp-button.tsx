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
  phoneNumber = "+2349154614906",
  message = "Hi! I'm interested in your products.",
  className = "",
  variant = "default",
  size = "default",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
  const cleanPhoneNumber = phoneNumber.replace(/[^0-9+]/g, ""); // Ensure proper format
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

  console.log("[v0] WhatsApp URL:", whatsappUrl); // Debug log
  // Use a temporary link to open the URL
  const link = document.createElement('a');
  link.href = whatsappUrl;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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
