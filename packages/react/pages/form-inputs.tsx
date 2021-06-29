// @ts-ignore
import React, {useState} from 'react'
import { Form, Button, FormBody, FormHeader, OTPInput, PhoneInput, PhoneZone, Section, TextInput } from '../src'
import { Images, UserName } from '../src/components/form-login'
import { ChevronLeftIcon, EyeIcon, LockClosedIcon, PhoneIcon } from '@heroicons/react/outline'

const phoneZone: PhoneZone[] = [
    { id: 'vn', title: '+84' },
    { id: 'en', title: '+001' }
]

export default function FormInputs () {
    const [zone, setZone] = useState(phoneZone[0])
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState("");
    const onChangeOTP = otp => {
        if (otp.length == 6) {
            setOtp(otp);
            return;
        }
        setOtp("");
    };
    return (
        <div className="space-y-6">
            <Section className="bg-white flex items-center space-x-4">
                <Images />
                <Form>
                    <FormBody
                        className="
                        text-primary-500
                        text-5xl font-bold font-body
                        space-y-6
                        "
                        title="Hayov" description="Cùng nhau kết nối đến cả thế giới theo cách đơn giản nhất">
                        <Button className="rounded-3xl text-center"  type="primary" title="ĐĂNG NHẬP VỚI HAHALOLO" as="a" size="sm"/>
                        <Button className="rounded-3xl text-center" type="primary" title="Đăng nhập ẩn danh" as="a" size="lg" />
                    </FormBody>
                </Form>
            </Section>

            <Section className="bg-white flex items-center space-x-4">
                <Images />
                <Form>
                    <FormHeader
                            className="text-gray-500 flex">
                        <ChevronLeftIcon className="w-6 h-6 mr-1 mb-6" />
                        Quay lại
                    </FormHeader>
                    <FormBody
                        className="
                            text-primary-500
                            text-5xl font-bold font-body
                        "
                        title="Xin chào!" description="Chào mừng bạn đến với trang đăng nhập Hayov. Nhập số điện thoại để bắt đầu sử dụng"
                    />
                    <PhoneInput
                        className="border border-gray-2 rounded-3xl p-4"
                        placeholder="Số điện thoại" zone={{ onSelect: setZone, data: phoneZone, value: zone }} onChange={setPhone} phone={phone}
                    />
                    <Button className="rounded-3xl mt-6 text-center" type="primary" title="BẮT ĐẦU" as="a" size="lg" />
                </Form>
            </Section>

            <Section className="bg-white flex items-center space-x-4">
                <Images />
                <Form className="">
                    <FormHeader
                        className="text-gray-500 flex">
                        <ChevronLeftIcon className="w-6 h-6 mr-1 mb-6" />
                        Quay lại
                    </FormHeader>
                    <FormBody
                        className="
                            text-primary-500
                            text-5xl font-bold font-body
                            space-y-6
                        "
                        title="Nhập mã xác thực"
                        description="Mã xác thực sẽ được gửi đến số điện thoại (+84) 123 456 thông qua tin nhắn SMS">
                        <OTPInput
                            length={6}
                            className="flex items-center justify-center space-x-2 text-xl font-bold text-gray-900"
                            onChangeOTP={onChangeOTP}
                            isNumberInput
                        />
                        <Button className="rounded-3xl text-center" type="primary" title="Yêu cầu gửi lại mã" as="a" size="lg"  />
                    </FormBody>
                </Form>
            </Section>

            <Section className="bg-white flex items-center space-x-4">
                <Images />
                <Form className="">
                    <FormHeader
                        className="text-gray-500 flex">
                        <ChevronLeftIcon className="w-6 h-6 mr-1 mb-4" />
                        Quay lại
                    </FormHeader>
                    <FormBody
                        className="
                            text-primary-500
                            text-5xl font-bold font-body
                            space-y-6
                        "
                        title="Nhập mã xác thực"
                        description="Mã xác thực sẽ được gửi đến ứng dụng Hayov trên thiết bị khác của bạn, thông quan tài khoản messenger Hayov">
                        <OTPInput
                            length={6}
                            className="flex  items-center justify-center space-x-2 text-xl font-bold text-gray-900"
                            onChangeOTP={onChangeOTP}
                            isNumberInput
                        />
                        <Button className="rounded-3xl text-center" type="primary" title="Gửi mã xác thực đến SMS" as="a" size="lg" />
                        <Button className="rounded-3xl text-center" type="primary" title="Yêu cầu gửi lại mã" as="a" size="lg"  />
                    </FormBody>
                </Form>
            </Section>


            <Section className="bg-white flex items-center space-x-4">
                <Images />
                <Form className="">
                    <FormHeader
                        className="text-gray-500 flex">
                        <ChevronLeftIcon className="w-6 h-6 mr-1 mb-4" />
                        Quay lại
                    </FormHeader>
                    <FormBody
                        className="
                            text-primary-500
                            text-5xl font-bold font-body
                            space-y-6
                        "
                        title="Hahalolo!"
                        description="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov">
                        <TextInput
                            className="border border-gray-2 text-xl text-gray-600 rounded-3xl p-4"
                            LeftIcon={PhoneIcon} placeholder="Email hoặc số điện thoại"
                        />
                        <TextInput
                            inputClassName="rounded-2xl text-gray-600"
                            placeholder="Mật khẩu"
                            type="password"
                            className="text-gray-600 border border-gray-2 text-base rounded-3xl flex justify-between p-4"
                            LeftIcon={LockClosedIcon}
                        />
                        <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-3xl" />
                    </FormBody>
                </Form>
            </Section>

            <Section className="bg-white flex items-center space-x-4">
                <Images />
                <Form className="">
                    <FormHeader
                        className="text-gray-500 flex">
                        <ChevronLeftIcon className="w-6 h-6 mr-1 mb-4" />
                        Quay lại
                    </FormHeader>
                    <FormBody
                        className="
                            text-primary-500
                            text-5xl font-bold font-body
                            space-y-6
                        "
                        title="Chào bạn!"
                        description="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov">
                        <UserName name="Charlie Rhiel Madsen"></UserName>
                        <TextInput
                            inputClassName="text-gray-600"
                            placeholder="Mật khẩu"
                            type="password"
                            className="text-gray-600 border border-gray-2 text-base rounded-3xl flex justify-between p-4"
                            LeftIcon={LockClosedIcon}
                            RightIcon={EyeIcon}
                        />
                        <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-3xl" />
                    </FormBody>
                </Form>
            </Section>

            <Section className="bg-white flex justify-center space-x-4">
                <Form>
                    <FormBody
                        className="
                        text-primary-500
                        text-5xl font-bold font-body
                        "
                        title="Chúc mừng!" description="Bạn đã đăng ký thành công! Bắt đầu kết nối với thế giới nhé!">
                        <Button type="primary" title="ĐỒNG Ý" as="a" size="lg" className="rounded-3xl mt-6" />
                    </FormBody>
                </Form>
            </Section>


        </div>
    )
}
