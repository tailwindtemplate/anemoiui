import { Button, Section } from '../../src';
import { Form } from '../../src/components/form';
import TextInput from '../../src/elements/inputs/text-input';
import { PhoneIcon, XIcon, LockClosedIcon } from '@heroicons/react/outline';

export default function FormsPage() {
    return (
        <Section narrow>

            <div className='ml-4'>Text input - Button</div>
            <Section>
                <Form
                    title="Xin chào!"
                    description="Chào mừng bạn đến với trang đăng nhập Hayov. Vui lòng nhập số điện thoại"
                    hasHeader
                    className="mb-6"
                >
                    <TextInput LeftIcon={PhoneIcon} inputClassName="rounded-2xl" placeholder="Số điện thoại" />
                    <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                </Form>
            </Section>

            <div className='ml-4'>Button - Button</div>
            <Section>
                <Form
                    title="Hahalolo"
                    description="Cùng nhau kết nối đến cả thế giới theo cách đơn giản nhất"
                    className="mb-6"
                >
                    <Button
                        type="primary"
                        title="ĐĂNG NHẬP VỚI HAHALOLO"
                        as="a"
                        size="lg"
                        className="rounded-2xl mt-6"
                    />
                    <Button title="Đăng nhập ẩn danh" as="a" size="lg" className="rounded-2xl mt-6 hover:text" />
                </Form>
            </Section>

            <div className='ml-4'>Value text input - Value text input - Button</div>
            <Section>
                <Form
                    title="Hahalolo"
                    description="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov"
                    className="mb-6"
                >
                    <TextInput
                        inputClassName="rounded-2xl"
                        placeholder="Số điện thoại"
                        className="mb-6"
                        value="Charlie Rhiel Madsen"
                        src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/12/photo-1-16181985608211245161374.jpg"
                        RightIcon={XIcon}
                    />
                    <TextInput
                        inputClassName="rounded-2xl"
                        placeholder="Số điện thoại"
                        value="Roger Lipshutz"
                        src="https://vtv1.mediacdn.vn/zoom/550_339/2021/6/1/1622547010-202106101-iu-16225548621312006941026.jpg"
                        RightIcon={XIcon}
                    />
                    <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                </Form>
            </Section>

            <div className='ml-4'>Value text input - Text input - Button</div>
            <Section>
                <Form
                    title="Hahalolo"
                    description="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov"
                    className="mb-6"
                >
                    <TextInput
                        inputClassName="rounded-2xl"
                        placeholder="Số điện thoại"
                        className="mb-6"
                        value="Charlie Rhiel Madsen"
                        src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/12/photo-1-16181985608211245161374.jpg"
                        RightIcon={XIcon}
                    />
                    <TextInput
                        inputClassName="rounded-2xl"
                        placeholder="Số điện thoại"
                        LeftIcon={LockClosedIcon}
                        RightIcon={XIcon}
                    />
                    <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                </Form>
            </Section>

            <div className='ml-4'>Button</div>
            <Section>
                <Form
                    title="Chúc mừng!"
                    description="Bạn đã đăng ký thành công! Bắt đầu kết nối với thế giới nhé!"
                    className="mb-6"
                >
                    <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                </Form>
            </Section>

            <div className='ml-4'>Text input - Text input</div>
            <Section>
                <Form
                    title="Chúc mừng!"
                    description="Bạn đã đăng ký thành công! Bắt đầu kết nối với thế giới nhé!"
                    className="mb-6"
                >
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
                </Form>
            </Section>
        </Section>
    );
}
