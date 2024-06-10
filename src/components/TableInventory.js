import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { IoCheckmark } from 'react-icons/io5'
import { TiDelete } from 'react-icons/ti'
import ExpenseModalView from './Modal/PigExpenseModal'
import { Edit2Icon } from 'lucide-react'

const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-56 '
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-56'

const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

export default function TableInventory({ data }) {
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
                <span>Name</span>
                <IoIosArrowRoundDown
                  size={20}
                  className={`${activeSort ? "text-textdisable" : "text-textprimary"} cursor-pointer`}
                  onClick={() => setActiveSort(!activeSort)} />
              </th>
              <th scope='col' className={`${Header}`}>Amount</th>
              <th scope='col' className={`${Header}`}>Minimum Level</th>
              <th scope='col' className={`${Header}`}>Cost Per Unit ($)</th>
              <th scope='col' className={`${Header}`}>Date</th>
              <th scope='col' className={`${Header} w-56`}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                <td className={`${Row}`}>{row.TenHangHoa}</td>
                <td className={`${Row}`}>{row.TonKho}</td>
                <td className={`${Row}`}>{row.GiaTriToiThieu}</td>
                <td className={`${Row}`}>{row.TienMuaTrenMotDonVi}</td>
                <td className={`${Row}`}>{row.NgayNhap}</td>
                <td className='flex flex-row items-start gap-2 py-3 px-2 w-56 '>
                  <button
                    className='button-confirm'
                    onClick={() => handleConfirmClick(row)}>
                    <Edit2Icon size={16} />
                    Edit
                  </button>
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
      <ExpenseModalView name={isConfirm ? "Confirm Expenses" : "Expenses Pig"} isConfirm={isConfirm} isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} data={row} />
    </div>
  )
}
