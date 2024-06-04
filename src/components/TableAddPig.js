import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { InputMoney } from './Input';
import PigModal from './Modal/ModalMain/MainModal';
import MainModal from './Modal/ModalMain/MainModal';
import PigAddModal from './Modal/PigAddModal';
import ModalDelete from './Modal/ModalDelete';
import { data } from '../Data/PigDataSample'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function TableAddPig({ isView }) {


    const Header = 'text-xs font-bold text-textprimary px-2 py-2 text-start'
    const Row = 'text-xs  font-normal text-textprimary px-2 pr-8 py-3 text-start'
    const [data, setData] = useState([
        { id: 'PIG001', name: 'Pig 1', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG002', name: 'Pig 2', breed: 'Yorkshire', age: '12 Months', gender: 'Female', cost: '$3000' },
        { id: 'PIG003', name: 'Pig 3', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG004', name: 'Pig 1', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG005', name: 'Pig 2', breed: 'Yorkshire', age: '12 Months', gender: 'Female', cost: '$3000' },
        { id: 'PIG006', name: 'Pig 3', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG007', name: 'Pig 1', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG008', name: 'Pig 2', breed: 'Yorkshire', age: '12 Months', gender: 'Female', cost: '$3000' },
        { id: 'PIG009', name: 'Pig 3', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG010', name: 'Pig 1', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG011', name: 'Pig 2', breed: 'Yorkshire', age: '12 Months', gender: 'Female', cost: '$3000' },
        { id: 'PIG012', name: 'Pig 3', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [deleteID, setDeleteID] = useState('');

    const handleClickDelete = (id) => {
        console.log(id);
        setDeleteID(id);
        setIsModalDeleteOpen(true);
    }
    const handleDelete = () => {
        setData(pre => {
            const newArray = [...pre]
            return newArray.filter(item => item.id !== deleteID)
        })
        setIsModalDeleteOpen(false);
    }



    return (
        <div className='w-full h-full flex flex-col gap-5 items-start'>
            <ModalDelete name={"Delete Pig"} isvisible={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} onDelete={handleDelete} />
            <div className='w-full'>
                <div className='w-full bg-info_bg/45 py-2'>
                    <p className='text-sm text-textprimary pl-2 font-semibold'>List Pig Exported</p>
                </div>
                <table className='border border-textdisable rounded-lg w-full'>
                    <thead>
                        <tr className=' bg-textdisable/20 border-textdisable border-b'>
                            <th scope='col' className={`${Header}`}>PigID</th>
                            <th scope='col' className={`${Header}`}>Pig Name</th>
                            <th scope='col' className={`${Header}`}>Breed</th>
                            <th scope='col' className={`${Header}`}>Age</th>
                            <th scope='col' className={`${Header}`}>Gender</th>
                            <th scope='col' className={`${Header}`}>Cost ($)</th>
                            {!isView && <th scope='col' className={`${Header}`}></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 && <tr className='border-textdisable border-b hover:bg-slate-100'><td colSpan={7} className='text-center py-3'>No pig have added</td></tr>}
                        {data.map(row => (
                            <tr className=' border-textdisable border-b hover:bg-slate-100' key={row.id}>
                                <td className={`${Row}`}>{row.id}</td>
                                <td className={`${Row}`}>{row.name}</td>
                                <td className={`${Row}`}>{row.breed}</td>
                                <td className={`${Row}`}>{row.age}</td>
                                <td className={`${Row}`}>{row.gender}</td>
                                <td className={`${Row}`}>{row.cost}</td>
                                {
                                    !isView &&
                                    <td className={`flex flex-row items-start gap-2 py-3 px-2`}>

                                        <button className='flex flex-row rounded text-xs text-warning10 px-3 py-2 border border-warning10 items-center gap-1 hover:bg-warning10 transition-all duration-200 hover:text-white' onClick={() => { handleClickDelete(row.id) }}>
                                            <TiDelete size={16} />
                                            Delete
                                        </button>
                                    </td>
                                }

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
                    <AiOutlineLeft className='text-textdisable' size={16} />
                    <span
                        className='w-8 pt-2 h-8 text-center text-xs rounded-full bg-success_bg_hover text-white'>
                        1
                    </span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold transition-all duration-200 ease-in-out'>2</span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold transition-all duration-200 ease-in-out'>3</span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold transition-all duration-200 ease-in-out'>4</span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold transition-all duration-200 ease-in-out'>5</span>
                    <span className='text-textprimary text-xs cursor-pointer hover:font-bold transition-all duration-200 ease-in-out'>...</span>
                    <AiOutlineRight className='text-textprimary cursor-pointer hover:bg-slate-200' size={16} />
                </div>
            </div>
            {
                !isView && (
                    <div className='flex flex-col w-full gap-5'>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <button className='button-close' onClick={() => { setIsModalOpen(true) }}>
                                Add Pig
                            </button>
                            <span className='text-xs font-bold text-other20'>
                                Total: <span className='text-xs font-bold text-other20'>{data.length}</span>
                            </span>
                        </div>
                        <div className='w-1/2'>
                            <div>
                                <InputMoney label="Total cost" isDisable={true} />
                            </div>
                        </div>
                    </div>
                )
            }

            <PigAddModal name="Pig Information" isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} />
        </div>
    )
}
