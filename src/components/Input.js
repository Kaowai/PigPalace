import React from "react"
import { DatePicker, Select, Space } from 'antd';

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
export const Input2 = (
    {
        label,
        placeholder,
        type,
        onChange,
        isDisable,
        value,
    }
) => {
    return (
        <div className="text-xs w-full relative">
            <label className={`font-semibold   text-xs ${isDisable ? "text-textdisable" : "text-secondary60"}`}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                readOnly={isDisable}
                className={`w-full text-xs border mt-2 bg-white ${isDisable && "font-semibold"} border-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 hover:border-blue-500 focus:ring-blue-500`} />
        </div>
    )
}

export const MessageInput = ({ label, placeholder }) => {
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs ">{label}</label>
            <textarea
                placeholder={placeholder}
                className="w-full text-xs border mt-2 bg-white border-secondary30 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 hover:border-blue-500 resize-none max-md:h-30 h-28 focus:ring-blue-500" />
        </div>
    )
}

export const InputMoney = (
    {
        label,
        onChange,
        isDisable
    }
) => {
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs">{label}</label>
            <div className={`w-full border mt-2  rounded py-2 px-2 focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500
            ${isDisable ? "bg-info_bg/40 border-textprimary" : "bg-white border-secondary30"}  flex flex-row h-8 items-center justify-center`}>
                <span className="text-xs text-textprimary pr-2 border-r-2 border-textprimary">$</span>
                {
                    isDisable ? (
                        <input
                            readOnly
                            type="number"
                            placeholder=""
                            onChange={onChange}
                            className="outline-none px-2 text-xs text-textprimary w-full bg-transparent"
                        />
                    ) : (
                        <input
                            type="number"
                            placeholder=""
                            onChange={onChange}
                            className="outline-none px-2 text-xs text-textprimary w-full bg-transparent"
                        />
                    )
                }
            </div>
        </div>
    )
}
export const Select1 = (
    {
        label,
        options,
        onChange,
        isDisable,
        value,
    }
) => {
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs">{label}</label>
            <select
                placeholder={"Select..."}
                onChange={onChange}
                value={value}
                readOnly={isDisable}
                className={`w-full text-xs border mt-2 bg-white ${isDisable ? "border-textprimary" : "border-secondary30"} h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>{option.title}</option>
                    )
                })}
            </select>
        </div>
    )
}
export const MultiSelect = (
    {
        label,
        options,
        onChange,
        isDisable,
        value,
    }
) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs">{label}</label>
            <Select
                mode="multiple"
                allowClear
                style={{
                    width: '100%',
                }}
                className="mt-2"
                placeholder="Please select"
                defaultValue={['Berkshire']}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}
export const DateTimeInput = (
    {
        label
    }
) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs">{label}</label>
            <DatePicker className="w-full mt-2 text-xs font-semibold  h-8" />
        </div>
    )
}
