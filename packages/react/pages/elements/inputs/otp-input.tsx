import { useState } from "react";
import { OTPInput, Section } from "../../../src";

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
    <div className="p-2">
      <div className="text-3xl my-8">OTP Inputs</div>
      Default
      <Section className="mb-8 flex items-center justify-center border">
        {/*{otp ? `your otp is: ${otp}` : "you have not done"}*/}

        <OTPInput
          length={6}
          className="flex space-x-2 mb-4"
          onChangeOTP={onChangeOTP}
        />
      </Section>
      Only number
      <Section className="flex items-center justify-center border">
        <OTPInput length={4} className="flex space-x-2" isNumberInput />
      </Section>
    </div>
  );
}
