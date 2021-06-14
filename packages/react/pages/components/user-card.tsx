import {Badge, Section, UserCard} from '../../src';
import { avatars, userCard } from '../../const';

export default function UserCardPage() {
    return (
        <div>
            <Section className="space-y-2">
                <UserCard {...userCard} />
                <div className="w-1/3 space-y-2">
                    <UserCard title={userCard.title} />
                    <UserCard title={userCard.title} content={userCard.content} />
                    <UserCard {...userCard} />
                    <UserCard {...userCard} avatarChildren={<Badge count={4} className="absolute top-0 right-0 bg-red-600 text-white" />} />
                    <UserCard avatar={avatars} title={userCard.title} content={userCard.content} time={userCard.time} />
                </div>
            </Section>
        </div>
    )
}
