"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"
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

export default function TermsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-xl text-muted-foreground">
                Please read these terms carefully before using our services.
              </p>
              <p className="text-sm text-muted-foreground mt-2">Last updated: January 1, 2024</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By accessing and using Nova Sphere's website and services, you accept and agree to be bound by the
                    terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                    this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Description of Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Nova Sphere provides professional resume templates, career guidance, and related services. Our
                    services include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access to premium resume templates</li>
                    <li>Resume customization tools</li>
                    <li>Career tips and guidance</li>
                    <li>Customer support services</li>
                    <li>Educational content and resources</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Accounts and Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Account Creation</h3>
                    <p className="text-muted-foreground">
                      To access certain features, you may need to create an account. You agree to provide accurate,
                      current, and complete information during registration.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Account Security</h3>
                    <p className="text-muted-foreground">
                      You are responsible for maintaining the confidentiality of your account credentials and for all
                      activities that occur under your account.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Account Termination</h3>
                    <p className="text-muted-foreground">
                      We reserve the right to terminate or suspend accounts that violate these terms or engage in
                      prohibited activities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pricing</h3>
                    <p className="text-muted-foreground">
                      All prices are clearly displayed on our website. Prices may change at any time, but changes will
                      not affect orders already placed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Payment Processing</h3>
                    <p className="text-muted-foreground">
                      We accept various payment methods including credit cards and bank transfers. Payment processing is
                      handled by secure third-party providers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Refunds</h3>
                    <p className="text-muted-foreground">
                      Refund requests are subject to our Refund Policy. Digital products may have different refund terms
                      than physical products.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Our Content</h3>
                    <p className="text-muted-foreground">
                      All content on Nova Sphere, including templates, text, graphics, logos, and software, is owned by
                      us or our licensors and is protected by copyright and other intellectual property laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">License to Use</h3>
                    <p className="text-muted-foreground">
                      Upon purchase, you receive a limited, non-exclusive license to use our templates for personal or
                      commercial purposes, subject to the restrictions outlined in our license agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">User Content</h3>
                    <p className="text-muted-foreground">
                      You retain ownership of content you create using our templates. However, you grant us a license to
                      use anonymized examples for marketing purposes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Prohibited Uses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    You may not use our services for any unlawful purpose or in any way that could damage, disable, or
                    impair our services. Prohibited activities include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Violating any applicable laws or regulations</li>
                    <li>Infringing on intellectual property rights</li>
                    <li>Distributing malware or harmful code</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Reselling or redistributing our templates without permission</li>
                    <li>Using our services to spam or harass others</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Disclaimers and Limitations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Service Availability</h3>
                    <p className="text-muted-foreground">
                      We strive to maintain service availability but cannot guarantee uninterrupted access. Services may
                      be temporarily unavailable due to maintenance or technical issues.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">No Guarantee of Results</h3>
                    <p className="text-muted-foreground">
                      While our templates are professionally designed, we cannot guarantee specific outcomes such as job
                      interviews or employment offers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                    <p className="text-muted-foreground">
                      Our liability is limited to the amount you paid for our services. We are not liable for indirect,
                      incidental, or consequential damages.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy and Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Our collection and use of personal information is governed by our
                    Privacy Policy, which is incorporated into these terms by reference. Please review our Privacy
                    Policy to understand our practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modifications to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                    posting on our website. Your continued use of our services after changes are posted constitutes
                    acceptance of the modified terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Governing Law and Disputes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of New York State. Any disputes arising from these terms or
                    your use of our services will be resolved through binding arbitration in accordance with the rules
                    of the American Arbitration Association.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Email:</strong> legal@novasphere.com
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Career Avenue, Suite 456, New York, NY 10001
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-NOVA
                    </p>
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
