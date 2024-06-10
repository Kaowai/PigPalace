import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { IoCheckmark } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'
import ExpenseModalView from './Modal/PigExpenseModal'
import { BsThreeDotsVertical } from "react-icons/bs";


const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-56 '
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-56'
const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function TablePig({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [row, setRow] = useState({});
    const [activeSort, setActiveSort] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
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
        <div className='flex flex-col h-full items-start gap-5 py-2' >
            <div className='overflow-x-auto'>
                <table className='border rounded-lg'>
                    <thead>
                        <tr className=' bg-textdisable/20 border-textdisable'>
                            {/* <th scope='col' className={`${Header} flex flex-row gap-2 items-center`}>
                                <IoIosArrowRoundDown
                                    size={20}
                                    className={`${activeSort ? "text-textdisable" : "text-textprimary"} cursor-pointer`}
                                    onClick={() => setActiveSort(!activeSort)} />
                                <span>Employee</span>
                            </th> */}
                            <th scope='col' className={`${Header}`}>PigID</th>
                            <th scope='col' className={`${Header}`}>Breed</th>
                            <th scope='col' className={`${Header}`}>Pig Barn</th>
                            <th scope='col' className={`${Header}`}>Age</th>
                            <th scope='col' className={`${Header}`}>Gender</th>
                            <th scope='col' className={`${Header}`}>Cost</th>
                            <th scope='col' className={`${Header}`}>Date</th>
                            <th scope='col' className={`${Header}`}>Status</th>
                            <th scope='col' className={`${Header}`}>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(row => (
                            <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                                <td className={`${Row}`}>{row.MaHeo}</td>
                                <td className={`${Row}`}>{row.MaGiongHeo}</td>
                                <td className={`${Row}`}>{row.MaChuong}</td>
                                <td className={`${Row}`}>{row.NgaySinh}</td>
                                <td className={`${Row}`}>{
                                    row.GioiTinh === '1' ? "Male" : "Female"
                                }</td>
                                <td className={`${Row}`}>{row.DonGiaNhap}</td>
                                <td className={`${Row}`}>{row.NgayDenTrangTrai}</td>
                                <td className={`${Row}`}>
                                    <span className={`${row.IsTrongTrangTrai === '1' ? Paid : Progress}`}>{row.IsTrongTrangTrai === '1' ? "In Farm" : "Exported"}</span>
                                </td>
                                <td className={`${Row}`}>
                                    <BsThreeDotsVertical size={20}/>

                                </td>
                                
                                {/* <td className='flex flex-row items-start gap-2 py-3 px-2 w-56 '>
                                    {
                                        row.status === 'Paid' ? (
                                            <button className='button-view'
                                                onClick={() => handleViewClick(row)}>
                                                <GoSearch className='text-white' size={16} />
                                                View
                                            </button>
                                        ) : (
                                            <button
                                                className='button-confirm'
                                                onClick={() => handleConfirmClick(row)}>
                                                <IoCheckmark size={16} />
                                                Confirm
                                            </button>
                                        )
                                    }
                                    <button className='flex flex-row rounded text-xs text-warning10 px-3 py-2 border border-warning10 items-center gap-1 hover:bg-warning10 transition-all duration-200 hover:text-white'
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
            <ExpenseModalView name={isConfirm ? "Confirm Expenses" : "Expenses Pig"} isConfirm={isConfirm} isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} data={row} />
        </div>
    )
}
