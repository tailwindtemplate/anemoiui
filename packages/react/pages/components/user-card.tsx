import {Badge, Section, UserCard} from '../../src';
import { avatars, userCard } from '../../const';

export default function UserCardPage() {
    const userCardClassName = 'rounded-full bg-white shadow-md'
    return (
        <div>
            <div>Full width</div>
            <Section className="space-y-2 bg-white">
                <UserCard {...userCard} className={userCardClassName} />
                <UserCard title={userCard.title} className={userCardClassName} />
                <UserCard title={userCard.title} content={userCard.content} className={userCardClassName} />
            </Section>
            <div className="mt-4">Smaller width</div>
            <Section className="bg-white">
                <div className="w-1/3 space-y-2">
                    <UserCard {...userCard} className={userCardClassName} />
                    <UserCard {...userCard} avatarChildren={<Badge count={4} className="absolute top-0 right-0 bg-red-600 text-white" />} className={userCardClassName} />
                    <UserCard avatar={avatars} title={userCard.title} content={userCard.content} time={userCard.time} className={userCardClassName} />
                </div>
            </Section>
        </div>
    )
}
