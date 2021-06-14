import { Button, Section, TextInput } from '../../src';
import { PhoneIcon, XIcon, LockClosedIcon } from '@heroicons/react/outline';
import { Form, FormBody, FormHeader } from "../../src/components/form";
import { ChevronLeftIcon } from "@heroicons/react/outline";

export default function FormsPage() {
    return (
        <Section narrow normal={false}>

            <div className='mb-4'>Form header - Form body (Text input - Button)</div>
            <Section normal={false}>
                <Form>
                    <FormHeader className='flex mb-4'>
                        <ChevronLeftIcon className='w-6 h-6 mr-4' />
                        Quay lại
                    </FormHeader>
                    <FormBody title="Xin chào!" description="Chào mừng bạn đến với trang đăng nhập Hayov. Vui lòng nhập số điện thoại">
                        <TextInput LeftIcon={PhoneIcon} inputClassName="rounded-2xl" placeholder="Số điện thoại" />
                        <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form body (Button - Button)</div>
            <Section normal={false}>
                <Form>
                    <FormBody title="Hahalolo" description="Cùng nhau kết nối đến cả thế giới theo cách đơn giản nhất">
                        <Button
                            type="primary"
                            title="ĐĂNG NHẬP VỚI HAHALOLO"
                            as="a"
                            size="lg"
                            className="rounded-2xl mt-6"
                        />
                        <Button title="Đăng nhập ẩn danh" as="a" size="lg" className="rounded-2xl mt-6 hover:text" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form header - Form body (Value text input - Value text input - Button)</div>
            <Section normal={false}>
                <Form>
                    <FormHeader className='flex mb-4'>
                        <ChevronLeftIcon className='w-6 h-6 mr-4' />
                        Quay lại
                    </FormHeader>
                    <FormBody title="Hahalolo" description="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov">
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
                        <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form header - Form body (Value text input - Text input - Button)</div>
            <Section normal={false}>
                <Form>
                    <FormHeader className='flex mb-4'>
                        <ChevronLeftIcon className='w-6 h-6 mr-4' />
                        Quay lại
                    </FormHeader>
                    <FormBody title="Hahalolo" description="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov">
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
                            placeholder="Số điện thoại"
                            LeftIcon={LockClosedIcon}
                            RightIcon={XIcon}
                        />
                        <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form body (Button)</div>
            <Section normal={false}>
                <Form>
                    <FormBody title="Chúc mừng!" description="Bạn đã đăng ký thành công! Bắt đầu kết nối với thế giới nhé!">
                        <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>

            <div className='my-4'>Form body (Text input - Text input - Button)</div>
            <Section normal={false}>
                <Form>
                    <FormBody title="Chúc mừng!" description="Bạn đã đăng ký thành công! Bắt đầu kết nối với thế giới nhé!">
                        <TextInput
                            inputClassName="rounded-2xl"
                            placeholder="Số điện thoại"
                            className="mb-6"
                            LeftIcon={LockClosedIcon}
                            RightIcon={XIcon}
                        />
                        <TextInput
                            inputClassName="rounded-2xl"
                            placeholder="Số điện thoại"
                            LeftIcon={LockClosedIcon}
                            RightIcon={XIcon}
                        />
                        <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormBody>
                </Form>
            </Section>
        </Section>
    );
}
