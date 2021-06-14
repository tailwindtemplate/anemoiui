import Channel from "./channel"
import ChannelContextProvider from './props-card'

export default function forms () {
    return (
        <div>
            <ChannelContextProvider>
                <Channel/>
            </ChannelContextProvider>
        </div>

    )
}
