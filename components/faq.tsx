"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "Do you offer product warranties?",
    answer: "Yes we do. 12 months for sound system, 24 months for TV.",
  },

  {
    question: "Do you provide delivery services?",
    answer: "No we don't.",
  },

  {
    question: "What if I need technical support?",
    answer: "Yes it can be provided at the location stated.",
  },
  {
    question: "Do you have a return policy?",
    answer: "Outright replacement of defective products (factory error).",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans text-2xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="font-serif text-lg text-gray-600">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:border-[#e82b05] transition-colors duration-200">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="font-sans font-semibold text-lg text-gray-900 pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-[#e82b05] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="font-serif text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-serif text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi! I have a question that's not covered in your FAQ.")
              window.open(`https://api.whatsapp.com/send?phone=2349154614906&text=${message}`, "_blank")
            }}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-sans font-semibold transition-colors duration-200"
          >
            Ask on WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
