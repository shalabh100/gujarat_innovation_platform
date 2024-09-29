'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {  BarChart, Users, Zap, Shield, Search, MessageSquare } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/digitalGuj.png"
            alt="Gujarat Innovation Logo"
            className="h-12 w-25"
            width={100}
            height={60}
          />
          <span className="sr-only">Gujarat Innovation Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#audience">
            Audience
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#insights">
            Insights
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empowering Innovation and Research in Gujarat
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  A dynamic platform to streamline research, innovation, IPR, and start-up management for Gujarat's ecosystem.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started Today</Button>
                <Button>Explore the Platform</Button>
                <Button>Connect with Mentors</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              Platform Features Designed to Accelerate Growth
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Built to centralize your research, innovation, and start-up management for optimal efficiency and collaboration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <BarChart className="w-12 h-12 mb-4 text-blue-600" />
                  <h3 className="text-lg font-bold mb-2">Unified Data Repository</h3>
                  <p className="text-gray-600">
                    Centralized database for research, IPR, patents, and start-ups, allowing easy access and detailed filtering.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mb-4 text-blue-600" />
                  <h3 className="text-lg font-bold mb-2">Custom Dashboards</h3>
                  <p className="text-gray-600">
                    Personalized dashboards for researchers, innovators, IPR professionals, policymakers, and investors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 mb-4 text-blue-600" />
                  <h3 className="text-lg font-bold mb-2">Progress Monitoring and Reporting</h3>
                  <p className="text-gray-600">
                    Stay up-to-date with automated milestone tracking, reporting, and performance insights.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 mb-4 text-blue-600" />
                  <h3 className="text-lg font-bold mb-2">IPR Management</h3>
                  <p className="text-gray-600">
                    Effortlessly submit, track, and manage patents and intellectual property, with automated notifications for status updates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <MessageSquare className="w-12 h-12 mb-4 text-blue-600" />
                  <h3 className="text-lg font-bold mb-2">Collaboration Tools</h3>
                  <p className="text-gray-600">
                    Integrated chat, file sharing, video conferencing, and networking features to streamline collaboration between all stakeholders.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Search className="w-12 h-12 mb-4 text-blue-600" />
                  <h3 className="text-lg font-bold mb-2">Advanced Search and Filter Options</h3>
                  <p className="text-gray-600">
                    Powerful search tools for projects, start-ups, and IPR based on industry, funding stage, and status.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="audience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              Catering to Every Stakeholder's Needs
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Whether you are a researcher, innovator, policymaker, or investor, we have a solution designed for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Researchers",
                "Entrepreneurs",
                "Investors",
                "Policymakers",
                "IPR Professionals"
              ].map((audience) => (
                <Card key={audience}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{audience}</h3>
                    <p className="text-gray-600 mb-4">
                      Tailored solutions to meet your specific needs and drive innovation forward.
                    </p>
                    <Button>Join Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              How It Works: A Seamless Experience
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Get started in just a few steps and manage your projects with ease.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Sign Up", description: "Choose your role and create an account." },
                { title: "Access Dashboards", description: "Use tailored tools for project tracking and management." },
                { title: "Submit and Track Progress", description: "Easily submit and monitor your initiatives." },
                { title: "Collaborate and Succeed", description: "Connect with mentors, investors, and researchers." }
              ].map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              Real Success Stories: Empowering Gujarat's Innovators
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Discover how innovators, researchers, and start-ups have achieved growth with our platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Dr. Patel", role: "Researcher", quote: "This platform has revolutionized how we manage our research projects." },
                { name: "Priya Sharma", role: "Start-up Founder", quote: "The mentorship connections have been invaluable for our growth." },
                { name: "Amit Desai", role: "IPR Professional", quote: "Streamlined patent management has saved us countless hours." }
              ].map((testimonial) => (
                <Card key={testimonial.name}>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="insights" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              Data-Driven Insights for Smarter Decisions
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Leverage advanced analytics to monitor progress, optimize resources, and predict trends.
            </p>
            <div className="flex justify-center">
              <Button>Request a Demo</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
              Ready to Drive Research and Innovation Forward?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Join the comprehensive platform designed for researchers, entrepreneurs, and innovators.
            </p>
            <div className="flex justify-center space-x-4">
              <Button>Sign Up Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Gujarat Innovation Platform. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}