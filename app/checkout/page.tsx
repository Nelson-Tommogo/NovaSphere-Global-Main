"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowLeft, CreditCard, Shield, CheckCircle, Download } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

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

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")

  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    country: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const plans = {
    "single-template": {
      name: "Single Template",
      price: 25,
      features: ["1 Premium Template", "Multiple Format Downloads", "Basic Customization", "Email Support"],
    },
    "template-bundle": {
      name: "Template Bundle",
      price: 49,
      features: [
        "5 Premium Templates",
        "All Format Downloads",
        "Advanced Customization",
        "Priority Support",
        "Cover Letter Templates",
      ],
    },
    "unlimited-access": {
      name: "Unlimited Access",
      price: 99,
      features: [
        "All 50+ Templates",
        "Lifetime Updates",
        "Premium Customization",
        "1-on-1 Career Consultation",
        "LinkedIn Profile Optimization",
      ],
    },
  }

  const selectedPlan = plans[planParam as keyof typeof plans] || plans["single-template"]
  const tax = Math.round(selectedPlan.price * 0.16 * 100) / 100 // 16% VAT
  const total = selectedPlan.price + tax

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required"
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "Valid card number is required"
    }
    if (!formData.expiry || !/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Valid expiry date (MM/YY) is required"
    }
    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = "Valid CVV is required"
    }
    if (!formData.country) {
      newErrors.country = "Country is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiry = (value: string) => {
    const v = value.replace(/\D/g, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value

    if (field === "cardNumber") {
      formattedValue = formatCardNumber(value)
    } else if (field === "expiry") {
      formattedValue = formatExpiry(value)
    } else if (field === "cvv") {
      formattedValue = value.replace(/\D/g, "").substring(0, 4)
    }

    setFormData({ ...formData, [field]: formattedValue })

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container py-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
                <p className="text-xl text-muted-foreground">
                  Thank you for your purchase. Your order has been processed successfully.
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Plan:</span>
                      <span className="font-medium">{selectedPlan.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Paid:</span>
                      <span className="font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button size="lg" className="w-full">
                  <Download className="h-5 w-5 mr-2" />
                  Download Your Templates
                </Button>
                <p className="text-sm text-muted-foreground">
                  Download links have been sent to your email address. You can also download your templates using the
                  button above.
                </p>
                <Link href="/">
                  <Button variant="outline" size="lg">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          </main>
          <WhatsAppButton />
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
              <p className="text-muted-foreground">Secure checkout powered by industry-standard encryption</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold">{selectedPlan.name}</h3>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        {selectedPlan.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${selectedPlan.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VAT (16%):</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secure 256-bit SSL encryption</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Contact Information</h3>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className={errors.firstName ? "border-red-500" : ""}
                            />
                            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              className={errors.lastName ? "border-red-500" : ""}
                            />
                            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Select
                            value={formData.country}
                            onValueChange={(value) => handleInputChange("country", value)}
                          >
                            <SelectTrigger className={errors.country ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="KE">Kenya</SelectItem>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="UK">United Kingdom</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="AU">Australia</SelectItem>
                              <SelectItem value="DE">Germany</SelectItem>
                              <SelectItem value="FR">France</SelectItem>
                              <SelectItem value="NG">Nigeria</SelectItem>
                              <SelectItem value="ZA">South Africa</SelectItem>
                              <SelectItem value="UG">Uganda</SelectItem>
                              <SelectItem value="TZ">Tanzania</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
                        </div>
                      </div>

                      {/* Payment Details */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Payment Details</h3>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                            className={errors.cardNumber ? "border-red-500" : ""}
                            maxLength={19}
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
                              onChange={(e) => handleInputChange("expiry", e.target.value)}
                              className={errors.expiry ? "border-red-500" : ""}
                              maxLength={5}
                            />
                            {errors.expiry && <p className="text-sm text-red-500">{errors.expiry}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange("cvv", e.target.value)}
                              className={errors.cvv ? "border-red-500" : ""}
                              maxLength={4}
                            />
                            {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing Payment...
                          </>
                        ) : (
                          `Complete Purchase - $${total.toFixed(2)}`
                        )}
                      </Button>

                      <div className="text-center text-sm text-muted-foreground">
                        <p>By completing this purchase, you agree to our</p>
                        <div className="flex justify-center gap-4 mt-1">
                          <Link href="/terms" className="hover:text-primary">
                            Terms of Service
                          </Link>
                          <Link href="/privacy" className="hover:text-primary">
                            Privacy Policy
                          </Link>
                          <Link href="/refund" className="hover:text-primary">
                            Refund Policy
                          </Link>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}
