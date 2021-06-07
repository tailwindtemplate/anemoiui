import React from "react";

type Checkbox = {
    checked?: boolean;
    label?: string;
}

export default function Checkbox({checked, label = 'Label'}: Checkbox) {
    return (
        <label className="inline-flex items-center mt-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked={checked} />
            <span className="ml-2 text-gray-700">{label}</span>
        </label>
    )
}
