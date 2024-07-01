import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { DateTimeInput, Input2, InputMoney, MessageInput } from '../../../components/Input'
import Table2 from '../../../components/TableAddPig'
import PigAddModal from '../../../components/Modal/PigAddModal'
import { FaAngleLeft } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InvoiceValidation } from '../../../Validation/PigValidation'
import { InlineError } from '../../../Notifications/Error'
import toast from 'react-hot-toast'
import { createInvoicePigImportAction } from '../../../Redux/Actions/InvoicePigActions'

function ExpensesAdd() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();
  const [isAdd, setIsAdd] = useState(false);
  const [rowPerPage, setRowPerPage] = useState(5);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const navigate = useNavigate();
  const [errorInvoiceDate, setErrorInvoiceDate] = useState(false);
  const [errorPurchaseDate, setErrorPurchaseDate] = useState(false);
  const dispatch = useDispatch();
  const [dataPig, setDataPig] = useState([]);
  const { loading, error, invoice, success } = useSelector(state => state.createInvoicePigImport);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(InvoiceValidation) });

  const onSubmit = async (data) => {
    if (invoiceDate === '') { 
      setErrorInvoiceDate(true);
      return;
    }
    if (purchaseDate === '') { 
      setErrorPurchaseDate(true);
      return;
    }
    if (dataPig?.length === 0) { 
      toast.error('Please add pig to the list');
      return;
    }
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    const userID = JSON.parse(localStorage.getItem('userID2'));
    console.log(userID);
    data.NgayLap = invoiceDate;
    data.NgayMua = purchaseDate;
    data.FarmID = farmID;
    data.UserId = userID;
    console.log(data);
    console.log(JSON.stringify(dataPig));


    dispatch(createInvoicePigImportAction(data.NgayLap, data.NgayMua, data.Note, data.FarmID, data.UserId, data.TenCongTy, data.TenDoiTac, data.DiaChi, data.SoDienThoai, data.Email, (dataPig)));

    // toast.success("Create Invoice Successfully!");
    // navigate('/Invoice/Expenses/ExpensesOverview');
  }

  useEffect(() => {
    dispatch({type: 'CREATE_INVOICE_PIG_IMPORT_RESET'});
   }, [])

  useEffect(() => { 
    if (success) {
      toast.success("Create Invoice Successfully!");
      navigate('/Invoice/Expenses/ExpensesOverview');
    } 
    if (error) {
      toast.error("Create Invoice Failed! Please try again");
    }
  }, [loading, error, invoice, success, dispatch]);

  useEffect(() => {
    if (pathname.includes('ExpensesAddPig')) {
      setIsAdd(true);
    } else {
      setIsAdd(false);
    }
  }, []);

  
  const handleLeftClick = () => {

  }

  const handleRightLick = () => {

  }
  return (
    <div className='h-full w-full flex flex-col gap-4'>

      <div className='flex flex-col w-full pr-4 justify-start items-start gap-2'>
        <h1 className='text-2xl font-semibold text-textprimary'>
          {
            isAdd ? 'Add Pig Expenses' : 'Edit Pig Expenses'
          }
        </h1>
        <div className='flex flex-row gap-3 text-xs items-center justify-end'>
          <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
          <span className='w-1 h-1 rounded-full bg-textdisable' />
          <Link to='/Invoice/Expenses/ExpensesOverview' className='hover:text-textprimary cursor-pointer transition-all duration-200 ease-in-out'>Expenses Overview</Link>
          <span className='w-1 h-1 rounded-full bg-textdisable' />
          <span className='text-xs text-textprimary font-semibold'>{isAdd ? "Add Pig Expenses" : "Edit Pig Expenses"}</span>
        </div>
      </div>
      <div className='w-full md:px-28'>
        <div className='w-full items-center p-8 grid md:grid-cols-2 gap-5 shadow rounded-xl'>
          <div className='w-full'>
            <DateTimeInput
              label="Invoice Date: *"
              placeholder="dd-MM-YYYY"
              type="text"
              bg={true}
              name="year"
              setDate={setInvoiceDate}
              setError={setErrorInvoiceDate}
            />
            {errorInvoiceDate && <InlineError text={"Invoice Date is required"}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label="Client Company Name: "
              placeholder=""
              type="text"
              bg={true}
              name="year"
              register={register("TenCongTy")}
            />
            {errors.TenCongTy && <InlineError text={errors.TenCongTy.message}></InlineError>}
          </div>
          <div className='w-full'>
            <DateTimeInput
              label="Purchase Date: *"
              placeholder="dd-MM-YYYY"
              type="text"
              bg={true}
              name="year"
              setDate={setPurchaseDate}
              setError={setErrorPurchaseDate}
            />
            {errorPurchaseDate === '' && <InlineError text={"Invoice Date is required"}></InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label="Client Name: "
              placeholder=""
              type="text"
              bg={true}
              register={register("TenDoiTac")}
              name="year"
            />
            {errors.TenDoiTac && <InlineError text={errors.TenDoiTac.message}></InlineError>}
          </div>
          <div className='w-full row-span-3 order-1 md:order-none'>
            <MessageInput
              label="Note: "
              register={register("Note")}
            />
            {errors.Note && <InlineError text={errors.Note.message}>{ }</InlineError>}
          </div>
          <div className='w-full'>
            <Input2
              label="Client Address: "
              placeholder=""
              type="text"
              register={register("DiaChi")}
              bg={true}
              name="year"
            />
            {errors.DiaChi && <InlineError text={errors.DiaChi.message}></InlineError>}
          </div>
          <div className='w-full '>
            <Input2
              label="Client Phone Number: "
              placeholder=""
              type="text"
              bg={true}
              register={register("SoDienThoai")}
              name="year"
            />
            {errors.SoDienThoai && <InlineError text={errors.SoDienThoai.message}></InlineError>}
          </div>
          <div className='w-full '>
            <Input2
              label="Client email: "
              placeholder=""
              type="text"
              bg={true}
              register={register("Email")}
              name="year"
            />
            {errors.Email && <InlineError text={errors.Email.message}></InlineError>}
          </div>
        </div>
      </div>
      <div className='md:px-28'>
        <div className='shadow py-2 rounded-xl flex flex-col gap-3'>
          <div className='px-2 border-b border-textdisable'>
            <span className='text-sm font-bold text-textprimary'>List Pig Imported</span>
          </div>
          <Table2 data={dataPig} setData={setDataPig} />
          <div className='flex flex-row justify-between items-center px-4'>
            <button className='button-close w-32' onClick={() => { setIsModalOpen(true) }}>
              Add Pig
            </button>
            <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary'>
              <span>Row per page: </span>
              <select className='outline-none' onChange={(e) => setRowPerPage(e.target.value)}>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
              <span>6-10</span>
              <span>of</span>
              <span>11</span>
              <FaAngleLeft size={12} className='text-textdisable' onClick={() => handleLeftClick} />
              <FaAngleRight size={12} className='text-textprimary' onClick={() => handleRightLick} />
            </div>
          </div>
          <div className='flex flex-col w-full gap-5 px-4'>

            <div className='w-1/3'>
              <div>
                <InputMoney label="Total cost" isDisable={true} value={dataPig?.reduce((sum, pig)=>sum + pig.donGiaNhap, 0)}/>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-row gap-2  md:px-4 py-6'>
            <button className='button-submit-3'
              onClick={handleSubmit(onSubmit)}
            >
              {
                isAdd ? 'Submit' : 'Confirm'
              }
            </button>
            <button className='button-cancel'>
              Cancel
            </button>
          </div>
        </div>
      </div>


      <PigAddModal name="Pig Information" isvisible={isModalOpen} onClose={() => { setIsModalOpen(false) }} dataPig={dataPig} setPigData={setDataPig}/>

    </div>
  )
}

export default ExpensesAdd