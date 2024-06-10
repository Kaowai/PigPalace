import { Select } from 'antd'
import React, { useState } from 'react'
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


const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-56 '
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-56'

const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function TableFarmExpenses({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [row, setRow] = useState({});
    const [isConfirm, setIsConfirm] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [rowPerPage, setRowPerPage] = useState(5);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSort, setActiveSort] = useState(false);
    const handleLeftClick = () => {

    }
    const handleRightLick = () => {

    }
    const handleMenuClick = (id) => {
        setMenuOpen(menuOpen === id ? null : id);
    };

    const handleDelete = (row) => {

    }

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



    return (
        <div className='flex flex-col h-full items-start gap-5 py-2'>
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
                            <th scope='col' className={`${Header}`}>Cost</th>
                            <th scope='col' className={`${Header}`}>Invoice Date</th>
                            <th scope='col' className={`${Header}`}>Status</th>
                            <th scope='col' className={`${Header}`}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                                <td className={`${Row} w-96`}>
                                    <div className='flex flex-row gap-2 justify-start items-center'>
                                        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww border boder-disablebg' alt='avatar' className='w-8 h-8 rounded-full' />
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-xs font-medium text-textprimary'>{row.employee}</span>
                                            <span className='text-xs text-textdisable'>{row.id}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={`${Row}`}>{row.type}</td>
                                <td className={`${Row}`}>{row.name}</td>
                                <td className={`${Row}`}>{row.quantity}</td>
                                <td className={`${Row}`}>{row.cost}</td>
                                <td className={`${Row}`}>{row.invoiceDate}</td>
                                <td className={`${Row} `}>
                                    <span className={`${row.status === 'Paid' ? Paid : Progress}`}>{row.status}</span>
                                </td>
                                <td className={`flex py-5 items-center justify-start relative`}>
                                    <BsThreeDotsVertical size={16} className='w-4 h-4 rounded-full hover:bg-slate-200 transition-all relative' onClick={() => handleMenuClick(row.id)} />
                                    {menuOpen === row.id && (
                                        <div className='absolute flex flex-col menu-container bg-white shadow-md border border-gray-200 rounded-md z-10'>
                                            <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>Confirm</span>
                                            <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>View</span>
                                            <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>Delete</span>
                                        </div>
                                    )}
                                </td>
                                {/* <td className={`flex py-5 items-center justify-start`}>
                                    <BsThreeDotsVertical size={16} className='w-4 h-4 rounded-full hover:bg-slate-200 transition-all relative' onClick={() => setMenuOpen(true)}/>

                                    <div className={`absolute flex ${!menuOpen && "hidden"} flex-col `}>
                                        <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>Confirm</span>
                                        <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>View</span>
                                        <span className='p-2 hover:bg-textdisable text-xs font-medium text-textprimary cursor-pointer transition-all'>Delete</span>
                                    </div>

                                    {
                                        row.status === 'Paid' ? (
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
                                        onClick={() => { handleDelete(row) }}>
                                        <TiDelete size={16} />
                                        Delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ExpenseModalView name={isConfirm ? "Confirm Expenses" : "Expenses Pig"} isConfirm={isConfirm} isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} data={row} isFarm={true} />
        </div>
    )
}
