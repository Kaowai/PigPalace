import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { DateTimeInput, Input2, InputMoney, MessageInput, Select1 } from '../../../components/Input'
import Table2 from '../../../components/TableAddPig'
import Input from 'antd/es/input/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FarmValidation } from '../../../Validation/PigValidation'
import { InlineError } from '../../../Notifications/Error'
import { useDispatch, useSelector } from 'react-redux'
import { createInvoiceProductAction } from '../../../Redux/Actions/InvoiceProductActions'
import { DiamondPercent } from 'lucide-react'
import toast from 'react-hot-toast'
import { createInvoiceProductService } from '../../../Redux/APIs/InvoiceProductService'

export default function ExpensesAddFarm() {
    const [invoiceDate, setInvoiceDate] = useState('a')
    const [saleDate, setSaleDate] = useState('a')
    const [quantity, setQuantity] = useState(0)
    const [priceUnit, setPriceUnit] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { loading, error , invoiceProduct, success} = useSelector(state => state.createInvoiceProduct);

    const options = [
        {
            title: "Feed"
        }, {
            title: 'Vaccine'
        }, {
            title: 'Medicine'
        }
    ]

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(FarmValidation) });

    const onSubmit = async (data) => {
        if (invoiceDate === 'a' || saleDate === 'a') {
            setInvoiceDate('');
            setSaleDate('');
            console.log("Invoice Date is required");
            return;
        }
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        const userID = JSON.parse(localStorage.getItem('userID2'));

        data.ngayLap = invoiceDate;
        data.ngayMua = saleDate;
        data.farmID = farmID;
        data.userID = userID;
        data.giaTien = data.tienTrenDVT;
        data.tongTien = data.soLuong * data.tienTrenDVT;
        if (data.loaiHangHoa === 'Feed') {
            data.donViTinh = 'Kg';
        } else {
            data.donViTinh = 'Dot';
        }

        if (data.loaiHangHoa === 'Feed') { 
            data.loaiHangHoa = 'Thức ăn';
        } else if (data.loaiHangHoa === 'Vaccine') { 
            data.loaiHangHoa = 'Vắc xin'
        } else {
            data.loaiHangHoa = 'Thuốc'
        }

        try {
            const response = await createInvoiceProductService(data.tenHangHoa, data.loaiHangHoa, data.soLuong, data.giaTien, data.ngayLap, data.ngayMua, data.ghiChu, data.tienTrenDVT, data.donViTinh, data.tongTien, data.tenCongTy, data.tenKhachHang, data.diaChi, data.sdt, data.email, userID, farmID);
            console.log(response);
            toast.success("Create Invoice Successfully!");
            navigate('/Invoice/Expenses/ExpensesOverview')
        } catch (error) { 
            toast.error("Create Invoice Failed! Please try again");
            console.log(error);
        }
    }

    const handleClick = () => {
       
    }

    const onClose = () => {
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
                            register={register("tenHangHoa")}
                        />
                        {errors.tenHangHoa && <InlineError text={errors.tenHangHoa.message}></InlineError>}
                    </div>
                    <div className='w-full'>
                        <DateTimeInput
                            label="Invoice Date: *"
                            placeholder="dd-MM-YYYY"
                            type="text"
                            bg={true}
                            name="year"
                            setDate={setInvoiceDate}
                        />
                        {invoiceDate === '' && <InlineError text={"Invoice Date is required"}></InlineError>}
                    </div>
                    <div className='w-full'>
                        <DateTimeInput
                            label="Sale Date: *"
                            placeholder="dd-MM-YYYY"
                            type="text"
                            bg={true}
                            name="year"
                            setDate={setSaleDate}
                        />
                        {saleDate === '' && <InlineError text={"Purchase Date is required"}></InlineError>}
                    </div>
                    <div className='flex flex-row gap-2'>
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
                                label="Quantity: *"
                                placeholder=""
                                type="text"
                                bg={true}
                                register={register("soLuong")}
                                onChange={setQuantity}
                                name="year"
                            />
                            {
                                errors.soLuong && <InlineError text={errors.soLuong.message}></InlineError>
                            }
                        </div>
                    </div>
                    <div className='w-full'>
                        <MessageInput
                            label="Note:"
                            register={register("ghiChu")}
                        />
                        {errors.ghiChu && <InlineError text={errors.ghiChu.message}></InlineError>}
                    </div>

                </div>
                <div className='w-full flex flex-col gap-5 '>
                    <div className='w-full'>
                        <Input2
                            label="Client Company Name: "
                            placeholder=""
                            type="text"
                            register={register("tenCongTy")}
                            bg={true}
                            name="year"
                        />
                        {errors.tenCongTy && <InlineError text={errors.tenCongTy.message}></InlineError>}
                    </div>
                    <div className='w-full'>
                        <Input2
                            label="Client Name: "
                            placeholder=""
                            type="text"
                            bg={true}
                            register={register("tenKhachHang")}
                            name="year"
                        />
                        {errors.tenKhachHang && <InlineError text={errors.tenKhachHang.message}></InlineError>}
                    </div>
                    <div className='w-full'>
                        <Input2
                            label="Client Address: "
                            placeholder=""
                            type="text"
                            bg={true}
                            register={register("diaChi")}
                            name="year"
                        />
                        {errors.diaChi && <InlineError text={errors.diaChi.message}></InlineError>}
                    </div>
                    <div className='w-full '>
                        <Input2
                            label="Client Phone Number: "
                            placeholder=""
                            type="text"
                            register={register("sdt")}
                            bg={true}
                            name="year"
                        />
                        {errors.sdt && <InlineError text={errors.sdt.message}></InlineError>}
                    </div>
                    <div className='w-full '>
                        <Input2
                            label="Client email: "
                            placeholder=""
                            type="text"
                            register={register("email")}
                            bg={true}
                            name="year"
                        />
                        {errors.email && <InlineError text={errors.email.message}></InlineError>}
                    </div>
                    <div className='w-full'>
                        <Input2
                            label="Price for unit ($): * "
                            placeholder=""
                            type="number"
                            register={register("tienTrenDVT")}
                            bg={true}
                            name="year"
                            onChange={setPriceUnit}
                        />
                        {errors.tienTrenDVT && <InlineError text={errors.tienTrenDVT.message}></InlineError>}
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row gap-2 md:px-32'>
                <button className='text-xs text-white rounded bg-primary_main px-4 py-2 hover:bg-other20 transition-all duration-200 ease-in-out font-semibold tracking-wide'
                    onClick={handleSubmit(onSubmit)}>
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

