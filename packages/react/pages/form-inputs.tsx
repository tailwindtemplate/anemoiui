import {LayoutForms, Form, FormInput } from '../src/components/form-input'
import {background} from '../const'
import {ButtonInput, InputPhone} from '../src/elements/select'

export default function FormInputs () {
    return (
        <LayoutForms className="bg-gray-200">
            <img className="ml-20 h-52" src={background.img} />
            <Form className="mr-20" title="Xin chào!" content="Chào mừng bạn đến với trang đăng nhập Hayov. Nhập số điện thoại để bắt đầu sử dụng">
                <FormInput>
                    <InputPhone/>
                </FormInput>
                <ButtonInput text="BẮT ĐẦU"/>
            </Form>
        </LayoutForms>
    )
}
