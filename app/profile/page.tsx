'use client'

import React, { useState } from 'react'
import { User, Bell, MessageSquare, Heart, Shield, Edit2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface User {
    username: string
    email: string
    bio: string
    notificationPreferences: {
        emailNotifications: boolean
        pushNotifications: boolean
    }
    privacySettings: {
        showProfileToOthers: boolean
        allowDirectMessages: boolean
    }
}

export default function ProfilePage() {
    const [user, setUser] = useState<User>({
        username: 'SafeUser123',
        email: 'safeuser123@example.com',
        bio: 'Im here to support and be supported.Together, we can create a safe space for everyone.',
        notificationPreferences: {
            emailNotifications: true,
            pushNotifications: false
        },
        privacySettings: {
            showProfileToOthers: true,
            allowDirectMessages: true
        }
    })

    const [isEditing, setIsEditing] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSwitchChange = (name: string, checked: boolean) => {
        // const [category, field] = name.split('.') as [keyof User, string];

        // // Ensure that the category is an object before trying to spread it
        // if (typeof prevUser[category] === 'object' && prevUser[category] !== null) {
        //     setUser(prevUser => ({
        //         ...prevUser,
        //         [category]: {
        //             ...prevUser[category], // Spread only if it's an object
        //             [field]: checked
        //         }
        //     }));
        // }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsEditing(false)
        // Here you would typically send the updated user data to your backend
        console.log('Updated user data:', user)
    }

    return (
        <div className="min-h-screen bg-blue-50 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-6">Your Profile</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="md:col-span-1">
                        <CardHeader>
                            <CardTitle className="text-xl text-blue-600 dark:text-blue-300">Profile Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center">
                                <Avatar className="w-24 h-24 mb-4">
                                    <AvatarImage src="/placeholder.svg" alt={user.username} />
                                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                                </Avatar>
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{user.username}</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-center">{user.bio}</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-xl text-blue-600 dark:text-blue-300">Account Settings</CardTitle>
                                <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                                    <Edit2 className="w-4 h-4 mr-2" />
                                    {isEditing ? 'Cancel' : 'Edit'}
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Username
                                        </label>
                                        <Input
                                            id="username"
                                            name="username"
                                            value={user.username}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={user.email}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Bio
                                        </label>
                                        <Textarea
                                            id="bio"
                                            name="bio"
                                            value={user.bio}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                            rows={3}
                                        />
                                    </div>
                                    {isEditing && (
                                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                                            Save Changes
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-3">
                        <CardHeader>
                            <CardTitle className="text-xl text-blue-600 dark:text-blue-300">Preferences</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="notifications">
                                <TabsList>
                                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                                </TabsList>
                                <TabsContent value="notifications">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">Email Notifications</span>
                                            </div>
                                            <Switch
                                                checked={user.notificationPreferences.emailNotifications}
                                                onCheckedChange={(checked) => handleSwitchChange('notificationPreferences.emailNotifications', checked)}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">Push Notifications</span>
                                            </div>
                                            <Switch
                                                checked={user.notificationPreferences.pushNotifications}
                                                onCheckedChange={(checked) => handleSwitchChange('notificationPreferences.pushNotifications', checked)}
                                            />
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="privacy">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">Show Profile to Others</span>
                                            </div>
                                            <Switch
                                                checked={user.privacySettings.showProfileToOthers}
                                                onCheckedChange={(checked) => handleSwitchChange('privacySettings.showProfileToOthers', checked)}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <MessageSquare className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">Allow Direct Messages</span>
                                            </div>
                                            <Switch
                                                checked={user.privacySettings.allowDirectMessages}
                                                onCheckedChange={(checked) => handleSwitchChange('privacySettings.allowDirectMessages', checked)}
                                            />
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-3">
                        <CardHeader>
                            <CardTitle className="text-xl text-blue-600 dark:text-blue-300">Your Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                                    <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    <div>
                                        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">127</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Messages Sent</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                                    <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    <div>
                                        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">543</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Likes Given</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                                    <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    <div>
                                        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">30</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Days Active</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}