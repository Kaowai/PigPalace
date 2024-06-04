import React, { useState } from 'react'
import MainModal from './ModalMain/MainModal'
import { DateTimeInput, Input2, InputMoney, MessageInput, MultiSelect, Select1 } from '../Input'
import { Checkbox } from 'antd'

export default function PigAddModal({ name, isvisible, onClose }) {

    const [isFromFarm, setIsFromFarm] = useState(false);
    const options = [
        {
            title: 'Male'
        },
        {
            title: 'Female'
        }
    ]

    const optionsBreed = [
        {
            label: 'Berkshire',
            value: 'Berkshire'
        },
        {
            label: 'Duroc',
            value: 'Duroc'
        },
        {
            label: 'Hampshire',
            value: 'Hampshire'
        },
        {
            label: 'Landrace',
            value: 'Landrace'
        },
        {
            label: 'Yorkshire',
            value: 'Yorkshire'
        },
        {
            label: 'Chester White',
            value: 'Chester White'
        },
        {
            label: 'Poland China',
            value: 'Poland China'
        },
        {
            label: 'Spotted',
            value: 'Spotted'
        },
        {
            label: 'Tamworth',
            value: 'Tamworth'
        },
        {
            label: 'Vietnamese Potbelly',
            value: 'Vietnamese Potbelly'
        }

    ]
    const optionsBarn = [
        {
            title: 'Barn 1'
        },
        {
            title: 'Barn 2'
        },
        {
            title: 'Barn 3'
        }
    ]
    return (
        <MainModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='w-full h-full grid md:grid-cols-2 py-2 gap-12 px-6'>
                <div className='w-full grid md:grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full' >
                            <Input2
                                label='ID: *'
                                placeholder='PIG001'
                                type='text'
                                isDisable={true}
                                value='PIG001'
                            />
                        </div>
                        <div className='w-full' >
                            <Select1
                                label='Gender: *'
                                options={options}
                            />
                        </div>
                        <div className='w-full'>
                            <MultiSelect label='Breed: *' options={optionsBreed} />
                        </div>
                        <div className='w-full'>
                            <MessageInput label="Note: *" />
                        </div>
                        <div className='flex flex-row gap-3'>
                            <button className='button-submit-2' onClick={onClose}>
                                Submit
                            </button>
                            <button className='button-cancel' onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full'>
                            <Input2
                                label='Name: *'
                                placeholder=''
                                type='text'
                                isDisable={false}
                                name='pigid'
                            />
                        </div>
                        <div className='w-full'>
                            <DateTimeInput label="Date of Birth: *" />
                        </div>
                        <div className='w-full'>
                            <Select1 label="Pig Barn: *" options={optionsBarn} />
                        </div>
                    </div>
                </div>
                <div className='w-full grid md:grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full' >
                            <Input2
                                label='Father Tag ID: *'
                                placeholder=''
                                type='text'
                                isDisable={isFromFarm}
                            />
                        </div>
                        <div className='w-full' >
                            <Checkbox className='font-semibold text-xs' onChange={() => setIsFromFarm(!isFromFarm)}>Out the farm?</Checkbox>
                        </div>
                        <div className='w-full'>
                            <Input2
                                label='Weight (Kg): *'
                                placeholder=''
                                type='number'
                            />
                        </div>
                        <div className='w-full'>
                            <Input2
                                label='Color: *'
                                placeholder=''
                                type='text'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full'>
                            <Input2
                                label='Mother Tag ID: *'
                                placeholder=''
                                type='text'
                                isDisable={isFromFarm}
                                name='pigid'
                            />
                        </div>
                        <div className='w-full invisible' >
                            <Checkbox className='font-semibold' onChange={() => setIsFromFarm(!isFromFarm)}>Out the farm?</Checkbox>
                        </div>
                        <div className='w-full'>
                            <Input2
                                label='Height (cm):  *'
                                placeholder=''
                                type='number'
                            />
                        </div>
                        <div className='w-full'>
                            <InputMoney label="Price: *" isDisable={false} />
                        </div>
                    </div>
                </div>

            </div>
        </MainModal>
    )
}
