import React, { useEffect, useState } from 'react'
import EventModal from './ModalMain/EventsModal'
import { DateTimeInput, Input2, InputPassword, Select1 } from '../Input'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterUserValidation } from '../../Validation/UserValidation';
import { InlineError } from '../../Notifications/Error';
import { Title } from 'chart.js';
import MainModal from './ModalMain/MainModal';
import { useDispatch, useSelector } from 'react-redux';
import { getRoleAction } from '../../Redux/Actions/RoleActions';
import { signUpService } from '../../Redux/APIs/UserService';
import toast from 'react-hot-toast';

export default function UserInfoModal({ name, isvisible, onClose, user }) {
    const [isError, setIsError] = useState(false);
    const [date, setDate] = useState('');
    const onsubmit = async (data) => {
        if (date === '') {
            setIsError(true);
            return;
        } else {
            setIsError(false);
        }
        console.log(date);
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        data.farmID = farmID;
        const roleName = roleInfo.find(role => role.roleID === data.roleName).roleName;
        data.roleName = roleName;
        data.dateOfBirth = date;
        console.log(data);

        try {
            await signUpService(data.farmID, data.name, data.password, date, data.address, data.email, data.phoneNumber, data.sex, data.coefficientsSalary, roleName);
            toast.success('Create user successfully');
            onClose();
        } catch (err) {
            toast.error(err.message);
        }
    }
    const dispatch = useDispatch();
    const { roleInfo } = useSelector(state => state.roleGetAll);

    useEffect(() => {
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        dispatch(getRoleAction(farmID));
    }, [isvisible])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(RegisterUserValidation) });
    return (
        <MainModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='grid grid-cols-2 gap-5 px-4 py-6 justify-center items-center'>
                <div className='w-full'>
                    <Input2
                        label='Name: *'
                        defaultValue={user?.name ? user.name : ''}
                        placeholder={'Enter name'}
                        register={register("name")}
                    />
                    {errors.name && <InlineError text={errors.name.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <Input2
                        label='Email: *'
                        placeholder={'Enter email'}
                        type={'text'}
                        register={register("email")}
                    />
                    {errors.email && <InlineError text={errors.email.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <Input2
                        placeholder="Password"
                        label={'Password: *'}
                        type='text'
                        name='password'
                        register={register("password")}
                    />
                    {errors.password && <InlineError text={errors.password.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <Input2
                        placeholder="Address"
                        label={'Address: *'}
                        type='text'
                        name='password'
                        register={register("address")}
                    />
                    {errors.address && <InlineError text={errors.address.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <DateTimeInput
                        label='Date of Birth: *'
                        placeholder='dd-MM-YYYY'
                        setDate={setDate}
                        setError={setIsError}
                    />
                    {isError && <InlineError text='Please enter a valid date'></InlineError>}
                </div>
                <div className='w-full'>
                    <Input2
                        label='Phone: *'
                        placeholder={'Enter phone'}
                        register={register("phoneNumber")}
                    />
                    {errors.phoneNumber && <InlineError text={errors.phoneNumber.message}></InlineError>}
                </div>

                <div className='w-full'>
                    <Select1
                        label={'Gender: *'}
                        options={[{ value: 'Male', title: 'Male' }, { value: 'Female', title: 'Female' }]}
                        register={register("sex")}
                    />
                    {errors.sex && <InlineError text={errors.sex.message} />}
                </div>
                <div className='w-full'>
                    <Input2
                        label='Coefficients Salary: *'
                        placeholder={'Enter coefficients salary'}
                        register={register("coefficientsSalary")}
                    />
                    {errors.coefficientsSalary && <InlineError text={errors.coefficientsSalary.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <div className="text-xs w-full relative">
                        <label className="text-secondary60 font-semibold text-xs">Role: *</label>
                        <select
                            {...register('roleName')}
                            placeholder={"Select sows..."}
                            className={`w-full text-xs border mt-2 bg-white  h-8 rounded text-textprimary py-1 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500`} >
                            {
                                roleInfo?.map((option, index) => {
                                    return (
                                        <option key={index} value={option.roleID}>{option.roleName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                <div className='flex justify-start items-start w-full col-span-2'>
                    <button className='button-submit' onClick={handleSubmit(onsubmit)}>
                        Submit
                    </button>
                </div>
            </div>
        </MainModal>
    )
}
