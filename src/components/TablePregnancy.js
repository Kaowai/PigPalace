import { Edit2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'
import ExpenseModalView from './Modal/PigExpenseModal'
import { PiEyeBold, PiEyeThin } from 'react-icons/pi'
import { FaCheck } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByIDAction } from '../Redux/Actions/UserActions'
import { dateAfter115Days, formatDate } from '../Functionalities/GlobalFunctions'
import PregnancyModal from './Modal/PregnancyModal'
import ModalDelete from './Modal/ModalDelete'
import { deletePregnancyScheduleAction } from '../Redux/Actions/PregnancyScheduleActions'
import toast from 'react-hot-toast'
import { GoSearch } from 'react-icons/go'
import { IoCheckmark } from 'react-icons/io5'
import { confirmPregnancyService } from '../Redux/APIs/PregnancyScheduleService'

const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-40 '
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-40'

const Waiting = 'text-[10px] font-medium text-warningdark bg-warningbackground rounded-md px-2 py-1'
const FarrowingSuccess = 'text-[10px] font-medium text-successlight bg-successbackground rounded-md px-2 py-1'
const Fail = 'text-[10px] font-medium text-warning10 bg-warning10/50 rounded-md px-2 py-1'

export default function TablePregnancy({ data, refreshData, isView }) {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.getUserByID);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [row, setRow] = useState({});
    const [isConfirm, setIsConfirm] = useState(false);
    const [activeSort, setActiveSort] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const handleDelete = async () => {
        try {
            await dispatch(deletePregnancyScheduleAction(row.maLich));
            toast.success('Delete successfully');
            // refreshData();
        } catch (err) {
            toast.error('Delete failed');
        }
        setIsModalDeleteOpen(false);
    }
    const handleViewClick = (row) => {
        setIsModalOpen(true);
        setIsConfirm(false);
        setRow(row);
        console.log(row);
    }
    useEffect(() => {
        getPig();
    }, [dispatch])

    const handleView = (row) => {
        setIsModalOpen(true);
        setIsConfirm(false);
        setRow(row);
    }
    const getPig = async () => {
        const token = JSON.parse(localStorage.getItem('userID2'));
        dispatch(getUserByIDAction(token));
        console.log(user);
    }
    const handleConfirmClick = async (status) => {
        console.log(row)
        console.log(status);
    }
    useEffect(() => {
        // refreshData();
    }, [isModalOpen])
    return (
        <div className='flex flex-col h-full items-start gap-5 py-2 ' >
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
                            <th scope='col' className={`${Header}`}>Sow</th>
                            <th scope='col' className={`${Header}`}>Boar</th>
                            <th scope='col' className={`${Header}`}>Mating Date</th>
                            <th scope='col' className={`${Header}`}>Predict Farrow</th>
                            <th scope='col' className={`${Header}`}>Status</th>
                            {
                                !isView && (
                                    <th scope='col' className={`${Header} w-56`}>Actions</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                                <td className={`${Row}`}>
                                    <div className='flex flex-row gap-2 justify-start items-center'>
                                        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww border boder-disablebg' alt='avatar' className='w-8 h-8 rounded-full' />
                                        <div className='flex flex-col gap-1'>
                                            <span className='text-xs font-medium text-textprimary'>{user.name}</span>
                                            <span className='text-xs text-textdisable'>{row.maLich}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={`${Row}`}>{row.maHeoNai}</td>
                                <td className={`${Row}`}>{row.maHeoDuc}</td>
                                <td className={`${Row}`}>{formatDate(row.ngayPhoi)}</td>
                                <td className={`${Row}`}>{dateAfter115Days(row.ngayPhoi)}</td>
                                <td className={`${Row}`}>
                                    {
                                        row.trangThai === 'Waiting Pregnancy' ?
                                            (<span className={`${Waiting}`}>Waiting Pregnancy </span>) :
                                            row.trangThai === 'Waiting Farrowing' ?
                                                (<span className={`${Waiting}`}>Wating Farrowing</span>) :
                                                row.trangThai === 'Pregnancy Fail' ?
                                                    (<span className={`${Fail}`}>Pregnancy Fail</span>) :
                                                    row.trangThai === 'Farrowing Successful' ?
                                                        (<span className={`${FarrowingSuccess}`}>Farrowing Successful</span>) :
                                                        (<span className={`${Fail}`}>Farrowing Fail</span>)
                                    }
                                </td>
                                {
                                    !isView && (
                                        <td className='flex flex-row items-start gap-2 py-3 px-2 w-56'>

                                            {
                                                row.trangThai === 'Waiting Pregnancy' || row.trangThai === 'Waiting Farrowing' ?
                                                    (
                                                        <button
                                                            className='button-confirm'
                                                            onClick={() => {
                                                                setIsModalOpen(true);
                                                                setIsConfirm(true);
                                                                setRow(row);
                                                            }}>
                                                            <IoCheckmark size={16} />
                                                            Confirm
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className='button-view '
                                                            onClick={() => handleView(row)}>
                                                            <GoSearch className='text-white' size={16} />
                                                            View
                                                        </button>
                                                    )
                                            }
                                            <button className='button-delete '
                                                onClick={() => { setRow(row); setIsModalDeleteOpen(true) }}>
                                                <TiDelete size={16} />
                                                Delete
                                            </button>
                                        </td>
                                    )
                                }

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PregnancyModal name={isConfirm ? "Confirm Schedule" : "Pregnancy Schedule"} isConfirm={isConfirm} isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} data={row} handleSubmit={handleConfirmClick} />

            <ModalDelete name={"Delete Pregnancy Schedule"} isvisible={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} onDelete={handleDelete} />
        </div>
    )
}
