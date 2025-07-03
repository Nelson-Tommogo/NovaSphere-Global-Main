"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "@/components/theme-provider"
import { Download, ArrowLeft, Star } from "lucide-react"
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

function ExecutiveResume() {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl mx-auto">
      <div className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">ALEXANDRA MARTINEZ</h1>
        <p className="text-lg text-gray-600">Senior Executive | Strategic Leadership</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          <span>📧 alexandra.martinez@email.com</span>
          <span>📱 +1 (555) 123-4567</span>
          <span>📍 New York, NY</span>
          <span>💼 linkedin.com/in/alexandramartinez</span>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">EXECUTIVE SUMMARY</h2>
        <p className="text-gray-700 leading-relaxed">
          Results-driven senior executive with 15+ years of experience leading high-performance teams and driving
          strategic initiatives. Proven track record of increasing revenue by 40% and expanding market presence across
          North America. Expert in digital transformation, operational excellence, and stakeholder management.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">PROFESSIONAL EXPERIENCE</h2>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-gray-800">Chief Operating Officer</h3>
              <p className="text-gray-600">TechGlobal Solutions Inc.</p>
            </div>
            <span className="text-gray-600 text-sm">2019 - Present</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Led digital transformation initiative resulting in 35% operational efficiency improvement</li>
            <li>Managed $50M annual budget and 200+ person cross-functional team</li>
            <li>Expanded international operations to 5 new markets, generating $15M additional revenue</li>
            <li>Implemented data-driven decision making processes across all departments</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-gray-800">Vice President of Operations</h3>
              <p className="text-gray-600">Innovation Dynamics Corp.</p>
            </div>
            <span className="text-gray-600 text-sm">2015 - 2019</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Streamlined operations reducing costs by 25% while maintaining quality standards</li>
            <li>Built and led high-performing teams across multiple business units</li>
            <li>Developed strategic partnerships resulting in 20% market share growth</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">EDUCATION</h2>
        <div className="mb-2">
          <h3 className="font-bold text-gray-800">Master of Business Administration (MBA)</h3>
          <p className="text-gray-600">Harvard Business School • 2014</p>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">Bachelor of Science in Business Administration</h3>
          <p className="text-gray-600">University of Pennsylvania • 2010</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">KEY SKILLS</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-gray-700">• Strategic Planning</div>
          <div className="text-gray-700">• Team Leadership</div>
          <div className="text-gray-700">• Digital Transformation</div>
          <div className="text-gray-700">• Financial Management</div>
          <div className="text-gray-700">• Market Expansion</div>
          <div className="text-gray-700">• Stakeholder Relations</div>
        </div>
      </section>
    </div>
  )
}

