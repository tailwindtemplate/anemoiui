import { Toggle } from '../dist';
import { useState } from 'react';

export default function Home() {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <Toggle toggle={toggle} setToggle={setToggle} className="bg-secondary-400 !bg-primary-400" />
        </div>
    )
}
