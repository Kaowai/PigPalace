import React, { useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { IoCheckmark } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'
import ExpenseModalView from './Modal/PigExpenseModal'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { getAllBarnAction } from '../Redux/Actions/BarnActions'
import { getBreedByFarmIDAction } from '../Redux/Actions/BreedActions'
import { calculateAge } from '../Functionalities/GlobalFunctions'
import { Delete, Edit, Eye } from 'lucide-react'
import PigAddModal from './Modal/PigAddModal'
import PigInfoModal from './Modal/PigInfoModal'
import toast from 'react-hot-toast'
import { deletePigService } from '../Redux/APIs/PigService'

const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-56 '
const Row = 'text-xs font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-56'
const Progress = 'text-xs font-semibold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-semibold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function TablePig({ data,refreshData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [row, setRow] = useState({});
    const [activeSort, setActiveSort] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [openMenu, setOpenMenu] = useState(null); // State for managing menu visibility
    const [isModalPigInfoOpen, setIsModalPigInfoOpen] = useState(false);
    // const handleDelete = (row) => {
    //     try {
    //         const data = deletePigService(row.maHeo);
    //         toast.success('Delete pig successfully');
    //         refreshData();
    //     } catch (error) {
    //         console.log(error);
    //         toast.error('Delete pig failed');
    //     }
    // }

    const dispatch = useDispatch();
    const { barns } = useSelector(state => state.barnGetAll);
    const { breedInfo } = useSelector(state => state.breedGetAllByFarmID);

    useEffect(() => {
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        dispatch(getAllBarnAction(farmID));
        dispatch(getBreedByFarmIDAction(farmID));
    }, [dispatch]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const parts = formattedDate.split(' ');
        return `${parts[0]} ${parts[1]} ${parts[2].replace(',', '')}`;
    }

    const handleViewClick = (row) => {
        setRow(row);
        setIsModalPigInfoOpen(true);
        
    }
    return (
        <div className='flex flex-col h-full items-start gap-5 py-2'>
            <div className='overflow-x-auto'>
                <table className='border rounded-lg'>
                    <thead>
                        <tr className=' bg-textdisable/20 border-textdisable'>
                            <th scope='col' className={`${Header}`}>PigID</th>
                            <th scope='col' className={`${Header}`}>Breed</th>
                            <th scope='col' className={`${Header}`}>Pig Barn</th>
                            <th scope='col' className={`${Header}`}>Age</th>
                            <th scope='col' className={`${Header}`}>Gender</th>
                            <th scope='col' className={`${Header}`}>Cost ($)</th>
                            <th scope='col' className={`${Header}`}>Date</th>
                            <th scope='col' className={`${Header}`}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(row => (
                            <tr className='border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id} >
                                <td className={`${Row} cursor-pointer`} onClick={() => {handleViewClick(row)}}>{row.maHeo}</td>
                                <td className={`${Row}`}>
                                    {breedInfo?.find(b => b.maGiongHeo === row.maGiongHeo)?.tenGiongHeo}
                                </td>
                                <td className={`${Row}`}>
                                    {barns?.find(b => b.maChuong === row.maChuong)?.ghiChu}
                                </td>
                                <td className={`${Row}`}>{calculateAge(row.ngaySinh)} Months</td>
                                <td className={`${Row}`}>
                                    {row.gioiTinh === 'Male' ? "Male" : "Female"}
                                </td>
                                <td className={`${Row}`}>{row.donGiaNhap}</td>
                                <td className={`${Row}`}>{formatDate(row.ngayDenTrangTrai)}</td>
                                <td className={`${Row} relative`}>
                                    <button className='p-2 text text-other20'>
                                        <Edit size={20} />
                                    </button>
                                    <button className='p-2 text-warning10' >
                                        <Delete size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PigAddModal 
                isOpen={isModalOpen} 
                setIsOpen={setIsModalOpen} 
                isConfirm={isConfirm} 
                row={row} 
                barns={barns} 
                breedInfo={breedInfo}
            />
            <PigInfoModal 
                name={'Pig Info'}
                isvisible={isModalPigInfoOpen}
                onClose={() => setIsModalPigInfoOpen(false)}
                data={row}
                barns={barns}
                breedInfo={breedInfo}
                maHeo={row.maHeo}
            />
        </div>
    );
}
