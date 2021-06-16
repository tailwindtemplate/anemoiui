import { Button, Form, FormBody, ImageLoader, WelcomeLayout } from '../../src'

export default function WelcomePage() {
    return (
        <div style={{ height: 'calc(100vh - 8rem)'}}>
            <WelcomeLayout
                className="relative justify-center space-x-4 bg-white p-4"
                LeftChildren={<ImageLoader className="w-full h-full lg:w-1/2 bg-no-repeat" imageStyle="cover" src="https://media.istockphoto.com/vectors/hands-with-smartphones-vector-id1223365194" />}
                RightChildren={(
                    <Form className="absolute z-10 md:relative">
                        <FormBody title="WELCOME" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                            <Button type="primary" title="Login" as="a" size="lg" className="rounded-2xl mt-6" />
                            <Button title="Register" as="a" size="lg" className="rounded-2xl mt-6 hover:text" />
                        </FormBody>
                    </Form>
                )}
            />
        </div>
    )
}
