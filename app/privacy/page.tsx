"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react"
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

export default function PrivacyPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-muted-foreground mt-2">Last updated: January 1, 2024</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Personal Information</h3>
                    <p className="text-muted-foreground">
                      We collect information you provide directly to us, such as when you create an account, make a
                      purchase, or contact us for support. This may include:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                      <li>Name and contact information</li>
                      <li>Payment information</li>
                      <li>Resume content and career information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Usage Information</h3>
                    <p className="text-muted-foreground">
                      We automatically collect certain information about your use of our services, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                      <li>Device and browser information</li>
                      <li>IP address and location data</li>
                      <li>Usage patterns and preferences</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Provide career tips and relevant content</li>
                    <li>Monitor and analyze trends and usage</li>
                    <li>Detect and prevent fraudulent transactions</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Information Sharing and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, except in
                    the following circumstances:
                  </p>

                  <div>
                    <h3 className="font-semibold mb-2">Service Providers</h3>
                    <p className="text-muted-foreground">
                      We may share information with trusted third-party service providers who assist us in operating our
                      website, conducting business, or serving you.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Legal Requirements</h3>
                    <p className="text-muted-foreground">
                      We may disclose information when required by law or to protect our rights, property, or safety, or
                      that of others.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Business Transfers</h3>
                    <p className="text-muted-foreground">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred as
                      part of that transaction.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    You have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>
                      <strong>Access:</strong> Request a copy of the personal information we hold about you
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your personal information
                    </li>
                    <li>
                      <strong>Portability:</strong> Request transfer of your data to another service
                    </li>
                    <li>
                      <strong>Opt-out:</strong> Unsubscribe from marketing communications
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, please contact us at privacy@novasphere.com.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can
                    control cookie settings through your browser preferences.
                  </p>
                  <p className="text-muted-foreground">
                    For more detailed information about our use of cookies, please see our Cookie Policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review
                    this Privacy Policy periodically.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Email:</strong> privacy@novasphere.com
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
