import { OTPInput, Section } from '../src';
import { useState } from 'react';

export const OtpSection = () => {
    const [otp, setOtp] = useState('')
    const onChangeOTP = (otp) => {
        if (otp.length == 6) {
            setOtp(otp)
            return
        }
        setOtp('')
    }
    return (
        <Section narrow>
            {otp ? `your otp is: ${otp}` : 'you have not done'}
            <OTPInput length={6} className="flex space-x-2 mb-4" onChangeOTP={onChangeOTP} />

            only number input
            <OTPInput length={4} className="flex space-x-2" isNumberInput />
        </Section>
    )
}
