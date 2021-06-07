import React from "react";

type Radio = {
    checked?: boolean;
    onClick?: () => void;
    label?: string;
}

export default function Radio({checked, onClick, label = "Choose"}:Radio) {
    return (
        <label className="inline-flex items-center mt-3" onClick={onClick}>
            <input type="radio" className="form-radio h-5 w-5 text-gray-600" checked={checked} />
            <span className="ml-2 text-gray-700">{label}</span>
        </label>
    )
}
