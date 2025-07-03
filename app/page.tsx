"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {
  Moon,
  Sun,
  Star,
  Download,
  Eye,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  Award,
  Zap,
  Shield,
  Menu,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/templates" className="text-sm font-medium hover:text-primary transition-colors">
            Templates
          </Link>
          <Link href="/samples" className="text-sm font-medium hover:text-primary transition-colors">
            Samples
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button className="hidden md:inline-flex">Get Started</Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-2">
            <Link href="/templates" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Templates
            </Link>
            <Link href="/samples" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Samples
            </Link>
            <Link href="#pricing" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="w-full mt-4">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                ✨ Professional CV Templates
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Career Story
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Create stunning, professional CVs that get you noticed. Choose from our premium templates and land your
                dream job.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/templates">
                <Button size="lg" className="text-lg px-8">
                  Browse Templates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/samples">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  View Samples
                  <Eye className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/professional-woman-1.jpg"
                alt="Professional success"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <div className="font-semibold">Interview Secured!</div>
                  <div className="text-sm text-muted-foreground">Sarah M.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Professional Templates",
      description: "50+ expertly designed templates for every industry and career level.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick & Easy",
      description: "Create your perfect CV in minutes with our intuitive editor.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "ATS Optimized",
      description: "All templates are optimized for Applicant Tracking Systems.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Reviewed",
      description: "Templates reviewed by HR professionals and career experts.",
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Multiple Formats",
      description: "Download in PDF, Word, or other popular formats.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Private",
      description: "Your data is encrypted and never shared with third parties.",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Nova Sphere?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to create a standout CV that gets results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplatesSection() {
  const templates = [
    {
      id: 1,
      name: "Executive Pro",
      category: "Executive",
      price: 29,
      image: "/images/resume-desk.jpg",
      features: ["ATS Optimized", "2 Page Layout", "Professional Design"],
      rating: 4.9,
    },
    {
      id: 2,
      name: "Creative Edge",
      category: "Creative",
      price: 25,
      image: "/images/resume-modern.jpg",
      features: ["Modern Design", "Color Accents", "Portfolio Section"],
      rating: 4.8,
    },
    {
      id: 3,
      name: "Tech Specialist",
      category: "Technology",
      price: 27,
      image: "/images/papers-coffee.jpg",
      features: ["Skills Matrix", "Project Showcase", "Clean Layout"],
      rating: 4.9,
    },
  ]

  return (
    <section id="templates" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Premium CV Templates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates, crafted for different industries and career
            levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image src={template.image || "/placeholder.svg"} alt={template.name} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{template.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full px-2 py-1 text-sm font-medium flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                  {template.rating}
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{template.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">${template.price}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
                <PaymentDialog template={template}>
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Buy Now
                  </Button>
                </PaymentDialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/templates">
            <Button size="lg" variant="outline">
              View All Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function PaymentDialog({ template, children }: { template: any; children: React.ReactNode }) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
    email: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required"
    }
    if (!formData.cardNumber || formData.cardNumber.length < 16) {
      newErrors.cardNumber = "Valid card number is required"
    }
    if (!formData.expiry || !/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Valid expiry date (MM/YY) is required"
    }
    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = "Valid CVV is required"
    }
    if (!formData.name.trim()) {
      newErrors.name = "Cardholder name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsProcessing(false)
    alert("Payment successful! Check your email for download links.")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Purchase {template.name}</DialogTitle>
          <DialogDescription>Complete your purchase to download this premium CV template.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">{template.name}</span>
              <span className="font-bold">${template.price}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                id="card-number"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                className={errors.cardNumber ? "border-red-500" : ""}
              />
              {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                  className={errors.expiry ? "border-red-500" : ""}
                />
                {errors.expiry && <p className="text-sm text-red-500">{errors.expiry}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  className={errors.cvv ? "border-red-500" : ""}
                />
                {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>
          </div>

          <Button className="w-full" size="lg" onClick={handleSubmit} disabled={isProcessing}>
            {isProcessing ? "Processing Payment..." : `Complete Purchase - $${template.price}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function PricingSection() {
  const plans = [
    {
      name: "Single Template",
      price: 25,
      description: "Perfect for one-time use",
      features: ["1 Premium Template", "Multiple Format Downloads", "Basic Customization", "Email Support"],
    },
    {
      name: "Template Bundle",
      price: 49,
      description: "Best value for job seekers",
      features: [
        "5 Premium Templates",
        "All Format Downloads",
        "Advanced Customization",
        "Priority Support",
        "Cover Letter Templates",
      ],
      popular: true,
    },
    {
      name: "Unlimited Access",
      price: 99,
      description: "For career professionals",
      features: [
        "All 50+ Templates",
        "Lifetime Updates",
        "Premium Customization",
        "1-on-1 Career Consultation",
        "LinkedIn Profile Optimization",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your career goals. All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-4xl font-bold mt-4">
                  ${plan.price}
                  <span className="text-lg font-normal text-muted-foreground">/once</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href={`/checkout?plan=${plan.name.toLowerCase().replace(" ", "-")}`} className="w-full">
                  <Button className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}`}>
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Nova Sphere has helped professionals worldwide land their dream jobs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/professional-woman-2.jpg"
                  alt="Sarah Johnson"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Marketing Manager, USA</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "Nova Sphere's templates helped me land my dream job at a Fortune 500 company. The design was
                professional and the ATS optimization really worked!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-15 h-15 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  MO
                </div>
                <div>
                  <div className="font-semibold">Mike Otieno</div>
                  <div className="text-sm text-muted-foreground">Software Engineer, Kenya</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The tech-focused template was perfect for my career transition. I got 3x more interview calls compared
                to my old resume!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-15 h-15 rounded-full bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white font-bold mr-4">
                  AR
                </div>
                <div>
                  <div className="font-semibold">Aisha Rahman</div>
                  <div className="text-sm text-muted-foreground">Project Manager, UAE</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "Amazing templates! I secured a senior position within 2 weeks of updating my resume. The executive
                template was exactly what I needed."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-sm">
                NS
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Nova Sphere
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transform your career with professional CV templates designed to get you hired.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Templates</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/templates/executive" className="hover:text-primary">
                  Executive
                </Link>
              </li>
              <li>
                <Link href="/templates/creative" className="hover:text-primary">
                  Creative
                </Link>
              </li>
              <li>
                <Link href="/templates/technology" className="hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/templates/healthcare" className="hover:text-primary">
                  Healthcare
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help-center" className="hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/career-tips" className="hover:text-primary">
                  Career Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-primary">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nova Sphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <TemplatesSection />
          <PricingSection />
          <TestimonialsSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}
