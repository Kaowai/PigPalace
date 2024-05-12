import { Select } from 'antd'
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import { IoCheckmark } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'


const Header = 'text-sm font-bold text-textprimary pl-2 pr-10 mx-1 py-2 items-start'
const Row = 'text-sm  font-normal text-textprimary pl-2 pr-10 mx-1 py-3 items-start'

const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function Table() {
    const data = [
        { id: 'INV04052024', type: 'PIG', amount: 15, cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Progress' },
        { id: 'INV04032024', type: 'PIG', amount: 15, cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Paid' },
        { id: 'INV04032024', type: 'PIG', amount: 15, cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Paid' },
        { id: 'INV04032024', type: 'PIG', amount: 15, cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Paid' },
        { id: 'INV04032024', type: 'PIG', amount: 15, cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Paid' },
    ];

    return (
        <div className='flex flex-col w-fit h-fit items-start gap-5 '>
            <div className='flex flex-row justify-between w-full items-center' >
                <div className='items-center gap-2 w-fit flex-row flex text-xs  font-normal text-textsecondary'>
                    Show
                    <Select className='h-6 text-xs font-semibold' options={[{ value: '10', label: <span>10</span> }, { value: '15', label: <span>15</span> }]} />
                    entries
                </div>
                <div className='flex flex-row gap-3 text-xs items-center '>
                    Search:
                    <input type='text' className='text-textsecondary text-xs font-normal items-start text-wra h-6 w-48 border border-textdisable rounded pl-2' >
                    </input>
                </div>
            </div>

            <div className='flex flex-col justify-start gap-0'>
                <div className='flex flex-row gap-0 items-center'>
                    <select className='bg-viewbg_hover py-2 text-white text-sm rounded-l-sm'>
                        <option value="all">All</option>
                        <option value="imported">Imported</option>
                        <option value='exported'>Exported</option>
                    </select>
                    <select className='bg-viewbg text-white p-2 text-sm'>
                        <option value="all">All</option>
                        <option value="imported">2024</option>
                        <option value='exported'>2023</option>
                    </select>
                    <select className='bg-viewbg text-white p-2 text-sm rounded-r-sm'>
                        <option value="all">All</option>
                        <option value="imported">Progress</option>
                        <option value='exported'>Paid</option>
                    </select>

                </div>
                <table className='border border-textdisable rounded-lg'>
                    <thead>
                        <tr className=' bg-textdisable/20 border-textdisable border-b'>
                            <th scope='col' className={`${Header}`}>ID Invoice</th>
                            <th scope='col' className={`${Header}`}>Type</th>
                            <th scope='col' className={`${Header}`}>Amount</th>
                            <th scope='col' className={`${Header}`}>Cost</th>
                            <th scope='col' className={`${Header}`}>Invoice Date</th>
                            <th scope='col' className={`${Header}`}>Purchase Date</th>
                            <th scope='col' className={`${Header}`}>Status</th>
                            <th scope='col' className={`${Header}`}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr className=' border-textdisable border-b hover:bg-slate-100' key={row.id}>
                                <td className={`${Row}`}>{row.id}</td>
                                <td className={`${Row}`}>{row.type}</td>
                                <td className={`${Row}`}>{row.amount}</td>
                                <td className={`${Row}`}>{row.cost}</td>
                                <td className={`${Row}`}>{row.invoiceDate}</td>
                                <td className={`${Row}`}>{row.purchaseDate}</td>
                                <td className={`${Row} `}>
                                    <span className={`${row.status === 'Paid' ? Paid : Progress}`}>{row.status}</span>
                                </td>
                                <td className={`flex flex-row items-start gap-2 py-3 px-2`}>

                                    {
                                        row.status === 'Paid' ? (
                                            <button className='flex flex-row rounded text-xs text-white px-3 py-2 bg-viewbg gap-1 hover:bg-viewbg_hover transition-all duration-200'>
                                                <GoSearch className='text-white' size={16} />
                                                View
                                            </button>
                                        ) : (
                                            <button className='flex flex-row rounded text-xs text-white px-3 py-2 bg-success_bg gap-1 hover:bg-success_bg_hover transition-all duration-200'>
                                                <IoCheckmark size={16} />
                                                Confirm
                                            </button>
                                        )
                                    }
                                    <button className='flex flex-row rounded text-xs text-warning10 px-3 py-2 border border-warning10 items-center gap-1 hover:bg-warning10 transition-all duration-200 hover:text-white'>
                                        <TiDelete size={16} />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='flex flex-row justify-between items-center w-full'>
                <span className='text-xs text-textprimary font-bold'>
                    Show 1 to 2 of 2 entries
                </span>
                <div className='flex flex-row justify-center items-center gap-5'>
                    <AiOutlineLeft className='text-textdisable' size={20} />
                    <span
                        className='w-8 pt-2 h-8 text-center text-xs rounded-full bg-success_bg_hover text-white'>
                        1
                    </span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold'>2</span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold'>3</span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold'>4</span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold'>5</span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold'>...</span>
                    <AiOutlineRight className='text-textprimary cursor-pointer hover:bg-slate-200' size={20} />
                </div>
            </div>
        </div>
    )
}