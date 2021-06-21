import { UserIcon, UserRemoveIcon } from '@heroicons/react/outline';
import { CardGround, InfoLine, CardWrapper, Section, CardInfo, Heading3, UserCard, Badge, Heading2 } from '../../src';
import { avatars, cardInfo, userCard } from '../../const';

export default function CardsPage() {
    return (
        <div className="space-y-4">
            <Heading2>Cards</Heading2>
            <Heading3>Ground Card</Heading3>
            <Section className="space-y-2 bg-white">
                <CardGround name="What a lovely name" avatar={avatars} />
                <CardGround name="What a lovely name" count={12} avatar="https://pbs.twimg.com/profile_images/1355071311433883648/g68FvrJ1_400x400.jpg" />
                <CardGround avatar={[]} className="w-1/3" name="What a lovely name What a lovely name" count={12} email="austinwadeaustinwadeaustinwade@gmail.com" />
                <CardGround avatar={avatars} className="w-1/3" name="What a lovely name" count={12} email="austinwade@gmail.com" />
            </Section>
            <Heading3>Card wrapper & Info line</Heading3>
            <Section className="space-y-2 bg-white">
                <CardWrapper>
                    <InfoLine label="User" Icon={UserIcon} />
                    <InfoLine label="User Name" info="Austin Wade" />
                    <InfoLine label="Gender" info="Man" />
                    <InfoLine label="Delete" Icon={UserRemoveIcon} className="text-red-400 hover:text-red-600 cursor-pointer" />
                </CardWrapper>
                <CardWrapper className="w-1/3">
                    <InfoLine label="User" Icon={UserIcon} />
                    <InfoLine label="User Name" info="Austin Wade Austin Wade Austin Wade" />
                    <InfoLine label="Gender" info="Man" />
                    <InfoLine label="Delete" Icon={UserRemoveIcon} className="text-red-400 hover:text-red-600 cursor-pointer" />
                </CardWrapper>
            </Section>
            <Heading3>Info Card</Heading3>
            <Section className="space-y-2 bg-white">
                <CardInfo data={cardInfo} />
            </Section>
            <Heading3>User Card</Heading3>
            <Section className="space-y-2 bg-white">
                <UserCard {...userCard} />
                <UserCard title={userCard.title} />
                <UserCard title={userCard.title} content={userCard.content} />
                <div className="w-1/3 space-y-2">
                    <UserCard {...userCard} />
                    <UserCard {...userCard} avatarChildren={<Badge size='sm' count={4} className="absolute -top-1 -right-1 bg-red-600 text-white" />} />
                    <UserCard avatar={{ avatar: avatars }} title={userCard.title} content={userCard.content} time={userCard.time} />
                </div>
            </Section>
        </div>
    )
};

