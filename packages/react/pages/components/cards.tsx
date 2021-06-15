import { UserIcon, UserRemoveIcon } from '@heroicons/react/outline';
import { CardGround, InfoLine, CardWrapper, Section, CardInfo } from '../../src';
import { cardInfo } from '../../const';

export default function CardsPage() {
  return (
    <div>
      <div>Card Ground</div>
      <Section className="space-y-2">
        <CardGround nameGround="What a lovely name" countGround={12} />
        <CardGround className="w-1/3" nameGround="What a lovely name What a lovely name" countGround={12} email="austinwadeaustinwadeaustinwade@gmail.com" />
        <CardGround className="w-1/3" nameGround="What a lovely name" countGround={12} email="austinwade@gmail.com" />
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

