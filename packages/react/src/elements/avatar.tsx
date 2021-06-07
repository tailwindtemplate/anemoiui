import React from "react";
import clsx from "clsx";
import DefaultAvatar from "../../assets/images/default-avatar.svg";
import PlusOutline from "../../assets/images/plus_outline.svg";

type Textarea = {
  className?: string;
  src?: string;
  size?: string;
  isRounded?: boolean;
  newMessage?: number;
  status?: string;
  hasExtension?: boolean;
  user?: any;
  type?: "default-single" | "default-group" | "src" | "add-avatar";
  hasBorder?: boolean;
};

const SIZE: any = {
  XS: "w-8 h-8",
  SM: "w-12 h-12",
  BASE: "w-16 h-16"
};

const SHORT_NAME: any = {
  XS: "text-sm",
  SM: "text-lg",
  BASE: "text-2xl"
};

const SIZE_DEFAULT: any = {
  XS: "w-4 h-4",
  SM: "w-6 h-6",
  BASE: "w-8 h-8"
};

export default function Avatar({
  className,
  size = "BASE",
  src,
  isRounded = false,
  newMessage,
  status,
  children,
  hasExtension,
  user,
  hasBorder,
  type = "default-single"
}: React.PropsWithChildren<Textarea>) {
  const userName = {
    firstName: "Nhi",
    lastName: "Yen"
  };
  const shortName =
    userName.firstName.charAt(0).toUpperCase() +
    "" +
    userName.lastName.charAt(0).toUpperCase();

  const renderAvatar = () => {
    switch (type) {
      case "src":
        return <img className="invisible" src={src} />;
      case "default-single":
        return <DefaultAvatar fill="#FFF" className={SIZE_DEFAULT[size]} />;
      case "default-group":
        return (
          <div className={clsx("text-white", SHORT_NAME[size])}>
            {shortName}
          </div>
        );
      case "add-avatar":
        return <PlusOutline width={13} height={13} />;
    }
  };
  return (
    <div
      className={clsx(
        "relative rounded-xl bg-primary-600 flex items-center justify-center m-2",
        SIZE[size],
        isRounded && "!rounded-full",
        src && "bg-cover bg-no-repeat bg-center",
        (newMessage || status) && "relative",
        type === "add-avatar" && "bg-white border border-dashed",
        hasBorder && "border-2 border-secondary-600",
        className
      )}
      style={{ backgroundImage: `url('${src}')` }}
    >
      <div
        className={clsx(
          hasBorder &&
            "border-2 border-white rounded-xl flex items-center justify-center",
          hasBorder && SIZE[size],
          isRounded && "!rounded-full"
        )}
      >
        {renderAvatar()}
        {children}
      </div>
      {hasExtension && (
        <div className="absolute -bottom-1 -right-0.5 bg-primary-900 rounded-full border-2 border-white w-4 h-4 flex justify-center items-center">
          <PlusOutline fill="#FFF" width={8} height={8} />
        </div>
      )}
    </div>
  );
}

type NewMessage = {
  newMessage: number;
  className?: string;
};

export const NewMessage = ({ newMessage, className }: NewMessage) => {
  return (
    <div
      className={clsx(
        "absolute text-tiny bg-red-600 text-white rounded-full w-4 h-4 flex justify-center items-center",
        className
      )}
    >
      {newMessage}
    </div>
  );
};

export const Status = ({ className }: any) => {
  return (
    <div
      className={clsx(
        "absolute w-3 h-3 bg-green-500 rounded-full border-2 border-white",
        className
      )}
    />
  );
};

