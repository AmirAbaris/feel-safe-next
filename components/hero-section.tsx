'use client'

import { useState, useEffect } from 'react'
import { Globe, ArrowRight, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"

const supportiveMessages = [
  "You're in a safe space here.",
  "Your feelings are valid and important.",
  "It's okay to not be okay. We're here for you.",
  "You matter more than you know.",
  "Take it one step at a time. You've got this.",
]

export function HeroSection() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const randomMessage = supportiveMessages[Math.floor(Math.random() * supportiveMessages.length)]
    setMessage(randomMessage)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-600 dark:text-blue-300">
              Feel Safe!
            </h1>
            <p className="text-xl font-semibold text-blue-500 dark:text-blue-400">
              Your Anonymous Safe Haven
            </p>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Express yourself freely and connect with others in a supportive, anonymous environment. You're not alone.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Global Safe Space</span>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Share Safely
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="pt-8">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900">
              <Shield className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}