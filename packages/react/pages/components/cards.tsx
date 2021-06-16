import { Section } from '../../src';
import { Avatar, Status } from "../../src";
import { Channel } from '../../src/components/card';
import { CardUserItems } from '../../const';

export default function Card () {
    return (
        <div>Card Channels:
            <Section className="bg-gray-100 h-screen flex flex-row justify-center items-start">
                <Avatar isRounded size="sm" type="src" rounded-full src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg" />
                <div className="flex flex-col">
                    <Channel title={CardUserItems.title} />
                    <Channel content={CardUserItems.content} time={CardUserItems.time} />
                </div>
            </Section>
        </div>
    )
}