export function PreviewAvatar() {
  return (
    <div className="flex">
      {/*Oval - default-single*/}
      <div className="flex flex-col mr-4">
        <Avatar size="XS" />
        <Avatar size="SM" />
        <Avatar />

        <Avatar size="XS">
          <NewMessage className="!-top-1 !-right-1" newMessage={22} />
        </Avatar>
        <Avatar size="SM">
          <NewMessage className="!-top-1 !-right-1" newMessage={22} />
        </Avatar>
        <Avatar>
          <NewMessage className="!-top-1 !-right-1" newMessage={22} />
        </Avatar>

        <Avatar size="XS">
          <NewMessage className="!-bottom-1 !-right-1" newMessage={22} />
        </Avatar>
        <Avatar size="SM">
          <NewMessage className="!-bottom-1 !-right-1" newMessage={22} />
        </Avatar>
        <Avatar>
          <NewMessage className="!-bottom-1 !-right-1" newMessage={22} />
        </Avatar>

        <Avatar size="XS" hasExtension />
        <Avatar size="SM" hasExtension />
        <Avatar hasExtension />
      </div>
      {/*End Oval-default-single*/}

      {/*Round-default-single*/}
      <div className="flex flex-col mr-4">
        <Avatar size="XS" isRounded />
        <Avatar size="SM" isRounded />
        <Avatar isRounded />

        <Avatar size="XS" isRounded>
          <NewMessage className="!-top-1 !-right-1" newMessage={22} />
        </Avatar>
        <Avatar size="SM" isRounded>
          <NewMessage className="!-top-1 !-right-1" newMessage={22} />
        </Avatar>
        <Avatar isRounded>
          <NewMessage className="!-top-1 !-right-1" newMessage={22} />
        </Avatar>

        <Avatar size="XS" isRounded>
          <NewMessage className="!-bottom-1 !-right-1" newMessage={22} />
        </Avatar>
        <Avatar size="SM" isRounded>
          <NewMessage className="!-bottom-1 !-right-1" newMessage={22} />
        </Avatar>
        <Avatar isRounded>
          <NewMessage className="!-bottom-1 !-right-1" newMessage={22} />
        </Avatar>

        <Avatar size="XS" hasExtension isRounded />
        <Avatar size="SM" hasExtension isRounded />
        <Avatar hasExtension isRounded />
      </div>
      {/*End Round-default-single*/}

      {/*Oval default group*/}
      <div className="flex flex-col mr-4">
        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        />
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        />
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        />

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasExtension
        />
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasExtension
        />
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasExtension
        />
      </div>

      {/*Round default group*/}
      <div className="flex flex-col mr-4">
        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        />
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        />
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        />

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasExtension
          isRounded
        />
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasExtension
          isRounded
        />
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasExtension
          isRounded
        />
      </div>

      {/*Oval - src*/}
      <div className="flex flex-col mr-4">
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
        />
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
          type="src"
        />
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          type="src"
        />

        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
          newMessage={22}
          type="src"
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          newMessage={22}
          type="src"
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>

        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
          newMessage={22}
          type="src"
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          newMessage={22}
          type="src"
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>

        <Avatar
          size="XS"
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          hasExtension
          type="src"
        />
        <Avatar
          size="SM"
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
      <div className="flex flex-col mr-4">
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
          isRounded
        />
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
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
          size="XS"
          type="src"
          isRounded
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
          newMessage={22}
          type="src"
          isRounded
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          newMessage={22}
          type="src"
          isRounded
        >
          <NewMessage newMessage={22} className="!-top-1 !-right-1" />
        </Avatar>

        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
          isRounded
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
          newMessage={22}
          type="src"
          isRounded
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          newMessage={22}
          type="src"
          isRounded
        >
          <NewMessage newMessage={22} className="!-bottom-1 !-right-1" />
        </Avatar>

        <Avatar
          size="XS"
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          hasExtension
          type="src"
          isRounded
        />
        <Avatar
          size="SM"
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
      <div className="flex flex-col mr-4">
        <Avatar size="XS" type="add-avatar" />
        <Avatar size="SM" type="add-avatar" />
        <Avatar type="add-avatar" />

        <Avatar size="XS">
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar size="SM" status="online">
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar status="online">
          <Status className="-top-1 -right-1" />
        </Avatar>

        <Avatar size="XS">
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar size="SM" status="online">
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar status="online">
          <Status className="-bottom-1 -right-1" />
        </Avatar>

        <Avatar size="XS" hasBorder />
        <Avatar size="SM" hasBorder />
        <Avatar hasBorder />
      </div>

      {/*Default-Rounded-status*/}
      <div className="flex flex-col mr-4">
        <Avatar size="XS" type="add-avatar" isRounded />
        <Avatar size="SM" type="add-avatar" isRounded />
        <Avatar type="add-avatar" isRounded />

        <Avatar size="XS" isRounded>
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar size="SM" isRounded>
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar isRounded>
          <Status className="-top-1 -right-1" />
        </Avatar>

        <Avatar size="XS" isRounded>
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar size="SM" isRounded>
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar isRounded>
          <Status className="-bottom-1 -right-1" />
        </Avatar>

        <Avatar size="XS" hasBorder isRounded />
        <Avatar size="SM" hasBorder isRounded />
        <Avatar hasBorder isRounded />
      </div>

      {/*Oval-default group-status*/}
      <div className="flex flex-col mr-4">
        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <Status className="-top-1 -right-1" />
        </Avatar>

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasBorder
        />
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasBorder
        />
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          hasBorder
        />
      </div>
      {/*Oval-default group-status*/}

      {/*Round-default group-status*/}
      <div className="flex flex-col mr-4">
        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <Status className="-top-1 -right-1" />
        </Avatar>

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>

        <Avatar
          size="XS"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
          hasBorder
        />
        <Avatar
          size="SM"
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
          hasBorder
        />
        <Avatar
          user={{ firstName: "Nhi", lastName: "Yen" }}
          type="default-group"
          isRounded
          hasBorder
        />
      </div>
      {/*Round-default group-status*/}

      {/*Oval-src-status*/}
      <div className="flex flex-col mr-4">
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
        >
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
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
          size="XS"
          type="src"
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
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
          size="XS"
          type="src"
          hasBorder
        />
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
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
      <div className="flex flex-col mr-4">
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
          isRounded
        >
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
          type="src"
          isRounded
        >
          <Status className="-top-1 -right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          type="src"
          isRounded
        >
          <Status className="-top-1 -right-1" />
        </Avatar>

        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
          isRounded
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
          type="src"
          isRounded
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          type="src"
          isRounded
        >
          <Status className="-bottom-1 -right-1" />
        </Avatar>

        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="XS"
          type="src"
          hasBorder
          isRounded
        />
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          size="SM"
          type="src"
          hasBorder
          isRounded
        />
        <Avatar
          src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
          type="src"
          hasBorder
          isRounded
        />
      </div>
      {/*End Round-src-status*/}
    </div>
  );
}
