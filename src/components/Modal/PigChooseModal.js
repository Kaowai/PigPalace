import React, { useEffect, useState } from 'react'
import SubModal from './ModalMain/SubModal';
import { CheckCircle, Table2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getPigAllAction } from '../../Redux/Actions/PigActions';
import { DateTimeInput2, Select2 } from '../Input';
import { IoSearchOutline } from 'react-icons/io5';
import TablePig from '../TablePig';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Checkbox } from 'antd';
import { calculateAge } from '../../Functionalities/GlobalFunctions';
import { getAllBarnAction } from '../../Redux/Actions/BarnActions';
import { getBreedByFarmIDAction } from '../../Redux/Actions/BreedActions';
import { set } from 'react-hook-form';
import toast from 'react-hot-toast';
import { getListParameterAction } from '../../Redux/Actions/ParameterActions';

const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-56 '
const Row = 'text-xs font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-56'

export default function PigChooseModal({ name, isvisible, onClose, dataPig, setPigData }) {

    const dispatch = useDispatch();
    const [rowPerPage, setRowPerPage] = useState(5);
    const [search, setSearch] = useState('');
    const [date, setDate] = useState('');
    const [selectedState, setSelectedState] = useState('all');
    const [currentPage, setCurrentPage] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
    const [filteredPigs, setFilteredPigs] = useState([]);
    const { loading, pigs, success, error } = useSelector(state => state.getAllPig);

    const [pigsFilter, setPigsFilter] = useState([]);
    const { parameters } = useSelector(state => state.getListParameter);
    const options = [
        { value: 'all', title: 'All' },
        { value: 'InFarm', title: 'In Farm' },
        { value: 'Exported', title: 'Exported' }
    ];

    const [listPig, setListPig] = useState([]);

    useEffect(() => {
        const FarmID = JSON.parse(localStorage.getItem('farmID'));
        dispatch(getPigAllAction(FarmID));
        dispatch(getListParameterAction(FarmID));
        console.log(parameters)
        setPigsFilter(pigs);
    }, [isvisible]);

    useEffect(() => {
        let filterPigs = pigsFilter;

        if (date) {
            filterPigs = filterPigs.filter((pig) => areDatesEqual(pig.ngayDenTrangTrai, date));
        }

        if (selectedState === 'InFarm') {
            filterPigs = filterPigs.filter((pig) => pig.IsTrongTrangTrai === 1);
        } else if (selectedState === 'Exported') {
            filterPigs = filterPigs.filter((pig) => pig.IsTrongTrangTrai === 0);
        }

        if (search.trim().length > 0) {
            filterPigs = filterPigs.filter((pig) => pig.maHeo.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredPigs(filterPigs);
    }, [date, pigs, selectedState, search]);

    const { barns } = useSelector(state => state.barnGetAll);
    const { breedInfo } = useSelector(state => state.breedGetAllByFarmID);

    useEffect(() => {
        const farmID = JSON.parse(localStorage.getItem('farmID'));
        dispatch(getAllBarnAction(farmID));
        dispatch(getBreedByFarmIDAction(farmID));
    }, [dispatch]);

    const refreshData = async () => {
        const FarmID = JSON.parse(localStorage.getItem('farmID'));
        dispatch(getPigAllAction(FarmID));
    }

    function areDatesEqual(date1, date2) {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }

    const handleLeftClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleRightClick = () => {
        if (currentPage < Math.ceil(filteredPigs.length / rowPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleConfirm = () => {
        console.log(listPig);
        setPigData(listPig);
        onClose();
        toast.success('Add pig successfully');
    }

    const indexOfLastPig = currentPage * rowPerPage;
    const indexOfFirstPig = indexOfLastPig - rowPerPage;
    const currentPigs = filteredPigs.slice(indexOfFirstPig, indexOfLastPig);



    const handleCheck = (row, e) => {
        if (e.target.checked) {
            setListPig([...listPig, row]);
        } else {
            setListPig(listPig.filter(pig => pig.maHeo !== row.maHeo));
        }
    }

    return (
        <SubModal name={name} isvisible={isvisible} onClose={onClose} isFarm={true}>
            <div className='flex flex-col gap-2 justify-start item-center '>

                <div className='flex flex-row gap-2 shadow py-6 rounded-xl'>
                    <div className='flex flex-col gap-4 items-start '>
                        <div className='w-full flex flex-row justify-start items-start gap-5 px-4'>
                            <div className='flex flex-row gap-2'>
                                <Select2 options={options} setSelectedState={setSelectedState} />
                            </div>
                            <div className='flex flex-row gap-2'>
                                <DateTimeInput2 placeholder="Imported Date" setDate={setDate} />
                            </div>
                            <div className='flex flex-row gap-2 text-xs items-center font-normal h-10 w-64 border border-secondary30 rounded-lg pl-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50 transition-all duration-200 ease-in-out'>
                                <IoSearchOutline size={20} className='text-textdisable' />
                                <input
                                    type='text'
                                    placeholder='Search...'
                                    className='outline-none text-textprimary text-xs font-normal items-start text-wrap'
                                    onChange={(e) => { setSearch(e.target.value); }}>
                                </input>
                            </div>
                        </div>
                        <div className='flex justify-start px-4 gap-1 items-start'>
                            <span className='font-medium text-textprimary text-xs'>{filteredPigs.length} </span>
                            <span className='font-normal text-textdisable text-xs'>results found</span>
                        </div>

                        {/* Table */}
                        <div className='items-center justify-center flex w-full'>
                            <div className='overflow-x-auto'>
                                <table className='border rounded-lg'>
                                    <thead>
                                        <tr className=' bg-textdisable/20 border-textdisable'>

                                            <th scope='col' className=''></th>
                                            <th scope='col' className={`${Header}`}>PigID</th>
                                            <th scope='col' className={`${Header}`}>Breed</th>
                                            <th scope='col' className={`${Header}`}>Pig Barn</th>
                                            <th scope='col' className={`${Header}`}>Age</th>
                                            <th scope='col' className={`${Header}`}>Gender</th>
                                            <th scope='col' className={`${Header}`}>{"Weight"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentPigs?.map(row => (
                                            <tr className='border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id} >
                                                <td>
                                                    <Checkbox onChange={(e) => handleCheck(row, e)} />
                                                </td>
                                                <td className={`${Row} cursor-pointer`}>{row.maHeo}</td>
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
                                                <td className={`${Row}`}>{row.trongLuong}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary px-4'>
                            <span>Row per page: </span>
                            <select className='outline-none' value={rowPerPage} onChange={(e) => setRowPerPage(Number(e.target.value))}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>
                            <span>{indexOfFirstPig + 1}-{indexOfLastPig > filteredPigs.length ? filteredPigs.length : indexOfLastPig}</span>
                            <span>of</span>
                            <span>{filteredPigs.length}</span>
                            <FaAngleLeft size={12} className='text-textdisable cursor-pointer' onClick={handleLeftClick} />
                            <FaAngleRight size={12} className='text-textprimary cursor-pointer' onClick={handleRightClick} />
                        </div>
                    </div>
                </div >
                <div className='flex flex-row gap-2'>
                    <button
                        className='button-submit'
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                    <button className='button-cancel' onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </SubModal>
    )
}
