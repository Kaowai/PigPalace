import React, { useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoCheckmark } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'
import ExpenseModal from './Modal/PigExpenseModal'
import { IoIosArrowRoundDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { deleteInvoicePigAction, getListPigInInvoiceImportAction } from '../Redux/Actions/InvoicePigActions'
import { getPigByIDAction } from '../Redux/Actions/PigActions'
import { getListPigInInvoiceService } from '../Redux/APIs/InvoicePigService'
import { getUserByFarmIDAction, getUserByIDAction } from '../Redux/Actions/UserActions'
import ModalDelete from './Modal/ModalDelete'
import { set } from 'react-hook-form'
import toast from 'react-hot-toast'
import { getUserByIDService } from '../Redux/APIs/UserService'
import { getPigInVaccineScheduleReducer } from '../Redux/Reducers/VaccineScheduleReducers'
import { confirmInvoicePigImportService } from '../Redux/APIs/InvoicePigService'

const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-56 '
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-56'

const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function Table({ data, handleRefresh }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [activeSort, setActiveSort] = useState(false);
    const [rowData, setRowData] = useState([{}]);
    const dispatch = useDispatch();
    const { pigs } = useSelector(state => state.getListPigInInvoice);
    const { pig } = useSelector(state => state.getPigByID);
    const { user } = useSelector(state => state.getUserByID);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const { success, loading, invoice, error } = useSelector(state => state.deleteInvoicePig);
    const [maHoaDon, setMaHoaDon] = useState('');

    const handleDelete = () => {
        dispatch(deleteInvoicePigAction(maHoaDon));
    }

    useEffect(() => {
        if (success) {
            setIsModalDeleteOpen(false);
            toast.success("Delete Invoice Successfully!")
            handleRefresh();
        }
        if (error) {
            toast.error("Delete Invoice Failed! Please try again")
        }
    }, [success, loading, invoice, error])

    useEffect(() => {
        dispatch(getListPigInInvoiceImportAction(rowData.maHoaDon, rowData.farmID));
        console.log(pigs);
    }, [rowData])

    useEffect(() => {
        getPig();
    }, [dispatch])

    const getPig = async () => {
        const token = JSON.parse(localStorage.getItem('userID2'));
        dispatch(getUserByIDAction(token));
        console.log(user);
    }

    const handleViewClick = (row) => {
        setIsModalOpen(true);
        setIsConfirm(false);
        setRowData(row);
    }
    const handleConfirm = async () => {
        try {
            await confirmInvoicePigImportService(rowData.maHoaDon);
            setIsModalOpen(false);
            toast.success("Confirm Invoice Successfully!")
            handleRefresh();
        } catch (error) {
            console.log(error);
            toast.error("Confirm Invoice Failed! Please try again");
        }
    }




    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Định dạng ngày với các tùy chọn cụ thể
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        // Định dạng lại để thêm dấu phẩy
        const parts = formattedDate.split(' ');
        return `${parts[0]} ${parts[1]} ${parts[2].replace(',', '')}`;
    }

    return (
        <div className='flex flex-col h-full items-start gap-5' >
            <ModalDelete name={"Delete Pig"} isvisible={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} onDelete={handleDelete} />
            <div className='overflow-x-auto'>
                <table className='border rounded-lg'>
                    <thead>
                        <tr className=' bg-textdisable/20 border-textdisable'>
                            <th scope='col' className={`${Header} flex flex-row gap-2 items-center`}>
                                <IoIosArrowRoundDown
                                    size={20}
                                    className={`${activeSort ? "text-textdisable" : "text-textprimary"} cursor-pointer`}
                                    onClick={() => setActiveSort(!activeSort)} />
                                <span>Employee</span>
                            </th>
                            <th scope='col' className={`${Header}`}>Amount</th>
                            <th scope='col' className={`${Header}`}>Cost</th>
                            <th scope='col' className={`${Header} flex flex-row gap-2 items-center`}>
                                <span>Invoice Date</span>
                                <IoIosArrowRoundDown
                                    size={20}
                                    className={`${activeSort ? "text-textdisable" : "text-textprimary"} cursor-pointer`}
                                    onClick={() => setActiveSort(!activeSort)} />
                            </th>
                            <th scope='col' className={`${Header}`}>Status</th>
                            <th scope='col' className={`${Header} w-56`}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length === 0 &&
                            <tr>
                                <td colSpan='6' className='text-xs font-normal text-textprimary px-2 py-3 text-start whitespace-nowrap w-56'>
                                    No data
                                </td>
                            </tr>
                        }
                        {data?.map(row => (
                            <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                                <td className={`${Row}`}>
                                    <div className='flex flex-row gap-2 justify-start items-center'>
                                        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww border boder-disablebg' alt='avatar' className='w-8 h-8 rounded-full' />
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-xs font-medium text-textprimary'>{user.name}</span>
                                            <span className='text-xs text-textdisable'>{row.maHoaDon}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={`${Row}`}>{row.soLuong}</td>
                                <td className={`${Row}`}>{row.tongTien}</td>
                                <td className={`${Row}`}>{formatDate(row.ngayLap)}</td>
                                <td className={`${Row}`}>
                                    <span className={`${row.trangThai === 'Paid' ? Paid : Progress}`}>{row.trangThai}</span>
                                </td>
                                <td className='flex flex-row items-start gap-2 py-3 px-2 w-56 '>
                                    {
                                        row.trangThai === 'Paid' ? (
                                            <button className='button-view'
                                                onClick={() => handleViewClick(row)}>
                                                <GoSearch className='text-white' size={16} />
                                                View
                                            </button>
                                        ) : (
                                            <button
                                                className='button-confirm'
                                                onClick={() => {
                                                    setRowData(row);
                                                    setIsModalOpen(true);
                                                    setMaHoaDon(row.maHoaDon);
                                                    setIsConfirm(true);
                                                    getPig();
                                                }}>
                                                <IoCheckmark size={16} />
                                                Confirm
                                            </button>
                                        )
                                    }
                                    <button className='flex flex-row rounded text-xs text-warning10 px-3 py-2 border border-warning10 items-center gap-1 hover:bg-warning10 transition-all duration-200 hover:text-white'
                                        onClick={() => { setMaHoaDon(row.maHoaDon) }}>
                                        <TiDelete size={16} />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ExpenseModal name={isConfirm ? "Confirm Expenses" : "Expenses Pig"} isConfirm={isConfirm} isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} data={rowData} dataPig={pigs} handleConfirm={handleConfirm} />
        </div>
    )
}
