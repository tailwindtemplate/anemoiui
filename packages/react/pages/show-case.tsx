import { NextLayout } from '../next-src/next-layout';
import { ModalSection } from '../next-src/modal-section';
import { DropdownSection } from '../next-src/dropdown-section';
import { OtpSection } from '../next-src/otp-section';

const ShowCase = () => {
    return (
        <NextLayout>
            <ModalSection />
            <DropdownSection />
            <OtpSection />
        </NextLayout>
    )
}
export default ShowCase
