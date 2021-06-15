import { Button, Section, TextInput, Form, FormBody, FormHeader } from '../../src';
import { PhoneIcon, XIcon, LockClosedIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from "@heroicons/react/outline";

export default function FormsPage() {
    return (
        <Section narrow normal={false}>

            <div className='mb-4'>Form header - Form body (Text input - Button)</div>
            <Section normal={false} className="bg-white flex justify-center p-4">
                <Form>
                    <FormHeader className='flex mb-4'>
                        <ChevronLeftIcon className='w-6 h-6 mr-4' />
                        Return
                    </FormHeader>
                    <FormBody title="Hi there!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit">
                        <TextInput LeftIcon={PhoneIcon} inputClassName="rounded-2xl" placeholder="Your phone" />
                        <Button type="primary" title="Login" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form body (Button - Button)</div>
            <Section normal={false} className="bg-white flex justify-center p-4">
                <Form>
                    <FormBody title="WELCOME" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <Button type="primary" title="Login" as="a" size="lg" className="rounded-2xl mt-6" />
                        <Button title="Register" as="a" size="lg" className="rounded-2xl mt-6 hover:text" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form header - Form body (Value text input - Value text input - Button)</div>
            <Section normal={false} className="bg-white flex justify-center p-4">
                <Form>
                    <FormHeader className='flex mb-4'>
                        <ChevronLeftIcon className='w-6 h-6 mr-4' />
                        Return
                    </FormHeader>
                    <FormBody title="Login with" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <TextInput
                            inputClassName="rounded-2xl"
                            className="mb-6"
                            value="Charlie Rhiel Madsen"
                            src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/12/photo-1-16181985608211245161374.jpg"
                            RightIcon={XIcon}
                            readOnly
                        />
                        <TextInput
                            inputClassName="rounded-2xl"
                            value="Roger Lipshutz"
                            src="https://vtv1.mediacdn.vn/zoom/550_339/2021/6/1/1622547010-202106101-iu-16225548621312006941026.jpg"
                            RightIcon={XIcon}
                            readOnly
                        />
                        <Button type="primary" title="Login" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form header - Form body (Value text input - Text input - Button)</div>
            <Section normal={false} className="bg-white flex justify-center p-4">
                <Form>
                    <FormHeader className='flex mb-4'>
                        <ChevronLeftIcon className='w-6 h-6 mr-4' />
                        Return
                    </FormHeader>
                    <FormBody title="Login" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <TextInput
                            inputClassName="rounded-2xl"
                            className="mb-6"
                            value="Charlie Rhiel Madsen"
                            src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/12/photo-1-16181985608211245161374.jpg"
                            RightIcon={XIcon}
                            readOnly
                        />
                        <TextInput
                            inputClassName="rounded-2xl"
                            placeholder="Your phone"
                            LeftIcon={LockClosedIcon}
                            RightIcon={XIcon}
                        />
                        <Button type="primary" title="Send OTP" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form body (Button)</div>
            <Section normal={false} className="bg-white flex justify-center p-4">
                <Form>
                    <FormBody title="Congratulation!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <Button type="primary" title="Start!" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form body (Text input - Text input - Button)</div>
            <Section normal={false} className="bg-white flex justify-center p-4">
                <Form>
                    <FormBody title="Congratulation!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <TextInput
                            inputClassName="rounded-2xl"
                            placeholder="Password"
                            type="password"
                            className="mb-6"
                            LeftIcon={LockClosedIcon}
                            RightIcon={XIcon}
                        />
                        <TextInput
                            inputClassName="rounded-2xl"
                            type="password"
                            placeholder="Retype Password"
                            LeftIcon={LockClosedIcon}
                            RightIcon={XIcon}
                        />
                        <Button type="primary" title="Finish!" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>
        </Section>
    );
}
