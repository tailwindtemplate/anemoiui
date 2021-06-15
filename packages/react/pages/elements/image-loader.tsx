import { Badge, ImageLoader, Section } from '../../src';
import { UserGroupIcon, UserIcon } from '@heroicons/react/outline';

export default function ImageLoaderPage() {
    return (
        <div>
            <Section>
                <div>Default - without src</div>
                <ImageLoader src="" />
            </Section>
            <Section>
                <div>Default - with src</div>
                <ImageLoader src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg" />
            </Section>
            <Section className="space-y-2">
                <div>Custom loading component</div>
                <ImageLoader src="" LoadIcon={UserIcon} />
                <ImageLoader src="" LoadIcon={UserGroupIcon} LoadIconClassName="w-12 h-12 text-gray-400" />
                <ImageLoader src="" LoadIcon={() => <div className="m-4 text-lg">Image</div>} LoadIconClassName="w-12 h-12 text-gray-400" />
            </Section>
            <Section className="space-y-2">
                <div>Custom Image Size</div>
                <ImageLoader
                    src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg"
                    className="w-40 bg-gray-100"
                />
                <ImageLoader
                    src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg"
                    className="h-40 bg-no-repeat bg-gray-100"
                />
                <ImageLoader
                    src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg"
                    className="w-56 h-56 bg-no-repeat bg-gray-100"
                />
            </Section>
            <Section className="space-y-2">
                <div>Image style Cover</div>
                <ImageLoader
                    src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg"
                    className="h-40 bg-no-repeat"
                    imageStyle="cover"
                />
                <ImageLoader
                    src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg"
                    className="w-56 h-56 bg-no-repeat"
                    imageStyle="cover"
                />
            </Section>
            <Section className="space-y-2">
                <div>Custom Class</div>
                <ImageLoader
                    src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg"
                    className="w-40 h-40 bg-no-repeat border-2 border-primary-400 rounded-full"
                    imageStyle="cover"
                />
                <ImageLoader
                    src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg"
                    className="w-60 h-40 bg-no-repeat border-2 border-primary-400 rounded-lg"
                    imageStyle="cover"
                />
            </Section>
            <Section className="space-y-2">
                <div>With Children</div>
                <ImageLoader
                    src="https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg"
                    className="w-40 h-40 bg-no-repeat border-2 border-primary-400 rounded-full relative"
                    imageStyle="cover"
                >
                    <Badge count={22} className="bg-yellow-400 absolute py-3 px-5 bottom-2 right-2" />
                </ImageLoader>
            </Section>
        </div>
    )
}
