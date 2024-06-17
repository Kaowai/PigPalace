import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import EventModal from './ModalMain/EventsModal';
import { Input2, Select1 } from '../Input';
import { InlineError } from '../../Notifications/Error';
import { ProductValidation } from '../../Validation/PigValidation';
import { updateProductService } from '../../Redux/APIs/ProductService';
import toast from 'react-hot-toast';

export default function ProductModal({ name, isvisible, onClose, product }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ProductValidation) });

    const options = [
        {
            title: "Feed"
        }, {
            title: 'Vaccine'
        }, {
            title: 'Medicine'
        }
    ]

    const onsubmit = async (data) => {
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        data.ngayHetHan = '2025-12-12';
        try {
            const response = updateProductService(data.tenHangHoa, data.loaiHangHoa, data.tonKho, data.giaTriToiThieu, data.tienMuaTrenMotDonVi, data.donViTinh, farmID);
            toast.success('Update successfully');
            onClose();
        } catch (error) {
            toast.error(error);
            toast.error('Update failed');
        }
    }
    return (
        <EventModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='flex flex-col gap-5 px-4 py-6 justify-center items-center'>
                <div className='w-full'>
                    <Input2
                        label='Name: *'
                        placeholder={product ? product.tenHangHoa : 'Enter product name'}
                        register={register("tenHangHoa")}
                    />
                    {errors.tenHangHoa && <InlineError text={errors.tenHangHoa.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <Select1
                        label='Type: *'
                        options={options}
                        register={register("loaiHangHoa")}
                    />
                    {errors.loaiHangHoa && <InlineError text={errors.loaiHangHoa.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <Input2
                        label='Stock: *'
                        type={'number'}
                        placeholder={product ? product.tonKho : 'Enter stock'}
                        register={register("tonKho")}
                    />
                    {errors.tonKho && <InlineError text={errors.tonKho.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <Input2
                        label='Minimum Value: *'
                        type={'number'}
                        placeholder={product ? product.giaTriToiThieu : 'Enter stock'}
                        register={register("giaTriToiThieu")}
                    />
                    {errors.giaTriToiThieu && <InlineError text={errors.giaTriToiThieu.message}></InlineError>}
                </div>

                <div className='w-full'>
                    <Input2
                        label='Price per Unit: *'
                        type={'number'}
                        placeholder={product ? product.tienMuaTrenMotDonVi : 'Price per unit'}
                        register={register("tienMuaTrenMotDonVi")}
                    />
                    {errors.tienMuaTrenMotDonVi && <InlineError text={errors.tienMuaTrenMotDonVi.message}></InlineError>}
                </div>
                <div className='w-full'>
                    <Input2
                        label='Unit: *'
                        type={'text'}
                        placeholder={product ? product.donViTinh : 'Unit'}
                        register={register("donViTinh")}
                    />
                    {errors.donViTinh && <InlineError text={errors.donViTinh.message}></InlineError>}
                </div>
                
                <div className='flex justify-start items-start w-full'>
                    <button className='button-submit' onClick={handleSubmit(onsubmit)}>
                        Submit
                    </button>
                </div>
            </div>
        </EventModal>
    )
}
