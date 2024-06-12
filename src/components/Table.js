import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoCheckmark } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'
import ExpenseModal from './Modal/PigExpenseModal'
import { IoIosArrowRoundDown } from "react-icons/io";


const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-56 '
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-56'

const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function Table({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [row, setRow] = useState({});
    const [isConfirm, setIsConfirm] = useState(false);
    const [activeSort, setActiveSort] = useState(false);
    const handleDelete = (row) => {

    }
    const [dataPig, setDataPig] = useState([
        { id: 'PIG001', name: 'Pig 1', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG002', name: 'Pig 2', breed: 'Yorkshire', age: '12 Months', gender: 'Female', cost: '$3000' },
        { id: 'PIG003', name: 'Pig 3', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' }
      ]);
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
        <div className='flex flex-col h-full items-start gap-5 py-2' >
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
                            <th scope='col' className={`${Header}`}>Invoice Date</th>
                            <th scope='col' className={`${Header}`}>Status</th>
                            <th scope='col' className={`${Header} w-56`}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                                <td className={`${Row}`}>
                                    <div className='flex flex-row gap-2 justify-start items-center'>
                                        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww border boder-disablebg' alt='avatar' className='w-8 h-8 rounded-full' />
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-xs font-medium text-textprimary'>{row.userID}</span>
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ExpenseModal name={isConfirm ? "Confirm Expenses" : "Expenses Pig"} isConfirm={isConfirm} isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} data={row} dataPig={dataPig}/>
        </div>
    )
}
