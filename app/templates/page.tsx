"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeProvider } from "@/components/theme-provider"
import { ArrowLeft, Search, Filter, Star, Download, Eye, CheckCircle } from "lucide-react"
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

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const templates = [
    {
      id: 1,
      name: "Executive Pro",
      category: "Executive",
      price: 29,
      image: "/images/resume-desk.jpg",
      features: ["ATS Optimized", "2 Page Layout", "Professional Design"],
      rating: 4.9,
      downloads: 1250,
      description: "Perfect for senior executives and C-level professionals",
    },
    {
      id: 2,
      name: "Creative Edge",
      category: "Creative",
      price: 25,
      image: "/images/resume-modern.jpg",
      features: ["Modern Design", "Color Accents", "Portfolio Section"],
      rating: 4.8,
      downloads: 980,
      description: "Ideal for designers, artists, and creative professionals",
    },
    {
      id: 3,
      name: "Tech Specialist",
      category: "Technology",
      price: 27,
      image: "/images/papers-coffee.jpg",
      features: ["Skills Matrix", "Project Showcase", "Clean Layout"],
      rating: 4.9,
      downloads: 1450,
      description: "Designed for software engineers and tech professionals",
    },
    {
      id: 4,
      name: "Healthcare Professional",
      category: "Healthcare",
      price: 26,
      image: "/images/professional-woman-2.jpg",
      features: ["Medical Focus", "Certification Section", "Clean Design"],
      rating: 4.7,
      downloads: 750,
      description: "Tailored for doctors, nurses, and healthcare workers",
    },
    {
      id: 5,
      name: "Finance Expert",
      category: "Finance",
      price: 28,
      image: "/images/resume-desk.jpg",
      features: ["Numbers Focused", "Achievement Highlights", "Professional"],
      rating: 4.8,
      downloads: 890,
      description: "Perfect for financial analysts and banking professionals",
    },
    {
      id: 6,
      name: "Marketing Maven",
      category: "Marketing",
      price: 24,
      image: "/images/resume-modern.jpg",
      features: ["Campaign Showcase", "Metrics Focus", "Visual Appeal"],
      rating: 4.6,
      downloads: 670,
      description: "Great for marketing managers and digital marketers",
    },
  ]

  const categories = ["all", "Executive", "Creative", "Technology", "Healthcare", "Finance", "Marketing"]

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.downloads - a.downloads
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Resume Templates</h1>
              <p className="text-xl text-muted-foreground">
                Choose from our collection of professionally designed templates for every industry.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {sortedTemplates.length} of {templates.length} templates
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{template.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full px-2 py-1 text-sm font-medium flex items-center">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      {template.rating}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 rounded-full px-2 py-1 text-xs">
                      {template.downloads} downloads
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{template.name}</CardTitle>
                        <CardDescription className="text-sm mt-1">{template.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${template.price}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {template.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2">
                    <Link href="/samples" className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </Link>
                    <Link href={`/checkout?template=${template.id}`} className="flex-1">
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Buy Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {sortedTemplates.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No templates found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-muted-foreground mb-6">
                We're constantly adding new templates. Contact us for custom template requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Request Custom Template</Button>
                </Link>
                <Link href="/career-tips">
                  <Button size="lg" variant="outline">
                    View Career Tips
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
