import { useState } from "react";
import { Heading2, Heading3, OTPInput, Section } from '../../../src';

export default function OtpInputPage() {
    const [otp, setOtp] = useState("");
    const onChangeOTP = otp => {
        if (otp.length == 6) {
            setOtp(otp);
            return;
        }
        setOtp("");
    };
    return (
        <div className="space-y-4">
            <Heading2>OTP Inputs</Heading2>
            <Heading3>Default</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <OTPInput
                    length={6}
                    className="flex space-x-2 mb-4"
                    onChangeOTP={onChangeOTP}
                />
            </Section>
            <Heading3>Only number</Heading3>
            <Section className="flex items-center justify-center border bg-white">
                <OTPInput length={4} className="flex space-x-2" isNumberInput />
            </Section>
        </div>
    );
}
