import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { InputMoney } from './Input';
import PigModal from './Modal/ModalMain/MainModal';
import MainModal from './Modal/ModalMain/MainModal';
import PigAddModal from './Modal/PigAddModal';
import ModalDelete from './Modal/ModalDelete';
import { data } from '../Data/PigDataSample'

const Header = 'text-xs font-bold text-textprimary pl-2 pr-10 mx-1 py-2 items-start'
const Row = 'text-xs  font-normal text-textprimary pl-4 pr-10 mx-1 py-3 items-start'

export default function Table2() {
    const [data, setData] = useState( [
        { id: 'PIG001', name: 'Pig 1', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
        { id: 'PIG002', name: 'Pig 2', breed: 'Yorkshire', age: '12 Months', gender: 'Female', cost: '$3000' },
        { id: 'PIG003', name: 'Pig 3', breed: 'Yorkshire', age: '12 Months', gender: 'Male', cost: '$3000' },
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
                            <th scope='col' className={`${Header}`}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 && <tr className='border-textdisable border-b hover:bg-slate-100'><td colSpan={7} className='text-center py-3'>No pig have added</td></tr> }
                        {data.map(row => (
                            <tr className=' border-textdisable border-b hover:bg-slate-100' key={row.id}>
                                <td className={`${Row}`}>{row.id}</td>
                                <td className={`${Row}`}>{row.name}</td>
                                <td className={`${Row}`}>{row.breed}</td>
                                <td className={`${Row}`}>{row.age}</td>
                                <td className={`${Row}`}>{row.gender}</td>
                                <td className={`${Row}`}>{row.cost}</td>
                                <td className={`flex flex-row items-start gap-2 py-3 px-2`}>

                                    <button className='flex flex-row rounded text-xs text-warning10 px-3 py-2 border border-warning10 items-center gap-1 hover:bg-warning10 transition-all duration-200 hover:text-white' onClick={() => { handleClickDelete(row.id) }}>
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
                <button className='bg-textdisable text-xs text-white px-3 py-2 rounded hover:bg-secondary40' onClick={() => { setIsModalOpen(true) }}>
                    Add Pig
                </button>
                <span className='text-xs font-bold text-other20'>
                    Amount: <span className='text-xs font-bold text-other20'>{data.length}</span>
                </span>
            </div>
            <div className='w-1/2'>
                <div>
                    <InputMoney label="Total cost" isDisable={true} />
                </div>
            </div>
            <PigAddModal name="Pig Information" isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} />
        </div>
    )
}
