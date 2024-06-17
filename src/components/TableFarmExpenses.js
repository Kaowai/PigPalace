import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { CiCirclePlus } from 'react-icons/ci'
import { GoSearch } from 'react-icons/go'
import { IoCheckmark, IoSearchOutline } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import ExpenseModalView from './Modal/PigExpenseModal'
import { DateTimeInput2, Select2 } from './Input'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { BsThreeDotsVertical } from "react-icons/bs";
import { menu } from '@material-tailwind/react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByFarmIDAction } from '../Redux/Actions/UserActions'
import { formatDate } from '../Functionalities/GlobalFunctions'
import { confirmInvoiceProductAction } from '../Redux/Actions/InvoiceProductActions'
import toast from 'react-hot-toast'
import { confirmInvoiceProductService, deleteInvoiceProductService } from '../Redux/APIs/InvoiceProductService'
import ModalDelete from './Modal/ModalDelete'


const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-48 '
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-48'

const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function TableFarmExpenses({ data, handleRefresh }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [row, setRow] = useState({});
    const [isConfirm, setIsConfirm] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [rowPerPage, setRowPerPage] = useState(5);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSort, setActiveSort] = useState(false);
    const { user } = useSelector(state => state.getUserByID);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [maHoaDon, setMaHoaDon] = useState('');
    const { success, loading, invoiceProduct, error } = useSelector(state => state.confirmInvoiceProduct);
    const dispatch = useDispatch();


    const handleLeftClick = () => {

    }
    const handleRightLick = () => {

    }

    

    const handleDelete = () => {
        try {
            const response = deleteInvoiceProductService(row.maHoaDon);
            setIsModalDeleteOpen(false);
            toast.success("Delete Invoice Successfully!")
            handleRefresh();
        } catch (error) { 
            console.log(error);
            toast.error("Delete Invoice Failed! Please try again")
        }
    }
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('userID2'));
        dispatch(getUserByFarmIDAction(token));
        console.log(user);
    }, [])

    const handleViewClick = (row) => {
        setIsModalOpen(true);
        setIsConfirm(false);
        setRow(row);
        console.log(row);
    }
    const handleConfirmClick = (row) => {
        setIsModalOpen(true);
        setIsConfirm(true);
        setRow(row);
        console.log(row);
    }

    const handleConfirm = async () => {
        try {
            const response = await confirmInvoiceProductService(row.maHoaDon);
            setIsModalOpen(false);
            toast.success("Confirm Invoice Successfully!")
            handleRefresh();
        } catch (error) { 
            console.log(error);
            toast.error("Confirm Invoice Failed! Please try again")
        }

    }

    return (
        <div className='flex flex-col h-full items-start gap-5 py-2'>
            <ModalDelete name={"Delete Pig"} isvisible={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} onDelete={handleDelete} />
            <div className='flex flex-col justify-start gap-4 w-full'>
                <table className='border rounded-lg'>
                    <thead>
                        <tr className=' bg-textdisable/20'>
                            <th scope='col' className={`${Header} flex flex-row gap-2 items-center`}>
                                <IoIosArrowRoundDown
                                    size={20}
                                    className={`${activeSort ? "text-textdisable" : "text-textprimary"} cursor-pointer`}
                                    onClick={() => setActiveSort(!activeSort)} />
                                <span>Employee</span>
                            </th>
                            <th scope='col' className={`${Header}`}>Type</th>
                            <th scope='col' className={`${Header}`}>Name</th>
                            <th scope='col' className={`${Header}`}>Quantity</th>
                            <th scope='col' className={`${Header}`}>Cost ($)</th>
                            <th scope='col' className={`${Header}`}>Invoice Date</th>
                            <th scope='col' className={`${Header}`}>Status</th>
                            <th scope='col' className={`${Header}`}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                                <td className={`${Row} w-72`}>
                                    <div className='flex flex-row gap-2 justify-start items-center'>
                                        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww border boder-disablebg' alt='avatar' className='w-8 h-8 rounded-full' />
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-xs font-medium text-textprimary'>{user.name}</span>
                                            <span className='text-xs text-textdisable'>{row.maHoaDon}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={`${Row}`}>{row.loaiHangHoa === 'Vắc xin' ? 'Vaccine' : (row.loaiHangHoa === 'Thuốc' ? 'Medicine' : 'Feed')}</td>
                                <td className={`${Row}`}>{row.tenHangHoa}</td>
                                <td className={`${Row}`}>{row.soLuong} ({row.donViTinh})</td>
                                <td className={`${Row}`}>{row.tongTien}</td>
                                <td className={`${Row}`}>{formatDate(row.ngayLap)}</td>
                                <td className={`${Row} `}>
                                    <span className={`${row.trangThai === 'Paid' ? Paid : Progress}`}>{row.trangThai}</span>
                                </td>

                                <td className={`flex py-4 items-center justify-start w-56 gap-2`}>
                                    <div className={`absolute flex ${!menuOpen && "hidden"} flex-col `}>
                                        <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>Confirm</span>
                                        <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>View</span>
                                        <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>Delete</span>
                                    </div>

                                    {
                                        row.trangThai === 'Paid' ? (
                                            <button className='button-view'
                                                onClick={() => handleViewClick(row)}
                                            >
                                                <GoSearch className='text-white' size={16} />
                                                View
                                            </button>
                                        ) : (
                                            <button className='button-confirm'
                                                onClick={() => handleConfirmClick(row)}>
                                                <IoCheckmark size={16} />
                                                Confirm
                                            </button>
                                        )
                                    }
                                    <button className='button-delete'
                                        onClick={() => {setRow(row); setIsModalDeleteOpen(true) }}>
                                        <TiDelete size={16} />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <ExpenseModalView name={isConfirm ? "Confirm Expenses" : "Expenses Pig"} isConfirm={isConfirm} isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} data={row} isFarm={true} handleConfirm={handleConfirm} />
        </div>
    )
}
