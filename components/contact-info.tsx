"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export default function ContactInfo() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to know more about MI+ products.")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  const handleEmailClick = () => {
    window.open("mailto:customer.care@key-e.com?subject=Product Inquiry", "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+1234567890", "_blank")
  }

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/share/1MyZsDBV7q/?mibextid=LQQJ4d", "_blank")
  }

  const handleInstagramClick = () => {
    window.open("https://instagram.com/miplus_tech", "_blank")
  }

  const handleTikTokClick = () => {
    window.open("https://tiktok.com/@miplustech", "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans text-2xl md:text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h2>
          <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your preferred method of communication. We're committed to providing you with exceptional service and
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e82b05] p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-lg mb-2">WhatsApp (Recommended)</h3>
                    <p className="text-gray-600 mb-4">
                      Get instant responses to your product inquiries and receive personalized recommendations.
                    </p>
                    <Button onClick={handleWhatsAppClick} className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#6f888f] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-lg mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-4">
                      Speak directly with our product specialists for detailed consultations.
                    </p>
                    <Button
                      onClick={handlePhoneClick}
                      variant="outline"
                      className="border-[#6f888f] text-[#6f888f] hover:bg-[#6f888f] hover:text-white bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +1 (234) 567-8900
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e82b05] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600 mb-4">For detailed inquiries, partnerships, or business proposals.</p>
                    <Button
                      onClick={handleEmailClick}
                      variant="outline"
                      className="border-[#e82b05] text-[#e82b05] hover:bg-[#e82b05] hover:text-white bg-transparent"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      customer.care@key-e.com
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-[#6f888f] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg mb-2">Visit Our Showroom</h3>
                    <p className="text-gray-600">
                      123 Innovation Street
                      <br />
                      Tech District, City 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-[#e82b05] p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 8:30 AM - 5:30 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-sans font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button onClick={handleFacebookClick} size="sm" variant="outline" className="p-2 bg-transparent">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button onClick={handleInstagramClick} size="sm" variant="outline" className="p-2 bg-transparent">
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button onClick={handleTikTokClick} size="sm" variant="outline" className="p-2 bg-transparent">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
