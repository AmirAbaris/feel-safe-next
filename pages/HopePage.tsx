'use client'

import { useState } from 'react'
import { Heart, Send, Shield, Users, BookOpen, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from '../components/hero-section'

const initialMessages = [
  { id: 1, content: "Today was challenging, but I'm finding strength in this community.", timestamp: "2 hours ago", likes: 5 },
  { id: 2, content: "I'm grateful for this safe space to express my thoughts.", timestamp: "4 hours ago", likes: 12 },
  { id: 3, content: "Feeling anxious about tomorrow, but I know I'm not alone here.", timestamp: "6 hours ago", likes: 8 },
  { id: 4, content: "To everyone here: you are brave, you are strong, you matter.", timestamp: "1 day ago", likes: 20 },
]

const featuredStories = [
  { id: 1, title: "Finding Hope", excerpt: "How the Feel Safe community helped me overcome my darkest times..." },
  { id: 2, title: "A Journey to Self-Love", excerpt: "My path to self-acceptance and how this platform played a crucial role..." },
  { id: 3, title: "Connecting Hearts", excerpt: "The power of anonymous support and how it changed my perspective..." },
]

const communityGuidelines = [
  "Be kind and respectful to all members",
  "Maintain anonymity - don't share personal identifying information",
  "Offer support, not medical advice",
  "Report any concerning content to moderators",
  "Take breaks when needed - your mental health comes first",
]

export function HomePage() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleLike = (id: number) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        content: newMessage,
        timestamp: "Just now",
        likes: 0
      }
      setMessages([newMsg, ...messages])
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900">
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6 flex items-center">
            <BarChart className="w-6 h-6 mr-2" />
            Community Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-blue-600 dark:text-blue-300">10,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-400">Active Members</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-blue-600 dark:text-blue-300">50,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-400">Supportive Messages</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-blue-600 dark:text-blue-300">98%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 dark:text-gray-400">Users Feel Supported</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2" />
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredStories.map((story) => (
              <Card key={story.id}>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600 dark:text-blue-300">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{story.excerpt}</p>
                  <Button variant="link" className="mt-2 text-blue-600 dark:text-blue-400">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Community Guidelines
          </h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                {communityGuidelines.map((guideline, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">{guideline}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6 flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          Safe Space Messages
        </h2>

        <div className="space-y-4 mb-8">
          {messages.map((message) => (
            <Card key={message.id} className="bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <p className="text-gray-800 dark:text-gray-200 mb-2">{message.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{message.timestamp}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(message.id)}
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400"
                  >
                    <Heart className="w-4 h-4" />
                    <span>{message.likes}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            type="text"
            placeholder="Share your thoughts safely..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow"
            aria-label="Enter your message"
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Send className="w-4 h-4 mr-2" />
            Share Safely
          </Button>
        </form>
      </div>
    </div>
  )
}