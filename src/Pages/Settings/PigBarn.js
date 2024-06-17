import React, { useEffect, useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { deleteBarnAction, getAllBarnAction } from '../../Redux/Actions/BarnActions';
import { GoSearch } from 'react-icons/go';
import { TiDelete } from 'react-icons/ti';
import BarnAddModal from '../../components/Modal/BarnAddModal';
import ModalDelete from '../../components/Modal/ModalDelete';
import { deleteBarnService } from '../../Redux/APIs/BarnService';
import toast from 'react-hot-toast';
import { set } from 'react-hook-form';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Header = 'text-xs font-bold text-textprimary px-2 py-4 whitespace-nowrap text-start w-48'
const Row = 'text-xs  font-normal text-textprimary px-2 pr-8 whitespace-nowrap py-3 text-start w-48'

export default function PigBarn() {
  const { barns } = useSelector(state => state.barnGetAll);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [barn, setBarn] = useState('');
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [rowPerPage, setRowPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBarnPigs, setFilteredBarnPigs] = useState([]);

  useEffect(() => {
    refreshBarn();
  }, [isModalOpen]);

  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getAllBarnAction(farmID));
  }, []);

  useEffect(() => {
    setFilteredBarnPigs(barns);
  }, [barns]);

  const refreshBarn = () => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getAllBarnAction(farmID));
    setIsEdit(false);
  }

  const handleDelete = async () => {
    try {
      await deleteBarnService(barn.maChuong);
      toast.success('Delete barn successfully');
      refreshBarn();
      setIsModalDeleteOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('Delete barn failed');
    }
  }

  const handleLeftClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRightClick = () => {
    if (currentPage < Math.ceil(filteredBarnPigs?.length / rowPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastBarn = currentPage * rowPerPage;
  const indexOfFirstBarn = indexOfLastBarn - rowPerPage;
  const currentBarns = filteredBarnPigs?.slice(indexOfFirstBarn, indexOfLastBarn);

  return (
    <div className='h-full w-full flex flex-col gap-4 items-center'>
      <ModalDelete name='Delete Barn' isvisible={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)} onDelete={handleDelete} />
      <BarnAddModal name='Add New Barn' isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} />
      <BarnAddModal name='Edit Barn' isvisible={isModalEditOpen} onClose={() => {setIsModalEditOpen(false) }} barn={barn} />
      {/* Navigation */}
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-col w-full justify-start items-start gap-2'>
          <h1 className='text-2xl font-semibold text-textprimary'>Pig Barn Settings</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/Settings/General' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>General Settings</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Pig Barn</span>
          </div>
        </div>
        <div className='flex place-items-end'>
          <button className='button-submit w-24'
            onClick={() => setIsModalOpen(true)}
          >
            <IoAddCircleOutline className='text-white font-semibold' size={16} />
            Add New
          </button>
        </div>
      </div>
      {/*Content*/}

      <div className='flex flex-col gap-2 shadow rounded-xl py-4 md:w-2/3'>
        <table className='border  rounded-lg w-full'>
          <thead>
            <tr className=' bg-textdisable/20'>
              <th scope='col' className={`${Header}`}>#</th>
              <th scope='col' className={`${Header}`}>Name</th>
              <th scope='col' className={`${Header}`}>Amounts</th>
              <th scope='col' className={`${Header}`}>Capacity</th>
              <th scope='col' className={`${Header}`}></th>
            </tr>
          </thead>
          <tbody>
            {currentBarns?.length === 0 && <tr className='border-textdisable border-b hover:bg-slate-100'><td colSpan={5} className='text-center py-3'>No pig barn</td></tr>}
            {currentBarns?.map((row, index) => (
              <tr className=' border-slate-200 border-b border-dashed  hover:bg-slate-100' key={row.maHeo}>
                <td className={`${Row}`}>{indexOfFirstBarn + index + 1}</td>
                <td className={`${Row}`}>
                  {row.ghiChu}
                </td>
                <td className={`${Row}`}>
                  {row.soLuongHeo}
                </td>
                <td className={`${Row}`}>{row.sucChuaToiDa}</td>
                <td className='flex flex-row items-start gap-2 py-3 px-2 w-56 '>
                  <button
                    className='button-edit'
                    onClick={() => { setBarn(row); setIsModalEditOpen(true); }}
                  >
                    Edit
                  </button>
                  <button className='button-delete'
                    onClick={() => { setBarn(row); setIsModalDeleteOpen(true) }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary px-4'>
          <span>Row per page: </span>
          <select className='outline-none' value={rowPerPage} onChange={(e) => { setRowPerPage(Number(e.target.value)); setCurrentPage(1); }}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span>{indexOfFirstBarn + 1}-{indexOfLastBarn > filteredBarnPigs?.length ? filteredBarnPigs?.length : indexOfLastBarn}</span>
          <span>of</span>
          <span>{filteredBarnPigs?.length}</span>
          <FaAngleLeft size={12} className={`cursor-pointer ${currentPage === 1 ? 'text-textdisable' : 'text-textprimary'}`} onClick={handleLeftClick} />
          <FaAngleRight size={12} className={`cursor-pointer ${currentPage === Math.ceil(filteredBarnPigs?.length / rowPerPage) ? 'text-textdisable' : 'text-textprimary'}`} onClick={handleRightClick} />
        </div>
      </div>
    </div>
  )
}
