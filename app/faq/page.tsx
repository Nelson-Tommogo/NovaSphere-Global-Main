"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ThemeProvider } from "@/components/theme-provider"
import { ArrowLeft, Search, HelpCircle, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-sm">
            NS
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Nova Sphere
          </span>
        </Link>
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Nova Sphere?",
          answer:
            "Nova Sphere is a professional resume template service that helps job seekers create outstanding resumes. We offer 50+ expertly designed templates, career guidance, and tools to help you land your dream job.",
        },
        {
          question: "How do I get started?",
          answer:
            "Simply browse our template collection, choose a design that fits your industry and style, make your purchase, and download your template. You can then customize it with your own information using any word processor.",
        },
        {
          question: "Are your templates ATS-friendly?",
          answer:
            "Yes! All our templates are designed to be ATS (Applicant Tracking System) compatible. They use standard fonts, proper formatting, and clear section headers that ATS systems can easily read and parse.",
        },
      ],
    },
    {
      category: "Templates & Design",
      questions: [
        {
          question: "How many templates do you offer?",
          answer:
            "We currently offer over 50 professionally designed resume templates across various industries including Executive, Creative, Technology, Healthcare, Finance, and more.",
        },
        {
          question: "Can I customize the templates?",
          answer:
            "Our templates are fully customizable. You can change colors, fonts, sections, and layout elements to match your personal brand and preferences.",
        },
        {
          question: "What file formats do you provide?",
          answer:
            "We provide templates in multiple formats including Microsoft Word (.docx), PDF, and sometimes Adobe InDesign files, depending on the template.",
        },
        {
          question: "Do you offer cover letter templates?",
          answer:
            "Yes! Many of our template packages include matching cover letter templates to ensure a cohesive professional presentation.",
        },
      ],
    },
    {
      category: "Purchasing & Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express) and bank transfers. All payments are processed securely through encrypted payment gateways.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes, we use industry-standard SSL encryption and work with trusted payment processors to ensure your financial information is completely secure.",
        },
        {
          question: "Can I purchase multiple templates?",
          answer:
            "Yes! We offer individual templates, bundles of 5 templates, and unlimited access packages. Bundle deals offer significant savings compared to individual purchases.",
        },
        {
          question: "Do you offer discounts for bulk purchases?",
          answer:
            "Yes, our bundle packages provide excellent value. The 5-template bundle saves you 40% compared to individual purchases, and our unlimited access plan offers the best value for career professionals.",
        },
      ],
    },
    {
      category: "Downloads & Usage",
      questions: [
        {
          question: "How do I download my templates after purchase?",
          answer:
            "After completing your purchase, you'll receive an email with download links. You can also access your purchases through your account dashboard on our website.",
        },
        {
          question: "How long do I have access to my downloads?",
          answer:
            "You have lifetime access to your purchased templates. You can re-download them anytime from your account dashboard.",
        },
        {
          question: "Can I use the templates for commercial purposes?",
          answer:
            "Yes, our license allows both personal and commercial use. You can use the templates for your own job search, client work, or business purposes.",
        },
        {
          question: "Can I share templates with others?",
          answer:
            "Our templates are licensed for individual use. Each person should purchase their own copy. However, you can use templates for client work if you're a career counselor or HR professional.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if I have trouble downloading my template?",
          answer:
            "If you experience any download issues, please contact our support team at support@novasphere.com. We'll help resolve the issue quickly and ensure you get your templates.",
        },
        {
          question: "Do you provide help with customizing templates?",
          answer:
            "We provide basic customization guidance and tutorials. For extensive customization help, we offer premium support packages and one-on-one consultations.",
        },
        {
          question: "What software do I need to edit the templates?",
          answer:
            "Most templates work with Microsoft Word, which is widely available. Some advanced templates may require Adobe InDesign or other professional design software.",
        },
        {
          question: "My template looks different when I open it. Why?",
          answer:
            "This usually happens due to font differences or software versions. We provide troubleshooting guides and alternative font suggestions to help resolve formatting issues.",
        },
      ],
    },
    {
      category: "Refunds & Policies",
      questions: [
        {
          question: "What is your refund policy?",
          answer:
            "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, contact us within 30 days for a full refund.",
        },
        {
          question: "Can I get a refund if the template doesn't work for me?",
          answer:
            "Yes, if you're unable to use the template due to technical issues or if it doesn't meet your expectations, we'll provide a full refund within 30 days of purchase.",
        },
        {
          question: "How long does it take to process a refund?",
          answer:
            "Refunds are typically processed within 3-5 business days. The time it takes to appear in your account depends on your payment method and bank.",
        },
      ],
    },
  ]

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about Nova Sphere templates and services.
              </p>
            </div>

            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredFAQs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No FAQs found matching "{searchTerm}". Try a different search term.
                </p>
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}

            <div className="mt-16 text-center">
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Still have questions?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <div className="flex gap-2">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full">Contact Support</Button>
                    </Link>
                    <Link href="/help-center" className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        Help Center
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
