"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowLeft, Users, Target, Award, Globe, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

export default function AboutPage() {
  const stats = [
    { number: "50+", label: "Premium Templates" },
    { number: "10K+", label: "Happy Customers" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We strive for perfection in every template we create, ensuring professional quality that stands out.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "Your success is our priority. We're committed to helping you achieve your career goals.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously evolve our designs to meet modern recruitment standards and ATS requirements.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Serving professionals worldwide, from Kenya to the USA, helping careers flourish everywhere.",
    },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="py-20 lg:py-32">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  About Nova Sphere
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Transforming Careers{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Worldwide
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Based in Kisii, Kenya, Nova Sphere is dedicated to helping professionals worldwide create stunning CVs
                  that open doors to new opportunities. We believe everyone deserves a chance to showcase their best
                  professional self.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/templates">
                    <Button size="lg">Explore Templates</Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-muted/50">
            <div className="container">
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Nova Sphere was born from a simple observation: talented professionals were being overlooked
                      because their CVs didn't effectively showcase their skills and experience. Founded in Kisii,
                      Kenya, we set out to bridge this gap.
                    </p>
                    <p>
                      Our team of designers, HR professionals, and career experts work tirelessly to create templates
                      that not only look stunning but also pass through Applicant Tracking Systems (ATS) and catch the
                      attention of hiring managers.
                    </p>
                    <p>
                      Today, we're proud to serve professionals from all walks of life - from fresh graduates in Nairobi
                      to seasoned executives in New York. Every success story motivates us to continue innovating and
                      improving our offerings.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/professional-woman-1.jpg"
                    alt="Professional team"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-muted/50">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  These core principles guide everything we do at Nova Sphere.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white mx-auto mb-4">
                        {value.icon}
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-xl text-muted-foreground">
                    To democratize professional opportunities by providing world-class CV templates that help every
                    professional present their best self.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        What We Do
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Create ATS-optimized CV templates</li>
                        <li>• Provide career guidance and tips</li>
                        <li>• Offer personalized consultation services</li>
                        <li>• Support professionals at every career stage</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        Why Choose Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Expert-designed templates</li>
                        <li>• Proven success track record</li>
                        <li>• Affordable pricing for everyone</li>
                        <li>• Dedicated customer support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="py-20 bg-muted/50">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Located in the heart of Kisii, Kenya, our team is always ready to help you succeed.
                </p>
                <Card className="text-left">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <p className="font-semibold">Nova Sphere</p>
                      <p className="text-muted-foreground">
                        E2 Bogeka Plaza
                        <br />
                        Mosocho Road, Kisii
                        <br />
                        Kisii Central District
                        <br />
                        P.O. Box 520, 40200 Kisii
                        <br />
                        Kenya
                      </p>
                      <div className="pt-4">
                        <p className="font-medium">Contact Information:</p>
                        <p className="text-muted-foreground">Phone: +254 700 447 664</p>
                        <p className="text-muted-foreground">Email: hello@novasphere.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of professionals who have successfully landed their dream jobs with Nova Sphere
                  templates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/templates">
                    <Button size="lg">Browse Templates</Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}
