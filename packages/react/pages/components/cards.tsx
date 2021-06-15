import { UserIcon, UserRemoveIcon } from '@heroicons/react/outline';
import { CardGround, InfoLine, CardWrapper, Section, CardInfo } from '../../src';
import { avatars, cardInfo } from '../../const';

export default function CardsPage() {
  return (
    <div>
      <div>Card Ground</div>
      <Section className="space-y-2">
        <CardGround name="What a lovely name" avatar={avatars} />
        <CardGround name="What a lovely name" count={12} avatar="https://pbs.twimg.com/profile_images/1355071311433883648/g68FvrJ1_400x400.jpg" />
        <CardGround avatar={[]} className="w-1/3" name="What a lovely name What a lovely name" count={12} email="austinwadeaustinwadeaustinwade@gmail.com" />
        <CardGround avatar={avatars} className="w-1/3" name="What a lovely name" count={12} email="austinwade@gmail.com" />
      </Section>
      <div className="mt-4">Card Wrapper & Info line</div>
      <Section className="space-y-2">
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
      <div className="mt-4">Card Info</div>
      <Section className="space-y-2">
          <CardInfo data={cardInfo} />
      </Section>
    </div>
  )
};

