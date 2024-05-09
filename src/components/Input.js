import React from "react"
export const Input = (
    {
        label,
        placeholder,
        type,
        onChange
    }
) => {
    return (
        <div className="text-sm w-full relative">
            <label className="text-secondary60 font-bold ">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full text-sm mt-2 bg-other40 border-secondary40 rounded-lg text-secondary60 focus:border-other20 focus:ring-green-500  border-2 py-2 px-2 border-solid focus:bg-white" />
        </div>
    )
}