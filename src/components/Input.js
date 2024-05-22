import React, { useState } from "react"
import { DatePicker, Select, Space } from 'antd';
import { EyeIcon, EyeOffIcon } from "lucide-react";

export const Input = (
    {
        placeholder,
        type,
        onChange
    }
) => {
    return (
        <div className="w-full flex flex-col gap-1 justify-center items-center">
            <label className='relative cursor-pointer items-center'>
                <input type="text" placeholder="Input" className='h-12 w-[22rem] px-5 text-xs text-textprimary bg-white border-textdisable border rounded-xl border-opacity-50 outline-none focus:border-other20 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-xs text-textdisable text-opacity-80 bg-white absolute left-4 top-4 px-1 transition duration-200 input-text'>{placeholder}</span>
            </label>
            <span className="text-xs text-warning10 hidden">* Input invalid</span>
        </div>
    )
}

export const InputPassword = ({
    placeholder,
    onChange
}) => {
    const [showPassword, setShowPassword] = useState(false)

    const [isPlaceholder, setIsPlaceholder] = useState(true)
    const [isFocused, setIsFocused] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);

    }
    const PlaceHolderShown = "text-xs text-textdisable text-opacity-80 bg-white absolute left-4 top-4 px-1 transition duration-200";
    const PlaceholderHidden = "text-xs text-textdisable text-opacity-80 bg-white absolute left-4 top-4 px-1 transition duration-200 placeholder-shown";
    const handleInputChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === '') {
            setIsPlaceholder(true);
        } else {
            setIsPlaceholder(false);
        }
    }
    const handleFocus = () => {
        console.log("focus");
        setIsFocused(true); // Set isFocused to true when the input field is focused
    }

    const handleBlur = () => {
        console.log("clear focus");
        setIsFocused(false); // Set isFocused to false when the input field loses focus
    }
    console.log("rerender");
    return (
        <div className="w-full flex flex-col gap-1 justify-center items-center">
            <label className='relative cursor-pointer'>
                <input type={showPassword ? "text" : "password"} placeholder="Input" className='h-12 w-[22rem] pl-5 pr-11 text-xs text-textprimary bg-white border-textdisable border rounded-xl border-opacity-50 outline-none focus:border-other20 placeholder-gray-300 placeholder-opacity-0 transition duration-200' onChange={handleInputChange} onFocus={handleFocus} onBlur={handleBlur}/>
                <span className={isPlaceholder && !isFocused ? PlaceHolderShown : PlaceholderHidden}>{placeholder}</span>
                {
                    showPassword ? (
                        <EyeIcon size={18} className='absolute right-4 top-4 text-textsecondary text-opacity-80 cursor-pointer' onClick={handleClick} />
                    ) : (
                        <EyeOffIcon size={18} className='absolute right-4 top-4 text-textsecondary text-opacity-80 cursor-pointer' onClick={handleClick} />
                    )
                }
            </label>
            <span className="text-xs text-warning10 hidden">* Input invalid</span>
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
