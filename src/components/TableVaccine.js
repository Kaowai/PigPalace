import { Edit2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'
import ExpenseModalView from './Modal/PigExpenseModal'
import { FaCheck } from 'react-icons/fa'
import { PiEyeBold } from 'react-icons/pi'


const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-48'
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-48'

const Waiting = 'text-[10px] font-medium text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Success = 'text-[10px] font-medium text-successlight bg-successbackground rounded-md px-2 py-1'
const Fail = 'text-[10px] font-medium text-warning10 bg-warning10/50 rounded-md px-2 py-1'

export default function TableVaccine({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [row, setRow] = useState({});
  const [isConfirm, setIsConfirm] = useState(false);
  const [activeSort, setActiveSort] = useState(false);
  const handleDelete = (row) => {

  }
  const handleViewClick = (row) => {
    setIsModalOpen(true);
    setIsConfirm(false);
    setRow(row);
    console.log(row);
  }
  const handleConfirmClick = (row) => {
    setIsModalOpen(true);
    setIsConfirm(true);
    setRow(row);
    console.log(row);
  }
  return (
    <div className='flex flex-col h-full items-start gap-5 py-2' >
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
              <th scope='col' className={`${Header}`}>
                <div className='flex flex-row gap-2 items-center'>
                  <span>Vaccine</span>
                  <IoIosArrowRoundDown
                    size={20}
                    className={`${activeSort ? "text-textdisable" : "text-textprimary"} cursor-pointer`}
                    onClick={() => setActiveSort(!activeSort)} />
                </div>
              </th>
              <th scope='col' className={`${Header}`}>Pig</th>
              <th scope='col' className={`${Header}`}>Vaccine Date</th>
              <th scope='col' className={`${Header}`}>Quantity (dots)</th>
              <th scope='col' className={`${Header}`}>Status</th>
              <th scope='col' className={`${Header} w-56`}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                <td className={`${Row}`}>
                  <div className='flex flex-row gap-2 justify-start items-center'>
                    <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww border boder-disablebg' alt='avatar' className='w-8 h-8 rounded-full' />
                    <div className='flex flex-col gap-1'>
                      <span className='text-xs font-medium text-textprimary'>{row.UserID}</span>
                      <span className='text-xs text-textdisable'>{row.MaLichTiem}</span>
                    </div>
                  </div>
                </td>
                <td className={`${Row}`}>{row.MaHangHoa}</td>
                <td className={`${Row}`}>{row.MaHeo}</td>
                <td className={`${Row}`}>{row.NgayTiem}</td>
                <td className={`${Row}`}>{row.LieuLuong}</td>
                <td className={`${Row}`}>
                  {
                    row.TinhTrang === '0' ? <span className={Waiting}>Waiting</span> : <span className={Success}>Completed</span>
                  }
                </td>
                <td className='flex flex-row items-start gap-2 py-3 px-2 w-16'>

                  {
                    row.TinhTrang === '0' ?
                      (
                        <button
                          className='flex flex-row rounded text-xs text-warningdark px-2 py-2 border border-warningdark items-center gap-1 hover:bg-warningdark transition-all duration-200 hover:text-white'
                          onClick={() => handleConfirmClick(row)}>
                          <FaCheck size={12} />
                        </button>
                      ) : (
                        <button
                          className='flex flex-row rounded text-xs text-viewbg_hover px-2 py-2 border border-viewbg_hover items-center gap-1 hover:bg-viewbg_hover transition-all duration-200 hover:text-white'
                          onClick={() => handleConfirmClick(row)}>
                          <PiEyeBold size={12} />
                        </button>
                      )
                  }
                  <button
                    className='flex flex-row rounded text-xs text-other20 px-2 py-2 border border-other20 items-center gap-1 hover:bg-other20 transition-all duration-200 hover:text-white'
                    onClick={() => handleConfirmClick(row)}>
                    <Edit2Icon size={12} />
                  </button>
                  <button className='flex flex-row rounded text-xs text-warning10 px-2 py-2 border border-warning10 items-center gap-1 hover:bg-warning10 transition-all duration-200 hover:text-white'
                    onClick={() => { handleDelete(row) }}>
                    <TiDelete size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ExpenseModalView name={isConfirm ? "Confirm Expenses" : "Expenses Pig"} isConfirm={isConfirm} isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} data={row} />
    </div>
  )
}