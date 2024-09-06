'use client'

import { useState } from 'react'
import { Heart, MessageCircle, ChevronRight, Search, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'

// Mock data for messages
const initialMessages = [
    { id: 1, content: "Today was challenging, but I'm finding strength in this community.", timestamp: "2 hours ago", likes: 5, replies: 2 },
    { id: 2, content: "I'm grateful for this safe space to express my thoughts.", timestamp: "4 hours ago", likes: 12, replies: 5 },
    { id: 3, content: "Feeling anxious about tomorrow, but I know I'm not alone here.", timestamp: "6 hours ago", likes: 8, replies: 3 },
    { id: 4, content: "To everyone here: you are brave, you are strong, you matter.", timestamp: "1 day ago", likes: 20, replies: 10 },
    { id: 5, content: "Just had a breakthrough in therapy. It gets better, trust the process!", timestamp: "1 day ago", likes: 15, replies: 7 },
]

export default function Page() {
    const [messages, setMessages] = useState(initialMessages)
    const [searchTerm, setSearchTerm] = useState("")

    const handleLike = (id: number) => {
        setMessages(messages.map(msg =>
            msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
        ))
    }

    const filteredMessages = messages.filter(msg =>
        msg.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-blue-50 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-6">Community Messages</h1>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="relative flex-grow max-w-md">
                        <Input
                            type="text"
                            placeholder="Search messages..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Filter className="text-blue-600 dark:text-blue-400" size={18} />
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="recent">Most Recent</SelectItem>
                                <SelectItem value="liked">Most Liked</SelectItem>
                                <SelectItem value="replied">Most Replied</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredMessages.map((message) => (
                        <Card key={message.id} className="bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-800">
                            <CardContent className="p-4">
                                <p className="text-gray-800 dark:text-gray-200 mb-2">{message.content}</p>
                                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                                    <span>{message.timestamp}</span>
                                    <div className="flex items-center space-x-4">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleLike(message.id)}
                                            className="flex items-center space-x-1 text-blue-600 dark:text-blue-400"
                                        >
                                            <Heart className="w-4 h-4" />
                                            <span>{message.likes}</span>
                                        </Button>
                                        <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
                                            <MessageCircle className="w-4 h-4" />
                                            <span>{message.replies}</span>
                                        </div>
                                        <Link href={`/messages/${message.id}`} passHref>
                                            <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">
                                                <ChevronRight className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredMessages.length === 0 && (
                    <Card className="mt-4">
                        <CardContent className="p-4 text-center">
                            <p className="text-gray-600 dark:text-gray-400">No messages found. Try adjusting your search.</p>
                        </CardContent>
                    </Card>
                )}

                <div className="mt-8 text-center">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Load More Messages
                    </Button>
                </div>
            </div>
        </div>
    )
}