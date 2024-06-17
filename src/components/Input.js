import React, { useEffect, useRef, useState } from "react"
import { DatePicker, Select } from 'antd';
import { CheckIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { PiFarmLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';

export const Input = (
    {
        placeholder,
        register,
        name,
        onChange,
    }
) => {
    return (
        <div className="w-full flex flex-col gap-1 justify-center items-center">
            <label className='relative cursor-pointer items-center'>
                <input
                    name={name}
                    type="text"
                    placeholder="Input"
                    onChange={onChange}
                    {...register}
                    className='h-12 w-[22rem] px-5 text-xs text-textprimary bg-white border-textdisable border rounded-xl border-opacity-50 outline-none focus:border-other20 placeholder-gray-300 placeholder-opacity-0 transition duration-200'

                />
                <span className='text-xs text-textdisable text-opacity-80 bg-white absolute left-4 top-4 px-1 transition duration-200 input-text'>{placeholder}</span>
            </label>
        </div>
    )
}
export const SelectedFarm = ({ farmName, handleClick }) => {
    return (
        <div className="flex flex-row gap-5 justify-center items-center border-2 border-textprimary border-opacity-50 rounded-lg p-2 w-full h-12 bg-white hover:bg-textdisable cursor-pointer hover:text-white" onClick={handleClick}>
            <PiFarmLight size={20} className="text-textprimary " />
            <span className="text-xs text-textprimary  text-center">{farmName}</span>
        </div>
    )
}

export const InputPIN = (
    {
        arrayPIN, setArrayPIN, code
    }
) => {
    const [isFilledArray, setIsFilledArray] = useState(Array(6).fill(false))
    const inputRefs = useRef([]);
    const [showCheck, setShowCheck] = useState(false);

    useEffect(() => {
        setShowCheck(true);
        setTimeout(() => setShowCheck(false), 2000);
    }, [code]);
    const handleFilled = (e, index) => {
        const newArray = [...isFilledArray];
        newArray[index] = e.target.value.length !== 0;
        setIsFilledArray(newArray);

        const newPIN = [...arrayPIN];
        newPIN[index] = e.target.value;
        setArrayPIN(newPIN);
        console.log(newPIN.join(''));

        if (e.target.value.length === 1 && index < arrayPIN.length - 1) {
            inputRefs.current[index + 1].focus();
        }
        if (e.target.value.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div className="w-full flex flex-col gap-3 justify-start items-start">
            <div className="w-full flex flex-row gap-3 justify-center items-center">
                {
                    isFilledArray.map((item, index) => {
                        return (
                            <input
                                ref={el => inputRefs.current[index] = el}
                                maxLength={1}
                                key={index}
                                className={`h-16 w-12 p-2 rounded font-semibold text-3xl text-center text-textprimary outline-none ${isFilledArray[index] ? "bg-white" : "bg-login1"} hover:bg-login1 hover:border-2 hover:border-login transition-all duration-150 ease-in-out focus:border-2 focus:scale-105 focus:border-textprimary`}
                                onChange={(e) => handleFilled(e, index)}
                            />)
                    })
                }
            </div>
            <div className={`flex flex-row w-full gap-2 transition-all duration-200 ease-out ${showCheck ? "visible" : "invisible"}`}>
                <CheckIcon size={16} className=" text-success_bg text-opacity-80" />
                <span className="text-xs text-success_bg">Have seen email.</span>
            </div>
        </div>
    )
}

export const InputPassword = (
    {
        placeholder,
        register,
        name,
        type
    }
) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="w-full flex flex-col gap-1 justify-center items-center">
            <label className='relative cursor-pointer items-center'>
                <input
                    name={name}
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Input"
                    {...register}
                    className='h-12 w-[22rem] px-5 text-xs text-textprimary bg-white border-textdisable border rounded-xl border-opacity-50 outline-none focus:border-other20 placeholder-gray-300 placeholder-opacity-0 transition duration-200'

                />
                <span className='text-xs text-textdisable text-opacity-80 bg-white absolute left-4 top-4 px-1 transition duration-200 input-text'>{placeholder}</span>

                {
                    isShowPassword ? (
                        <EyeIcon size={18} className='absolute right-4 top-4 text-textsecondary text-opacity-80 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)} />
                    ) : (
                        <EyeOffIcon size={18} className='absolute right-4 top-4 text-textsecondary text-opacity-80 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)} />
                    )
                }
            </label>
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
        register,
        value,
    }
) => {

    const handleChange = (value) => { 
        console.log(value)
    }
    return (
        <div className="text-xs w-full relative">
            <label className={`font-semibold   text-xs ${isDisable ? "text-textdisable" : "text-secondary60"}`}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={(e) => handleChange(e.target.value)}
                value={value}
                disabled={isDisable}
                readOnly={isDisable}
                {...register}
                className={`w-full text-xs border mt-2 bg-white ${isDisable && "font-semibold"} border-secondary30 h-8 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 hover:border-blue-500 focus:ring-blue-500`} />
        </div>
    )
}

export const MessageInput = ({ label, placeholder, register }) => {
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs ">{label}</label>
            <textarea
                placeholder={placeholder}
                {...register}
                className="w-full text-xs border mt-2 bg-white border-secondary30 rounded text-textprimary py-2 px-2 outline-none focus:border-blue-500 hover:border-blue-500 resize-none max-md:h-full h-48 focus:ring-blue-500" />
        </div>
    )
}

