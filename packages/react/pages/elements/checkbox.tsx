import { MinusIcon } from '@heroicons/react/outline';
import { Checkbox } from '../../src';
import { useState } from 'react';

export default function PreviewCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
        <div className="flex">
            {/*Default*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true}
                />
            </div>

            {/*Default - label*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} label='Label' />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} label='Label' />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true} label='Label'
                />
            </div>

            {/*Default - caption*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} caption='Caption' />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} caption='Caption' />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true} caption='Caption'
                />
            </div>

            {/*Default-caption-label*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} label='Label' caption='Caption' />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} label='Label' caption='Caption' />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true} label='Label' caption='Caption'
                />
            </div>

            {/*Sm*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} size='SM' />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} size='SM' />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true} size='SM'
                />
            </div>

            {/*Sm - label*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} size='SM' label='Label' />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} size='SM' label='Label' />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true} size='SM' label='Label'
                />
            </div>

            {/*Sm - caption*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} size='SM' caption='Caption' />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} size='SM' caption='Caption' />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true} size='SM' caption='Caption'
                />
            </div>

            {/*Sm-caption-label*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} size='SM' label='Label' caption='Caption' />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} size='SM' label='Label' caption='Caption' />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true} size='SM' label='Label' caption='Caption'
                />
            </div>

            {/*Change icon*/}
            <div className="flex flex-col mr-16">
                <Checkbox checked={checked} onClick={()=>setChecked(!checked)} Icon={MinusIcon} />
                <Checkbox checked={true} onClick={() => setChecked(!checked)} Icon={MinusIcon} />
                <Checkbox
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true} Icon={MinusIcon}
                />
            </div>
        </div>
    );
}
