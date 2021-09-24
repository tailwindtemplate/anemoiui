import React from 'react'
import { Card, List } from '@anemoiui/react/components'
import { Button } from '@anemoiui/react/elements'

export default function HomePage(): JSX.Element {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center space-y-8">
            <Card className="space-y-4">
                <div className="block">
                    <h2 className="text-2xl uppercase">Anemoi UI Documentation</h2>
                    <span className="text-sm text-gray-500">Welcome to our documentation page.</span>
                </div>
            </Card>
            <List.Unordered className="flex flex-row space-x-4">
                <List.Item>
                    <Button.Link href="#1">Documentation</Button.Link>
                </List.Item>
                <List.Item>
                    <Button.Link href="#2">Get Started</Button.Link>
                </List.Item>
            </List.Unordered>
        </div>
    )
}
