import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { DateTimeInput, Input2, InputMoney, MessageInput, Select1 } from '../../../components/Input'
import Table2 from '../../../components/TableAddPig'
import Input from 'antd/es/input/Input'

function ExpensesAddFarm() {
    const navigate = useNavigate()
    const options = [
        {
            title: "Feed"
        }, {
            title: 'Vaccine'
        }
    ]
    const handleClick = () => {
        navigate('/Invoice/Expenses/ExpensesOverview')
    }
    const onClose = () => {
        navigate('/Invoice/Expenses/ExpensesOverview')
    }
    return (
        <div className='h-full w-full flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 w-full pr-4 justify-between items-center gap-2'>
                <h1 className='text-2xl font-semibold text-textprimary'>Add Farm Expenses</h1>
                <div className='flex flex-row gap-3 text-xs items-center justify-end'>
                    <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer hover:font-semibold transition-all duration-200 ease-in-out'>Dashboard</NavLink>
                    <FaAngleRight className='text-textdisable' size={20} />
                    <NavLink to='/Invoice/Expenses/ExpensesOverview' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out hover:font-semibold'>Expenses Overview</NavLink>
                    <FaAngleRight className='text-textdisable' size={20} />
                    <span className='text-xs text-textprimary font-semibold'>Add Farm Expenses</span>
                </div>
            </div>
            <div className='w-full grid md:grid-cols-2 gap-5 pr-4  md:px-32'>
                <div className='w-full flex flex-col gap-5'>
                    <div className='w-full'>
                        <Input2
                            label="Name: *"
                            placeholder="Name"
                            type="text"
                            bg={true}
                            name="year"
                        />
                    </div>
                    <div className='w-full'>
                        <DateTimeInput
                            label="Invoice Date: *"
                            placeholder="dd-MM-YYYY"
                            type="text"
                            bg={true}
                            name="year"
                        />
                    </div>
                    <div className='w-full'>
                        <DateTimeInput
                            label="Purchase Date: *"
                            placeholder="dd-MM-YYYY"
                            type="text"
                            bg={true}
                            name="year"
                        />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className='w-full'>
                            <Select1
                                label='Type: *'
                                options={options}
                            />
                        </div>
                        <div className='w-full'>
                            <Input2
                                label="Quantity: *"
                                placeholder=""
                                type="text"
                                bg={true}
                                name="year"
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <MessageInput
                            label="Note:"
                        />
                    </div>
                    <div className='w-full'>
                        <InputMoney
                            label="Price for each Unit"
                            isDisable={false}
                        />
                    </div>
                    <div className='w-full'>
                        <InputMoney
                            label="Total Price"
                            isDisable={true} />
                    </div>
                </div>
                <div className='w-full flex flex-col gap-5 '>
                    <div className='w-full'>
                        <Input2
                            label="Client Company Name: "
                            placeholder=""
                            type="text"
                            bg={true}
                            name="year"
                        />
                    </div>
                    <div className='w-full'>
                        <Input2
                            label="Client Name: "
                            placeholder=""
                            type="text"
                            bg={true}
                            name="year"
                        />
                    </div>
                    <div className='w-full'>
                        <Input2
                            label="Client Address: "
                            placeholder=""
                            type="text"
                            bg={true}
                            name="year"
                        />
                    </div>
                    <div className='w-full '>
                        <Input2
                            label="Client Phone Number: "
                            placeholder=""
                            type="text"
                            bg={true}
                            name="year"
                        />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row gap-2 md:px-32'>
                <button className='text-xs text-white rounded bg-primary_main px-4 py-2 hover:bg-other20 transition-all duration-200 ease-in-out font-semibold tracking-wide'
                    onClick={handleClick}>
                    Submit
                </button>
                <button className='text-xs text-warning10 font-semibold px-4 py-2 rounded border border-warning10 hover:text-white hover:bg-warning10'
                    onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default ExpensesAddFarm