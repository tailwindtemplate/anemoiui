import {LayoutForms, Form, FormInput, Images } from '../src/components/form-input'
import {ButtonInput, InputPhone} from '../src/elements/select'

export default function FormInputs () {
    return (
        <LayoutForms className="bg-white">
            <Images />
            <Form header="Quay lại" title="Xin chào!" content="Chào mừng bạn đến với trang đăng nhập Hayov. Nhập số điện thoại để bắt đầu sử dụng">
                <FormInput firstNumber="+84">
                    <InputPhone/>
                </FormInput>
                <ButtonInput>
                    BẮT ĐẦU
                </ButtonInput>
            </Form>
        </LayoutForms>
    )
}
