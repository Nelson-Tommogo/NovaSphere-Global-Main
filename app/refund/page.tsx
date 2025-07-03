"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { ArrowLeft, RefreshCw, CheckCircle, Clock, AlertCircle, MessageCircle } from "lucide-react"
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

export default function RefundPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
              <p className="text-xl text-muted-foreground">
                We stand behind our products with a satisfaction guarantee.
              </p>
              <p className="text-sm text-muted-foreground mt-2">Last updated: January 1, 2024</p>
            </div>

            <div className="space-y-8">
              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    30-Day Satisfaction Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 dark:text-green-300">
                    We offer a 30-day satisfaction guarantee on all our products. If you're not completely satisfied
                    with your purchase, we'll provide a full refund within 30 days of your purchase date.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eligible Refund Reasons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">We will process refunds for the following reasons:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Technical Issues:</strong> If you're unable to download or use the template due to
                        technical problems on our end.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Product Not as Described:</strong> If the template significantly differs from what was
                        advertised.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Compatibility Issues:</strong> If the template is incompatible with standard software
                        and we cannot provide a suitable alternative.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Duplicate Purchase:</strong> If you accidentally purchased the same template multiple
                        times.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Dissatisfaction:</strong> If you're simply not satisfied with the quality or design of
                        the template.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Refund Process & Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        1
                      </div>
                      <h3 className="font-semibold mb-1">Request Refund</h3>
                      <p className="text-sm text-muted-foreground">Contact us within 30 days</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        2
                      </div>
                      <h3 className="font-semibold mb-1">Review Process</h3>
                      <p className="text-sm text-muted-foreground">We review within 24 hours</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        3
                      </div>
                      <h3 className="font-semibold mb-1">Refund Issued</h3>
                      <p className="text-sm text-muted-foreground">3-5 business days</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    <h3 className="font-semibold">Processing Times:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>Credit Cards:</strong> 3-5 business days
                      </li>
                      <li>
                        • <strong>PayPal:</strong> 1-2 business days
                      </li>
                      <li>
                        • <strong>Bank Transfers:</strong> 5-7 business days
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How to Request a Refund</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    To request a refund, please contact us with the following information:
                  </p>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Required Information:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Order number or transaction ID</li>
                      <li>• Email address used for purchase</li>
                      <li>• Reason for refund request</li>
                      <li>• Date of purchase</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sem bold">Contact Methods:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Email: refunds@novasphere.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Support: support@novasphere.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-400">
                    <AlertCircle className="h-5 w-5" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-orange-700 dark:text-orange-300 text-sm">
                    <li>• Refunds are only available within 30 days of purchase</li>
                    <li>• Digital products cannot be "returned" but access will be revoked upon refund</li>
                    <li>• Bundle purchases are refunded in full, not partially</li>
                    <li>• Refunds are processed to the original payment method</li>
                    <li>• Processing times may vary depending on your bank or payment provider</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exceptions to Refund Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    While we strive to accommodate all reasonable refund requests, the following situations may not be
                    eligible for refunds:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Requests made after 30 days from purchase date</li>
                    <li>• Templates that have been extensively modified or customized</li>
                    <li>• Refund requests due to user error or lack of technical skills</li>
                    <li>• Purchases made with promotional codes or during special sales (case-by-case basis)</li>
                    <li>• Requests without proper purchase verification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alternative Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Before requesting a refund, consider these alternatives:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Technical Support:</strong> Our team can help resolve download or formatting issues.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Template Exchange:</strong> We may offer to exchange your template for a different
                        design.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Customization Help:</strong> We provide guides and support for template customization.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Need to Request a Refund?</h2>
                <p className="text-muted-foreground mb-6">
                  Our customer service team is here to help make the process as smooth as possible.
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
                      View FAQ
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
