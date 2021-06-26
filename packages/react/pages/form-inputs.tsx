import { Button, OTPInput, PhoneInput, PhoneZone, TextInput } from '../src'
import React, {useState} from 'react'
import {
    Form,
    Images,
    LayoutForms,
    InputUser,
    FormInput
} from '../src/components/form-input'
import { LockClosedIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";

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
        <div>
            <section>
                <LayoutForms className="bg-white">
                    <Images />
                    <Form title="Hayov" content="Cùng nhau kết nối đến cả thế giới theo cách đơn giản nhất">
                        <Button type="primary" title="ĐĂNG NHẬP VỚI HAHALOLO" as="a" size="lg" className="rounded-2xl mt-6" />
                        <Button type="primary" title="Đăng nhập ẩn danh" as="a" size="lg" className="rounded-2xl mt-6" />
                    </Form>
                </LayoutForms>

                <LayoutForms className="bg-white">
                    <Images />
                    <FormInput title="Xin chào!" content="Chào mừng bạn đến với trang đăng nhập Hayov. Nhập số điện thoại để bắt đầu sử dụng">
                        <PhoneInput className="border border-gray-2 rounded-2xl p-4"
                                    placeholder="Số điện thoại" zone={{ onSelect: setZone, data: phoneZone, value: zone }} onChange={setPhone} phone={phone} />
                        <Button type="primary" title="BẮT ĐẦU" as="a" size="lg" className="rounded-2xl mt-6" />
                    </FormInput>
                </LayoutForms>
            </section>

            <LayoutForms className="bg-white">
                <Images />
                <FormInput title="Nhập mã xác thực" content="Mã xác thực sẽ được gửi đến số điện thoại (+84) 123 456 thông qua tin nhắn SMS">
                    <OTPInput
                        length={6}
                        className="flex justify-center space-x-8"
                        onChangeOTP={onChangeOTP}
                    />
                    <Button type="primary" title="Yêu cầu gửi lại mã" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormInput>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Images />
                <FormInput title="Nhập mã xác thực" content="Mã xác thực sẽ được gửi đến ứng dụng Hayov trên thiết bị khác của bạn, thông quan tài khoản messenger Hayov">
                    <OTPInput
                        length={6}
                        className="flex justify-center space-x-8"
                        onChangeOTP={onChangeOTP}
                    />
                    <Button type="primary" title="Gửi mã xác thực đến SMS" as="a" size="lg" className="rounded-2xl mt-6" />
                    <Button type="primary" title="Yêu cầu gửi lại mã" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormInput>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Images />
                <FormInput title="Hahalolo!" content="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov">
                    <TextInput className="border border-gray-2 text-base rounded-2xl flex justify-between p-4"
                               LeftIcon={PhoneIcon} inputClassName="rounded-2xl" placeholder="Email hoặc số điện thoại" />
                    <TextInput
                        inputClassName="rounded-2xl"
                        placeholder="Mật khẩu"
                        type="password"
                        className="border border-gray-2 text-base rounded-2xl flex justify-between p-4"
                        LeftIcon={LockClosedIcon}
                    />
                    <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormInput>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Images />
                <FormInput title="Chào bạn!" content="Đăng nhập vào tài khoản Hahalolo để tham gia trải nghiệm Hayov">
                    <InputUser name="Charlie Rhiel Madsen"></InputUser>
                    <TextInput
                        inputClassName="rounded-2xl"
                        placeholder="Mật khẩu"
                        type="password"
                        className="border border-gray-2 text-base rounded-2xl flex justify-between p-4 mb-6"
                        LeftIcon={LockClosedIcon}
                        RightIcon={XIcon}
                    />
                    <Button type="primary" title="ĐĂNG NHẬP" as="a" size="lg" className="rounded-2xl mt-6" />
                </FormInput>
            </LayoutForms>

            <LayoutForms className="bg-white">
                <Form title="Chúc mừng!" content="Bạn đã đăng ký thành công! Bắt đầu kết nối với thế giới nhé!">
                    <Button type="primary" title="ĐỒNG Ý" as="a" size="lg" className="rounded-2xl mt-6" />
                </Form>
            </LayoutForms>

        </div>
    )
}
