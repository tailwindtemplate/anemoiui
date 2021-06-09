import { Avatar, NewMessage, Status } from '../../src';

export default function PreviewAvatar() {
    return (
        <div className="flex space-x-4">
            {/*Oval - default-single*/}
            <div className="flex flex-col space-y-4">
                <Avatar size="xs" />
                <Avatar size="sm" />
                <Avatar />

                <Avatar size="xs">
                    <NewMessage className="-top-1 -right-1" newMessage={22} />
                </Avatar>
                <Avatar size="sm">
                    <NewMessage className="-top-1 -right-1" newMessage={22} />
                </Avatar>
                <Avatar>
                    <NewMessage className="-top-1 -right-1" newMessage={22} />
                </Avatar>

                <Avatar size="xs">
                    <NewMessage className="-bottom-1 -right-1" newMessage={22} />
                </Avatar>
                <Avatar size="sm">
                    <NewMessage className="-bottom-1 -right-1" newMessage={22} />
                </Avatar>
                <Avatar>
                    <NewMessage className="-bottom-1 -right-1" newMessage={22} />
                </Avatar>

                <Avatar size="xs" hasExtension />
                <Avatar size="sm" hasExtension />
                <Avatar hasExtension />
            </div>
            {/*End Oval-default-single*/}

            {/*Round-default-single*/}
            <div className="flex flex-col space-y-4">
                <Avatar size="xs" isRounded />
                <Avatar size="sm" isRounded />
                <Avatar isRounded />

                <Avatar size="xs" isRounded>
                    <NewMessage className="-top-1 -right-1" newMessage={22} />
                </Avatar>
                <Avatar size="sm" isRounded>
                    <NewMessage className="-top-1 -right-1" newMessage={22} />
                </Avatar>
                <Avatar isRounded>
                    <NewMessage className="-top-1 -right-1" newMessage={22} />
                </Avatar>

                <Avatar size="xs" isRounded>
                    <NewMessage className="-bottom-1 -right-1" newMessage={22} />
                </Avatar>
                <Avatar size="sm" isRounded>
                    <NewMessage className="-bottom-1 -right-1" newMessage={22} />
                </Avatar>
                <Avatar isRounded>
                    <NewMessage className="-bottom-1 -right-1" newMessage={22} />
                </Avatar>

                <Avatar size="xs" hasExtension isRounded />
                <Avatar size="sm" hasExtension isRounded />
                <Avatar hasExtension isRounded />
            </div>
            {/*End Round-default-single*/}

            {/*Oval default group*/}
            <div className="flex flex-col space-y-4">
                <Avatar size="xs" name="YN"/>
                <Avatar size="sm" name="YN"/>
                <Avatar name="YN" />

                <Avatar size="xs" name="YN">
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>
                <Avatar size="sm" name="YN">
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>
                <Avatar name="YN">
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>

                <Avatar size="xs" name="YN">
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar size="sm" name="YN">
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar name="YN">
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar size="xs" hasExtension name="YN" />
                <Avatar size="sm" hasExtension name="YN" />
                <Avatar hasExtension name="YN" />
            </div>

            {/*Round default group*/}
            <div className="flex flex-col space-y-4">
                <Avatar size="xs" isRounded name="YN" />
                <Avatar size="sm" isRounded name="YN" />
                <Avatar isRounded name="YN" />

                <Avatar size="xs" isRounded name="YN">
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>
                <Avatar size="sm" isRounded name="YN">
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>
                <Avatar isRounded name="YN">
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>

                <Avatar size="xs" isRounded name="YN">
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar size="sm" isRounded name="YN">
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar isRounded name="YN">
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar size="xs" hasExtension isRounded name="YN" />
                <Avatar size="sm" hasExtension isRounded name="YN" />
                <Avatar hasExtension isRounded name="YN" />
            </div>

            {/*Oval - src*/}
            <div className="flex flex-col space-y-4">
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    type="src"
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                />

                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                >
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    newMessage={22}
                    type="src"
                >
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    newMessage={22}
                    type="src"
                >
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>

                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                >
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    newMessage={22}
                    type="src"
                >
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    newMessage={22}
                    type="src"
                >
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar
                    size="xs"
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    hasExtension
                    type="src"
                />
                <Avatar
                    size="sm"
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    hasExtension
                    type="src"
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    hasExtension
                    type="src"
                />
            </div>
            {/*End Oval-src*/}

            {/*Rounded-src*/}
            <div className="flex flex-col space-y-4">
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                    isRounded
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    type="src"
                    isRounded
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                    isRounded
                />

                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                    isRounded
                >
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    newMessage={22}
                    type="src"
                    isRounded
                >
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    newMessage={22}
                    type="src"
                    isRounded
                >
                    <NewMessage newMessage={22} className="-top-1 -right-1" />
                </Avatar>

                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                    isRounded
                >
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    newMessage={22}
                    type="src"
                    isRounded
                >
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    newMessage={22}
                    type="src"
                    isRounded
                >
                    <NewMessage newMessage={22} className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar
                    size="xs"
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    hasExtension
                    type="src"
                    isRounded
                />
                <Avatar
                    size="sm"
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    hasExtension
                    type="src"
                    isRounded
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    hasExtension
                    type="src"
                    isRounded
                />
            </div>
            {/*End Rounded-src*/}

            {/*Default-Oval-status*/}
            <div className="flex flex-col space-y-4">
                <Avatar size="xs" type="add-avatar" />
                <Avatar size="sm" type="add-avatar" />
                <Avatar type="add-avatar" />

                <Avatar size="xs">
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar size="sm" status="online">
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar status="online">
                    <Status className="-top-1 -right-1" />
                </Avatar>

                <Avatar size="xs">
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar size="sm" status="online">
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar status="online">
                    <Status className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar size="xs" hasBorder />
                <Avatar size="sm" hasBorder />
                <Avatar hasBorder />
            </div>

            {/*Default-Rounded-status*/}
            <div className="flex flex-col space-y-4">
                <Avatar size="xs" type="add-avatar" isRounded />
                <Avatar size="sm" type="add-avatar" isRounded />
                <Avatar type="add-avatar" isRounded />

                <Avatar size="xs" isRounded>
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar size="sm" isRounded>
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar isRounded>
                    <Status className="-top-1 -right-1" />
                </Avatar>

                <Avatar size="xs" isRounded>
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar size="sm" isRounded>
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar isRounded>
                    <Status className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar size="xs" hasBorder isRounded />
                <Avatar size="sm" hasBorder isRounded />
                <Avatar hasBorder isRounded />
            </div>

            {/*Oval-default group-status*/}
            <div className="flex flex-col space-y-4">
                <Avatar size="xs" name="YN">
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar size="sm" name="YN">
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar name="YN">
                    <Status className="-top-1 -right-1" />
                </Avatar>

                <Avatar size="xs" name="YN">
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar size="sm" name="YN">
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar name="YN">
                    <Status className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar size="xs" hasBorder name="YN" />
                <Avatar size="sm" hasBorder name="YN" />
                <Avatar hasBorder name="YN" />
            </div>
            {/*Oval-default group-status*/}

            {/*Round-default group-status*/}
            <div className="flex flex-col space-y-4">
                <Avatar size="xs" isRounded name="YN">
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar size="sm" isRounded name="YN">
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar isRounded name="YN">
                    <Status className="-top-1 -right-1" />
                </Avatar>

                <Avatar size="xs" name="YN" isRounded>
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar size="sm" name="YN" isRounded>
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar isRounded name="YN">
                    <Status className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar size="xs" isRounded hasBorder name="YN" />
                <Avatar size="sm" isRounded hasBorder name="YN" />
                <Avatar isRounded hasBorder name="YN" />
            </div>
            {/*Round-default group-status*/}

            {/*Oval-src-status*/}
            <div className="flex flex-col space-y-4">
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                >
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    type="src"
                >
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                >
                    <Status className="-top-1 -right-1" />
                </Avatar>

                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                >
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    type="src"
                >
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                >
                    <Status className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                    hasBorder
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    type="src"
                    hasBorder
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                    hasBorder
                />
            </div>
            {/*End Oval-src-status*/}

            {/*Round-src-status*/}
            <div className="flex flex-col space-y-4">
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                    isRounded
                    name="YN"
                >
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    type="src"
                    isRounded
                    name="YN"
                >
                    <Status className="-top-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                    isRounded
                    name="YN"
                >
                    <Status className="-top-1 -right-1" />
                </Avatar>

                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                    isRounded
                    name="YN"
                >
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    type="src"
                    isRounded
                    name="YN"
                >
                    <Status className="-bottom-1 -right-1" />
                </Avatar>
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                    isRounded
                    name="YN"
                >
                    <Status className="-bottom-1 -right-1" />
                </Avatar>

                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                    hasBorder
                    isRounded
                    name="YN"
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="sm"
                    type="src"
                    hasBorder
                    isRounded
                    name="YN"
                />
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                    hasBorder
                    isRounded
                    name="YN"
                />
            </div>
            {/*End Round-src-status*/}
        </div>
    );
}
