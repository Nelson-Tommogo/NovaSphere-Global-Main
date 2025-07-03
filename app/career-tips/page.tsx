"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ThemeProvider } from "@/components/theme-provider"
import { ArrowLeft, Search, BookOpen, Clock, User, TrendingUp, Target, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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

export default function CareerTipsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const featuredArticles = [
    {
      title: "10 Resume Mistakes That Cost You Job Interviews",
      excerpt:
        "Avoid these common pitfalls that prevent your resume from getting noticed by hiring managers and ATS systems.",
      category: "Resume Writing",
      readTime: "8 min read",
      image: "/images/resume-desk.jpg",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
    },
    {
      title: "How to Optimize Your Resume for ATS Systems",
      excerpt: "Learn the secrets to making your resume ATS-friendly while maintaining visual appeal and readability.",
      category: "ATS Optimization",
      readTime: "12 min read",
      image: "/images/resume-modern.jpg",
      author: "Michael Chen",
      date: "Dec 10, 2023",
    },
    {
      title: "Career Change: Transitioning to a New Industry",
      excerpt:
        "Strategic advice for professionals looking to pivot their careers and enter new industries successfully.",
      category: "Career Change",
      readTime: "15 min read",
      image: "/images/professional-woman-1.jpg",
      author: "Emily Rodriguez",
      date: "Dec 5, 2023",
    },
  ]

  const categories = [
    {
      name: "Resume Writing",
      icon: <BookOpen className="h-5 w-5" />,
      count: 24,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Interview Tips",
      icon: <Users className="h-5 w-5" />,
      count: 18,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Career Development",
      icon: <TrendingUp className="h-5 w-5" />,
      count: 32,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Job Search",
      icon: <Target className="h-5 w-5" />,
      count: 21,
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Networking",
      icon: <Users className="h-5 w-5" />,
      count: 15,
      color: "bg-pink-100 text-pink-800",
    },
    {
      name: "Industry Insights",
      icon: <Lightbulb className="h-5 w-5" />,
      count: 28,
      color: "bg-yellow-100 text-yellow-800",
    },
  ]

  const recentArticles = [
    {
      title: "The Ultimate Guide to LinkedIn Profile Optimization",
      category: "Networking",
      readTime: "10 min read",
      date: "Dec 12, 2023",
    },
    {
      title: "Salary Negotiation: How to Get What You're Worth",
      category: "Career Development",
      readTime: "14 min read",
      date: "Dec 8, 2023",
    },
    {
      title: "Remote Work: Building Your Home Office Resume",
      category: "Resume Writing",
      readTime: "7 min read",
      date: "Dec 3, 2023",
    },
    {
      title: "Industry Spotlight: Tech Career Trends for 2024",
      category: "Industry Insights",
      readTime: "11 min read",
      date: "Nov 28, 2023",
    },
    {
      title: "Behavioral Interview Questions: How to Ace Them",
      category: "Interview Tips",
      readTime: "9 min read",
      date: "Nov 25, 2023",
    },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Career Tips & Insights</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert advice to accelerate your career growth and land your dream job.
              </p>

              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search career tips..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                  <div className="space-y-8">
                    {featuredArticles.map((article, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              width={300}
                              height={200}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="secondary">{article.category}</Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {article.readTime}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <User className="h-3 w-3" />
                                <span>{article.author}</span>
                                <span>•</span>
                                <span>{article.date}</span>
                              </div>
                              <Button variant="outline" size="sm">
                                Read More
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                  <div className="space-y-4">
                    {recentArticles.map((article, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {article.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {article.readTime}
                                </span>
                              </div>
                              <h3 className="font-semibold mb-1 hover:text-primary cursor-pointer">{article.title}</h3>
                              <p className="text-sm text-muted-foreground">{article.date}</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              Read
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded ${category.color}`}>{category.icon}</div>
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Popular This Week</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-2 border-primary pl-3">
                        <h4 className="font-medium text-sm mb-1">How to Write a Cover Letter That Gets Noticed</h4>
                        <p className="text-xs text-muted-foreground">2.3k views</p>
                      </div>
                      <div className="border-l-2 border-muted pl-3">
                        <h4 className="font-medium text-sm mb-1">Top Skills Employers Want in 2024</h4>
                        <p className="text-xs text-muted-foreground">1.8k views</p>
                      </div>
                      <div className="border-l-2 border-muted pl-3">
                        <h4 className="font-medium text-sm mb-1">Building Your Personal Brand</h4>
                        <p className="text-xs text-muted-foreground">1.5k views</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
                  <CardHeader>
                    <CardTitle>Get Personalized Career Advice</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Book a one-on-one consultation with our career experts for personalized guidance.
                    </p>
                    <Button className="w-full">Schedule Consultation</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest career tips and industry insights.
              </p>
              <div className="flex max-w-md mx-auto gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
