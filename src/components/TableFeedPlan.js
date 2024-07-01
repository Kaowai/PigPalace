import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import ExpenseModalView from './Modal/PigExpenseModal'
import { GoSearch } from 'react-icons/go'
import { IoCheckmark } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByIDAction } from '../Redux/Actions/UserActions'
import { formatDate } from '../Functionalities/GlobalFunctions'
import { getAllBarnAction } from '../Redux/Actions/BarnActions'
import { confirmFeedScheduleService, deleteFeedScheduleService } from '../Redux/APIs/FeedScheduleService'
import toast from 'react-hot-toast'


const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-48'
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-48'
const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function TableFeedPlan({ data, refreshData }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.getUserByID);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [row, setRow] = useState({});
  const [activeSort, setActiveSort] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const { barns } = useSelector(state => state.barnGetAll);

  const handleDelete = async (row) => {
    try {
      const data = await(deleteFeedScheduleService(row.id));
      toast.success('Delete successfully');
      refreshData();
    } catch (error) {
      toast.error('Delete failed');
    }
  }
  const handleViewClick = (row) => {

  }
  const handleConfirmClick = async (row) => {
    try {
      const data = await confirmFeedScheduleService(row.id);
      toast.success('Confirm successfully');
      refreshData();
    } catch (error) {
      toast.error('Confirm failed');
    }
  }

  useEffect(() => {
    getPig();
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getAllBarnAction(farmID));
  }, [])

  const getPig = async () => {
    const token = JSON.parse(localStorage.getItem('userID2'));
    dispatch(getUserByIDAction(token));

    console.log(user);
    console.log(barns);
  }

  return (
    <div className='flex flex-col h-full items-start gap-5 py-2' >
      <div className='overflow-x-auto'>
        <table className='border rounded-lg'>
          <thead>
            <tr className=' bg-textdisable/20 border-textdisable'>
              <th scope='col' className={`${Header}`}>User</th>
              <th scope='col' className={`${Header}`}>Feeding Date</th>
              <th scope='col' className={`${Header}`}>Feed</th>
              <th scope='col' className={`${Header}`}>Pig Barn</th>
              <th scope='col' className={`${Header}`}>Status</th>
              <th scope='col' className={`${Header}`}>Actions</th>

            </tr>
          </thead>
          <tbody>
            {data?.map(row => (
              <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                <td className={`${Row}`}>
                  <div className='flex flex-row gap-2 justify-start items-center'>
                    <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww border boder-disablebg' alt='avatar' className='w-8 h-8 rounded-full' />
                    <div className='flex flex-col gap-1'>
                      <span className='text-xs font-medium text-textprimary'>{user.name}</span>
                      <span className='text-xs text-textdisable'>{row.id}</span>
                    </div>
                  </div>
                </td>
                <td className={`${Row}`}>{formatDate(row.ngayChoAn)}</td>
                <td className={`${Row}`}>{row.tenHangHoa}</td>
                <td className={`${Row}`}>{barns?.find((barn) => barn.maChuong === row.maChuong)?.ghiChu}</td>
                <td className={`${Row}`}>
                  <span className={`${row?.tinhTrang === 'Not Completed' ? Progress : Paid}`}>{row.tinhTrang === 'Completed' ? "Completed" : "Not Completed"}</span>
                </td>
                <td className='flex flex-row items-start gap-2 py-3 px-2 w-56 '>
                  {
                    row.tinhTrang === 'Completed' ? (
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
                        Complete
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
    </div>
  )
}