function CreativeResume() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg rounded-lg max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
          JS
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          JORDAN SMITH
        </h1>
        <p className="text-xl text-gray-700 mb-2">Creative Director & Brand Strategist</p>
        <div className="flex justify-center space-x-4 text-sm text-gray-600">
          <span>jordan.smith@email.com</span>
          <span>•</span>
          <span>(555) 987-6543</span>
          <span>•</span>
          <span>Los Angeles, CA</span>
        </div>
      </div>

      <section className="mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Creative Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Award-winning creative director with 8+ years of experience crafting compelling brand narratives and visual
            identities. Passionate about merging artistic vision with strategic thinking to create memorable experiences
            that drive engagement and growth.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-6">Experience Highlights</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-600">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Senior Creative Director</h3>
                <p className="text-purple-600 font-medium">Pixel Perfect Agency</p>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">2020 - Present</span>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">▸</span>
                Led rebranding campaigns for 15+ Fortune 500 companies
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">▸</span>
                Increased client engagement rates by 60% through innovative design solutions
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">▸</span>
                Managed creative team of 12 designers and copywriters
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-pink-500">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Art Director</h3>
                <p className="text-pink-600 font-medium">Creative Minds Studio</p>
              </div>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">2017 - 2020</span>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">▸</span>
                Developed visual identity systems for emerging tech startups
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">▸</span>
                Won 3 industry awards for innovative campaign designs
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-purple-600 mb-4">Skills & Expertise</h2>
          <div className="space-y-2">
            {[
              "Brand Strategy",
              "Visual Design",
              "Adobe Creative Suite",
              "UI/UX Design",
              "Typography",
              "Photography",
            ].map((skill) => (
              <div key={skill} className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-purple-600 mb-4">Education & Awards</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-gray-800">BFA in Graphic Design</h3>
              <p className="text-gray-600">Art Center College of Design</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Awards</h3>
              <p className="text-gray-600">• Cannes Lions Gold (2022)</p>
              <p className="text-gray-600">• D&AD Pencil Winner (2021)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function TechResume() {
  return (
    <div className="bg-gray-50 p-8 shadow-lg rounded-lg max-w-2xl mx-auto">
      <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold mb-2">ALEX CHEN</h1>
        <p className="text-xl text-gray-300 mb-4">Senior Software Engineer | Full Stack Developer</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>📧 alex.chen@email.com</div>
          <div>📱 (555) 456-7890</div>
          <div>🌐 github.com/alexchen</div>
          <div>📍 San Francisco, CA</div>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3">TECHNICAL SUMMARY</h2>
        <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-lg">
          Experienced full-stack developer with 6+ years building scalable web applications and microservices. Expertise
          in modern JavaScript frameworks, cloud architecture, and DevOps practices. Passionate about clean code,
          performance optimization, and mentoring junior developers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3">TECHNICAL SKILLS</h2>
        <div className="bg-white p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "Python", "Java", "Go"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "Next.js", "Django"].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "Redis", "MySQL"].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3">
          PROFESSIONAL EXPERIENCE
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-gray-800">Senior Software Engineer</h3>
                <p className="text-blue-600 font-medium">TechFlow Inc.</p>
              </div>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm">2021 - Present</span>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Architected and built microservices handling 1M+ daily requests</li>
              <li>• Reduced application load time by 40% through performance optimization</li>
              <li>• Led migration from monolith to microservices architecture</li>
              <li>• Mentored 5 junior developers and conducted code reviews</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-gray-800">Full Stack Developer</h3>
                <p className="text-green-600 font-medium">StartupXYZ</p>
              </div>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm">2019 - 2021</span>
            </div>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Built responsive web applications using React and Node.js</li>
              <li>• Implemented real-time features using WebSocket connections</li>
              <li>• Designed and optimized database schemas for high performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3">KEY PROJECTS</h2>
        <div className="bg-white p-4 rounded-lg">
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-gray-800">E-commerce Platform</h3>
              <p className="text-gray-600 text-sm">
                Built scalable e-commerce solution processing $2M+ monthly transactions
              </p>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">PostgreSQL</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Real-time Analytics Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Developed real-time data visualization platform for business intelligence
              </p>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Vue.js</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Redis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-600 pl-3">EDUCATION</h2>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-bold text-gray-800">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600">University of California, Berkeley • 2018</p>
        </div>
      </section>
    </div>
  )
}

export default function SamplesPage() {
  const [selectedSample, setSelectedSample] = useState("executive")

  const samples = [
    { id: "executive", name: "Executive Resume", category: "Executive", component: ExecutiveResume },
    { id: "creative", name: "Creative Resume", category: "Creative", component: CreativeResume },
    { id: "tech", name: "Tech Resume", category: "Technology", component: TechResume },
  ]

  const currentSample = samples.find((s) => s.id === selectedSample)

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Resume Samples</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our professionally crafted resume samples to see the quality and design of our templates.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {samples.map((sample) => (
              <Button
                key={sample.id}
                variant={selectedSample === sample.id ? "default" : "outline"}
                onClick={() => setSelectedSample(sample.id)}
                className="flex items-center gap-2"
              >
                {sample.name}
                <Badge variant="secondary" className="ml-2">
                  {sample.category}
                </Badge>
              </Button>
            ))}
          </div>

          <div className="mb-8">{currentSample && <currentSample.component />}</div>

          <div className="text-center">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Like what you see?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Get access to this template and customize it with your own information.
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Buy Template
                  </Button>
                  <Link href="/templates" className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      View All Templates
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
