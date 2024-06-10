import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { InputMoney } from './Input';
import PigModal from './Modal/ModalMain/MainModal';
import MainModal from './Modal/ModalMain/MainModal';
import PigAddModal from './Modal/PigAddModal';
import ModalDelete from './Modal/ModalDelete';
import { data } from '../Data/PigDataSample'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function TableAddPig({ isView, data, setData }) {


    const Header = 'text-xs font-bold text-textprimary px-2 py-4 whitespace-nowrap text-start'
    const Row = 'text-xs  font-normal text-textprimary px-2 pr-8 whitespace-nowrap py-3 text-start'


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
                <table className='border  rounded-lg w-full'>
                    <thead>
                        <tr className=' bg-textdisable/20'>
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
                        {data.count === 0 && <tr className='border-textdisable border-b hover:bg-slate-100'><td colSpan={7} className='text-center py-3'>No pig have added</td></tr>}
                        {data.map(row => (
                            <tr className=' border-slate-200 border-b border-dashed  hover:bg-slate-100' key={row.id}>
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
        </div>
    )
}
