'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Flag, ArrowLeft, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Mock data for a single message and its replies
const initialMessage = {
    id: 1,
    content: "Today was really tough, but I'm trying to stay positive. This community has been a great source of support for me.",
    timestamp: "2 hours ago",
    likes: 15,
    author: "Anonymous User",
    replies: [
        { id: 1, content: "You're doing great! Remember, it's okay to have tough days.", author: "Supportive Friend", timestamp: "1 hour ago" },
        { id: 2, content: "Sending virtual hugs your way. We're all here for you!", author: "Empathetic Soul", timestamp: "30 minutes ago" },
    ]
}

export default function Page() {
    const [message, setMessage] = useState(initialMessage)
    const [newReply, setNewReply] = useState("")

    const handleLike = () => {
        setMessage(prevMessage => ({
            ...prevMessage,
            likes: prevMessage.likes + 1
        }))
    }

    const handleReply = (e: React.FormEvent) => {
        e.preventDefault()
        if (newReply.trim()) {
            const newReplyObj = {
                id: message.replies.length + 1,
                content: newReply,
                author: "You",
                timestamp: "Just now"
            }
            setMessage(prevMessage => ({
                ...prevMessage,
                replies: [...prevMessage.replies, newReplyObj]
            }))
            setNewReply("")
        }
    }

    return (
        <div className="min-h-screen bg-blue-50 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                <Button variant="ghost" className="mb-4 text-blue-600 dark:text-blue-400" onClick={() => window.history.back()}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Messages
                </Button>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl text-blue-600 dark:text-blue-300">Message Details</CardTitle>
                        <CardDescription>{message.timestamp} by {message.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800 dark:text-gray-200 mb-4">{message.content}</p>
                        <div className="flex items-center space-x-4">
                            <Button variant="outline" size="sm" onClick={handleLike} className="text-blue-600 dark:text-blue-400">
                                <Heart className="w-4 h-4 mr-2" />
                                {message.likes} Likes
                            </Button>
                            <Button variant="outline" size="sm" className="text-blue-600 dark:text-blue-400">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                {message.replies.length} Replies
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 dark:text-red-400">
                                <Flag className="w-4 h-4 mr-2" />
                                Report
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-xl text-blue-600 dark:text-blue-300">Replies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {message.replies.map((reply) => (
                                <div key={reply.id} className="flex space-x-3">
                                    <Avatar>
                                        <AvatarFallback>{reply.author[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{reply.author}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{reply.timestamp}</p>
                                        <p className="mt-1 text-gray-800 dark:text-gray-200">{reply.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl text-blue-600 dark:text-blue-300">Add a Reply</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleReply} className="space-y-4">
                            <Textarea
                                placeholder="Share your supportive thoughts..."
                                value={newReply}
                                onChange={(e) => setNewReply(e.target.value)}
                                className="w-full"
                                rows={4}
                            />
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                                <Send className="w-4 h-4 mr-2" />
                                Send Reply
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}