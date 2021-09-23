import React from 'react'
import { Hero } from '@anemoiui/react/components'
import { TextInput } from '@anemoiui/react/elements'

export default function HomePage(): JSX.Element {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Hero>
                <h2 className="text-2xl uppercase">Anemoi UI Documentation</h2>
                <span className="text-sm text-gray-500">Welcome to our documentation page.</span>
            </Hero>
            <TextInput />
        </div>
    )
}
