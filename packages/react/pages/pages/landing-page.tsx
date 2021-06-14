import {Avatar, Section} from "../../src";

export default function LandingPage() {
    return (
        <Section className='h-screen flex justify-between items-center'>
            <Avatar src='https://image.freepik.com/free-vector/digital-device-mockup_53876-89354.jpg' className='w-form-md h-form-md' />
            <Section>
                <div className='text-3xl'>DOWNLOAD OUR APP</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Section>
        </Section>
    )
}
