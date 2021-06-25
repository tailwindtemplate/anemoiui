import {
    LayoutForms,
    Form,
    FormHeader,
    Images,
    InputPhoneLogin,
    InputAccount,
    InputPass, InputUser
} from '../src/components/form-input'
import {ButtonInput, InputPhone, InputKey, } from '../src/elements/form-button'
import {Button, Section} from '../src'

export default function FormInputs () {
    return (
        <Section>
            <LayoutForms className="bg-white">
                <Images />
                <Form title="Hayov" content="Cùng nhau kết nối đến cả thế giới theo cách đơn giản nhất">
                    <Button type="primary" title="ĐĂNG NHẬP VỚI HAHALOLO" as="a" size="lg" className="rounded-2xl mt-6" />
                    <Button type="primary" title="Đăng nhập ẩn danh" as="a" size="lg" className="rounded-2xl mt-6" />
                </Form>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Images />
                <FormHeader title="Xin chào!" content="Chào mừng bạn đến với trang đăng nhập Hayov. Nhập số điện thoại để bắt đầu sử dụng">
                    <InputPhoneLogin firstNumber="+84">
                        <InputPhone />
                    </InputPhoneLogin>
                    <Button type="primary" title="BẮT ĐẦU" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormHeader>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Images />
                <FormHeader title="Nhập mã xác thực" content="Mã xác thực sẽ được gửi đến số điện thoại (+84) 123 456 thông qua tin nhắn SMS">
                    <InputKey />
                    <Button type="primary" title="Yêu cầu gửi lại mã" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormHeader>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Images />
                <FormHeader title="Nhập mã xác thực" content="Mã xác thực sẽ được gửi đến ứng dụng Hayov trên thiết bị khác của bạn, thông quan tài khoản messenger Hayov">
                    <InputKey />
                    <Button type="primary" title="Gửi mã xác thực đến SMS" as="a" size="lg" className="rounded-2xl mt-6" />
                    <Button type="primary" title="Yêu cầu gửi lại mã" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormHeader>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Images />
                <FormHeader title="Hahalolo!" content="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov">
                    <InputAccount />
                    <InputPass />
                    <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormHeader>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Images />
                <FormHeader title="Chào bạn!" content="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov">
                    <InputUser name="Charlie Rhiel Madsen"></InputUser>
                    <InputPass />
                    <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormHeader>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Form title="Chúc mừng!" content="Bạn đã đăng ký thành công! Bắt đầu kết nối với thế giới nhé!">
                    <Button type="primary" title="ĐỒNG Ý" as="a" size="lg" className="rounded-2xl mt-6" />
                </Form>
            </LayoutForms>
        </Section>

    )
}