export const InputMoney = (
    {
        label,
        onChange,
        isDisable,
        register,
        value
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
                            value={value}
                            {...register}
                            onChange={onChange}
                            className="outline-none px-2 text-xs text-textprimary w-full bg-transparent"
                        />
                    ) : (
                        <input
                            type="number"
                            {...register}
                            placeholder=""
                            value={value}
                            onChange={onChange}
                            className="outline-none px-2 text-xs text-textprimary w-full bg-transparent"
                        />
                    )
                }
            </div>
        </div>
    )
}

export const UserRoles = ({ name, onHandle }) => {
    return (
        <div className="flex flex-row gap-2 justify-center items-center w-full py-2 hover:border hover:border-textdisable rounded-md cursor-pointer" onClick={onHandle}>
            <img src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg" alt="user" className="w-12 h-12 rounded-full" />
            <span className="text-xs font-semibold text-textprimary">{name}</span>
        </div>

    )
}

export const Select2 = (
    {
        label,
        options,
        onChange,
        setState,
        isDisable,
        value,
        setSelectedState
    }
) => {
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs">{label}</label>
            <select
                placeholder={"Select..."}
                onChange={setSelectedState ? (e) => setSelectedState(e.target.value) : onChange}
                value={value}
                readOnly={isDisable}
                className={`w-32 text-xs border bg-white ${isDisable ? "border-textprimary" : "border-secondary30"} h-10 rounded-lg text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>{option.title}</option>
                    )
                })}
            </select>
        </div>
    )
}
export const Select1 = (
    {
        label,
        options,
        onChange,
        isDisable,
        register,
        value,
        placeholder
    }
) => {
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs">{label}</label>
            <select
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                readOnly={isDisable}
                {...register}
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
                defaultValue={options[0].value}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}
export const DateTimeInput = (
    {
        label,
        placeholder,
        setDate
    }
) => {
    function onSelectDate(date, dateString) {
        console.log(dateString);
        setDate(dateString);
    }
    return (
        <div className="text-xs w-full relative">
            <label className="text-secondary60 font-semibold text-xs">{label}</label>
            <DatePicker placeholder={placeholder} className="w-full mt-2 text-xs font-semibold  h-8 date-time-input" onChange={onSelectDate} />
        </div>
    )
}
export const DateTimeInput2 = (
    {
        label,
        placeholder,
        setDate
    }
) => {

    function onSelectDate(date, dateString) {
        console.log(dateString);
        setDate(dateString);
    }
    return (
        <div className="text-xs w-full relative flex flex-col">
            <label className="text-secondary60 font-semibold text-xs">{label}</label>
            <DatePicker
                placeholder={placeholder}
                className="w-full font-semibold text-textprimary h-10 date-time-input rounded-lg"
                onChange={onSelectDate}
                aria-orientation="horizontal"
            />
        </div>
    )
}

const Dropdown = ({ data, farmSelected, setFarmSelected }) => {
    const [openSelect, setOpenSelect] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenSelect(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <div
                className='bg-other20 rounded p-2 w-32 text-xs text-white font-medium relative flex flex-row justify-between items-center cursor-pointer'
                onClick={() => setOpenSelect(!openSelect)}
            >
                <span className=''>{farmSelected.name}</span>
                <IoIosArrowDown
                    size={16}
                    className={`transform transition-all ${openSelect ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>
            <div
                className={`absolute flex flex-col gap-0 top-12 text-xs text-textprimary font-normal w-32 rounded border border-textdisable transition-all p-1 ${!openSelect && 'hidden'
                    } z-[1000] bg-white`}
            >
                {
                    data?.map((farm, index) => (
                        <span
                            key={index}
                            className={`p-2 bg-white transition-all cursor-pointer z-[1000] ${farmSelected.id !== farm.id ? 'bg-white hover:bg-other30' : 'bg-other20/80'}`}
                            onClick={() => { setOpenSelect(false); setFarmSelected(farm) }}>{farm.name}</span>
                    ))
                }
            </div>
        </div>
    );
};

export default Dropdown;
