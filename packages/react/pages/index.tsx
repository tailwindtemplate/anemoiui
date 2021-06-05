import Toggle from '../src/elements/inputs/toggle';
import React, { useState } from 'react';
import { TabsHome } from '../src'

export default function Home() {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <TabsHome />
        </div>
    )
}
