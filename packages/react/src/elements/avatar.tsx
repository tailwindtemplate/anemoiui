import clsx from 'clsx';

type Button = {
    src?: any;
    status?: any;
    size?: any;
    newMessage?: number;
}

const SIZE_MAPS: any = {
    XS: 'w-4 h-4',
    SM: 'w-8 h-8',
    BASE: 'w-12 h-12',
    LG: 'text-lg',
    XL: 'text-xl',
};

const STATUS_MAPS: any = {
    ONLINE: 'bg-green-500',
    OFFLINE: 'bg-gray-300',
};

export default function Avatar({ src = 'https://znews-photo.zadn.vn/w660/Uploaded/qfssu/2021_06_01/iu_dep_het_phan_thien_ha_1.jpg', status = 'OFFLINE', size = 'BASE', newMessage = 22 }: Button) {
    return (
        <div className={clsx('relative', SIZE_MAPS[size])}>
            <div style={{backgroundImage: `url('${src}')`}} className={clsx('w-12 h-12 bg-no-repeat bg-cover bg-center rounded-full', SIZE_MAPS[size])} />
            {status && <div className={clsx('absolute top-0 right-0 w-2 h-2 rounded-full', STATUS_MAPS[status])} />}
            {newMessage > 0 && newMessage < 99 && <div className='w-4 h-4 rounded-full text-xs text-white absolute top-0 left-0 bg-red-500'>{newMessage}</div>}
            {newMessage > 99 && <div>99+</div>}
        </div>
    )
}
