import React, { useEffect, useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { InputMoney } from './Input';
import PigModal from './Modal/ModalMain/MainModal';
import MainModal from './Modal/ModalMain/MainModal';
import PigAddModal from './Modal/PigAddModal';
import ModalDelete from './Modal/ModalDelete';
import { data } from '../Data/PigDataSample'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBarnAction } from '../Redux/Actions/BarnActions';
import { getBreedByFarmIDAction } from '../Redux/Actions/BreedActions';
import { formatDate } from '../Functionalities/GlobalFunctions';

export default function TableAddPig({ isView, data, setData, isExport }) {
    const Header = 'text-xs font-bold text-textprimary px-2 py-4 whitespace-nowrap text-start'
    const Row = 'text-xs  font-normal text-textprimary px-2 pr-8 whitespace-nowrap py-3 text-start'
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [deleteID, setDeleteID] = useState('');
    const { barns } = useSelector(state => state.barnGetAll);
    const { breedInfo } = useSelector(state => state.breedGetAllByFarmID);
    const dispatch = useDispatch();

    useEffect(() => {
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        dispatch(getAllBarnAction(farmID));
        dispatch(getBreedByFarmIDAction(farmID));

    }, []);
    const handleClickDelete = (id) => {
        console.log(id);
        setDeleteID(id);
        setIsModalDeleteOpen(true);
    }
    const handleDelete = () => {
        setData(pre => {
            const newArray = [...pre]
            return newArray.filter(item => item.maHeo !== deleteID)
        })
        toast.success('Delete pig successfully');
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
                            <th scope='col' className={`${Header}`}>Pig Barn</th>
                            <th scope='col' className={`${Header}`}>Breed</th>
                            <th scope='col' className={`${Header}`}>Date of Birth</th>
                            <th scope='col' className={`${Header}`}>Gender</th>
                            <th scope='col' className={`${Header}`}>{isExport ? "Weight (Kg)" : "Cost ($)"}</th>
                            {!isView && <th scope='col' className={`${Header}`}></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length === 0 && <tr className='border-textdisable border-b hover:bg-slate-100'><td colSpan={7} className='text-center py-3'>No pig have added</td></tr>}
                        {data?.map(row => (
                            <tr className=' border-slate-200 border-b border-dashed  hover:bg-slate-100' key={row.maHeo}>
                                <td className={`${Row}`}>{row.maHeo}</td>
                                <td className={`${Row}`}>
                                    {
                                        barns?.find(b => b.maChuong === row.maChuong)?.ghiChu
                                    }
                                </td>
                                <td className={`${Row}`}>
                                    {
                                        breedInfo?.find(b => b.maGiongHeo === row.maGiongHeo)?.tenGiongHeo
                                    }
                                </td>
                                <td className={`${Row}`}>{formatDate(row.ngaySinh)}</td>
                                <td className={`${Row}`}>{row.gioiTinh}</td>
                                {isExport ? (
                                    <td className={`${Row}`}>{row.trongLuong}</td>
                                ) : (
                                    <td className={`${Row}`}>{row.donGiaNhap}</td>
                                )}
                                {
                                    !isView &&
                                    <td className={`flex flex-row items-start gap-2 py-3 px-2`}>

                                        <button className='flex flex-row rounded text-xs text-warning10 px-3 py-2 border border-warning10 items-center gap-1 hover:bg-warning10 transition-all duration-200 hover:text-white' onClick={() => { handleClickDelete(row.maHeo) }}>
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
