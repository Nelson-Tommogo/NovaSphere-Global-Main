"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ThemeProvider } from "@/components/theme-provider"
import { ArrowLeft, Search, BookOpen, MessageCircle, Video, Download, Users, Zap } from "lucide-react"
import Link from "next/link"

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

export default function HelpCenterPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: <Zap className="h-6 w-6" />,
      description: "Learn the basics of using Nova Sphere templates",
      articles: [
        "How to choose the right template",
        "Downloading your first template",
        "Basic customization guide",
        "Setting up your workspace",
      ],
    },
    {
      title: "Template Customization",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Master the art of personalizing your resume",
      articles: [
        "Changing colors and fonts",
        "Adding and removing sections",
        "Formatting tips and tricks",
        "Working with different software",
      ],
    },
    {
      title: "Technical Support",
      icon: <Users className="h-6 w-6" />,
      description: "Troubleshoot common technical issues",
      articles: [
        "Download problems and solutions",
        "Software compatibility issues",
        "File format explanations",
        "Troubleshooting formatting",
      ],
    },
    {
      title: "Video Tutorials",
      icon: <Video className="h-6 w-6" />,
      description: "Step-by-step video guides",
      articles: [
        "Template customization walkthrough",
        "Creating your first resume",
        "Advanced formatting techniques",
        "Industry-specific tips",
      ],
    },
  ]

  const quickLinks = [
    {
      title: "Download Issues",
      description: "Can't download your template? We'll help you fix it.",
      icon: <Download className="h-5 w-5" />,
      link: "/help/downloads",
    },
    {
      title: "Customization Help",
      description: "Learn how to personalize your resume template.",
      icon: <BookOpen className="h-5 w-5" />,
      link: "/help/customization",
    },
    {
      title: "Contact Support",
      description: "Get direct help from our support team.",
      icon: <MessageCircle className="h-5 w-5" />,
      link: "/contact",
    },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Help Center</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find guides, tutorials, and answers to help you make the most of Nova Sphere.
              </p>

              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search help articles..." className="pl-10" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {quickLinks.map((link, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-2">
                      {link.icon}
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {helpCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            • {article}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                      View All Articles
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is available Monday through Friday, 9 AM to 6 PM EST.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button size="lg" variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View FAQ
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#" className="text-sm hover:text-primary transition-colors">
                        How to customize template colors
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-primary transition-colors">
                        Making your resume ATS-friendly
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-primary transition-colors">
                        Choosing the right template for your industry
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-primary transition-colors">
                        Download and file format guide
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-sm hover:text-primary transition-colors">
                        Troubleshooting common issues
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="text-sm">
                      <span className="font-medium">New Template Collection:</span>
                      <span className="text-muted-foreground ml-2">Healthcare professionals</span>
                    </li>
                    <li className="text-sm">
                      <span className="font-medium">Updated Guide:</span>
                      <span className="text-muted-foreground ml-2">ATS optimization tips</span>
                    </li>
                    <li className="text-sm">
                      <span className="font-medium">New Feature:</span>
                      <span className="text-muted-foreground ml-2">One-click color themes</span>
                    </li>
                    <li className="text-sm">
                      <span className="font-medium">Video Tutorial:</span>
                      <span className="text-muted-foreground ml-2">Advanced customization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
