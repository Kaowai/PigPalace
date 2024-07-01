import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAccountAction } from "../Redux/Actions/AccountActions";
import toast from "react-hot-toast";
import { IoAddCircleOutline } from "react-icons/io5";
import { TbInvoice, TbPig, TbPigMoney, TbTemperatureFahrenheit } from "react-icons/tb";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { PiBarnBold, PiBarnDuotone } from "react-icons/pi";
import { FaAngleLeft, FaAngleRight, FaRegUser, FaUserTie } from "react-icons/fa6";
import { getCoCauHeoAction, getCommonFieldAction, getInvoiceAction, getTotalIOByMonthAction } from "../Redux/Actions/DashboardActions";
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa6";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { IoIosArrowRoundDown } from "react-icons/io";
import { formatDate } from "../Functionalities/GlobalFunctions";

Chart.register(...registerables);
const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-2 py-3 text-start w-56 '
const Row = 'text-xs  font-normal text-textprimary px-2 pr-10 mx-1 py-3 text-start whitespace-nowrap w-56'

const Progress = 'text-xs font-bold text-warningdark bg-warningbackground rounded-md px-2 py-1'
const Paid = 'text-xs font-bold text-successlight bg-successbackground rounded-md px-2 py-1'

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;

    ctx.save();
    ctx.font = 'bold 24px Poppins';
    ctx.tillStyle = '#212B36';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Total: ${data?.datasets[0].data?.reduce((sum, x) => sum + x, 0)}`, chart?.getDatasetMeta(0)?.data[0].x, chart?.getDatasetMeta(0)?.data[0].y);
  }
}

function Dashboard() {
  const navigate = useNavigate();
  const [rowPerPage, setRowPerPage] = useState(5);
  const { commonField } = useSelector(state => state.commonFieldGet);
  const [filteredInvoicePigs, setFilteredInvoicePigs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trạng thái để lưu thông tin trang hiện tại
  const { coCauHeo } = useSelector(state => state.coCauHeoGet);
  const { totalIOByMonth } = useSelector(state => state.totalIOByMonthGet);
  // const [breed, setBreed] = useState([]);
  // const [amountBreed, setAmountBreed] = useState([]);
  const [activeSort, setActiveSort] = useState(false);

  const { invoices } = useSelector(state => state.invoiceGet);
  const dispatch = useDispatch();

  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getCommonFieldAction(farmID));
    dispatch(getCoCauHeoAction(farmID));
    dispatch(getTotalIOByMonthAction(farmID, 2024));
    handleCallGetTotalIOByMonth();
    dispatch(getInvoiceAction(farmID, 2024));
    console.log(invoices);
    // const breeedInfo = coCauHeo?.map((item) => item.tenGiongHeo);
    // setBreed(breeedInfo);
    // const amountBreedInfo = coCauHeo?.map((item) => item.soLuong);
    // setAmountBreed(amountBreedInfo);

    // console.log(breed);
    // console.log(amountBreed);
  }, [dispatch])
  const breed = coCauHeo?.map((item) => item.tenGiongHeo);
  const amountBreed = coCauHeo?.map((item) => item.soLuong);
  const handleCallGetTotalIOByMonth = async (year) => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getTotalIOByMonthAction(farmID, year));
  }
  const handleGetInvoice = async (year) => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getInvoiceAction(farmID, year));
  }

  useEffect(() => {
    let filteredInvoicePigs = invoices;

    setFilteredInvoicePigs(filteredInvoicePigs);
  }, [invoices]);
  const handleLeftClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRightClick = () => {
    if (currentPage < Math.ceil(filteredInvoicePigs?.length / rowPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastPig = currentPage * rowPerPage;
  const indexOfFirstPig = indexOfLastPig - rowPerPage;
  const currentInvoicePigs = filteredInvoicePigs?.slice(indexOfFirstPig, indexOfLastPig);
  return (
      <div className='h-full w-full flex flex-col gap-6'>
        {/* Navigation */}
        <div className='flex flex-row w-full justify-between items-center'>
          <div className='flex flex-col w-full justify-center items-start gap-2'>
            <h1 className=' text-lg font-semibold text-textprimary'>Dashboard Overview</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-row gap-6 justify-start items-start w-full">
            {/* Pig Totals */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <TbPig size={36} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Total pigs</span>
                <span className="text-xs font-medium text-textprimary">{commonField?.totalPigs}</span>
              </div>
            </div>

            {/* Pig Barns */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <PiBarnDuotone size={36} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Barns</span>
                <span className="text-xs font-medium text-textprimary">{commonField?.totalBarns}</span>
              </div>
            </div>

            {/* Employees */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <TbPig size={36} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Breeds</span>
                <span className="text-xs font-medium text-textprimary">{coCauHeo?.length}</span>
              </div>
            </div>

            {/* Partners */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <FaRegUser size={24} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Employees</span>
                <span className="text-xs font-medium text-textprimary">{commonField?.totalEmployees}</span>
              </div>
            </div>

            {/* Partners */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <FaUserTie size={24} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Partners</span>
                <span className="text-xs font-medium text-textprimary">12</span>
              </div>
            </div>
          </div>


          <div className="flex flex-row gap-6 justify-start items-center w-full">
            {/* Pig Totals */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <HiTrendingUp size={36} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Total sales</span>
                <span className="text-xs font-medium text-textprimary">{commonField?.totalSales} $</span>
              </div>
            </div>

            {/* Pig Barns */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <FaChartLine size={32} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Total Incomes</span>
                <span className="text-xs font-medium text-textprimary">{commonField?.totalIncomes} $</span>
              </div>
            </div>

            {/* Employees */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <HiTrendingDown size={36} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Total Expenses</span>
                <span className="text-xs font-medium text-textprimary">{commonField?.totalExpense} $</span>
              </div>
            </div>

            {/* Partners */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <RiMoneyCnyCircleLine size={24} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Feed cost</span>
                <span className="text-xs font-medium text-textprimary">{commonField?.feedCost} $</span>
              </div>
            </div>

            {/* Partners */}
            <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-start items-center p-4">
              <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
                <TbInvoice size={24} className="text-other20" />
              </div>
              <div className="flex flex-col gap-2 justify-start items-start">
                <span className="text-xs font-medium text-textdisable text-start">Total Invoices</span>
                <span className="text-xs font-medium text-textprimary">30</span>
              </div>
            </div>
          </div>

          {/* chart doughnut*/}
          <div className="flex flex-row items-center justify-center w-full h-full gap-6">
            <div className="shadow rounded-xl flex flex-col gap-4 p-4 w-1/3 h-full">
              <span className="font-bold text-textprimary text-sm text-start">Pig details</span>
              <Doughnut
                className="p-4"
                borderAlign="inner"
                data={{
                  labels: ["Yorkshire",

                    "Berkshire",

                    "Duroc",

                    "Hampshire",],

                  datasets: [
                    {
                      backgroundColor: [
                        "#00A76F",
                        "#00B8D9",
                        "#FF5630",
                        "#FFAB00",
                      ],
                      data: [8, 4, 4, 8],
                      borderWidth: 1,
                    }
                  ]
                }}
                plugins={[textCenter]}
                options={{
                  plugins: {
                    legend: {
                      display: false
                    },
                  },
                  cutout: '70%',
                  animation: {
                    duration: 1500,
                  },
                }}
              />

              <div className="md:flex md:flex-row gap-2 justify-center items-center pt-6 pb-2 border-t border-dashed border-login">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <span className='w-3 h-3 rounded-full bg-primary_main' />
                  <span className="text-[10px] font-medium text-textprimary">Sows</span>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <span className='w-3 h-3 rounded-full bg-viewbg' />
                  <span className="text-[10px] font-medium text-textprimary">Boars</span>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <span className='w-3 h-3 rounded-full bg-warning_bg' />
                  <span className="text-[10px] font-medium text-textprimary">Piglets</span>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <span className='w-3 h-3 rounded-full bg-warningmain' />
                  <span className="text-[10px] font-medium text-textprimary">Weaners</span>
                </div>
              </div>
            </div>

            <div className="shadow rounded-xl flex flex-col gap-4 p-4 w-full h-full">
              <div className="flex flex-row justify-between items-center">
                <span className="font-bold text-textprimary text-sm text-start">IO Amounts</span>
                <select className="p-2 bg-login text-textprimary text-xs rounded-md font-medium"
                  defaultValue={"2024"}
                >
                  <option value="2">2024</option>
                  <option value="2">2023</option>
                  <option value="1">2022</option>
                </select>
              </div>
              <div className="md:flex md:flex-row gap-2 justify-end items-end pt-2">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <span className='w-3 h-3 rounded-full bg-primary_main' />
                  <span className="text-[10px] font-medium text-textprimary">Import</span>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <span className='w-3 h-3 rounded-full bg-warningmain' />
                  <span className="text-[10px] font-medium text-textprimary">Export</span>
                </div>
              </div>
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: [0, 12, 16, 4, 0, 6, 0, 0, 2, 0, 4, 2],
                      label: "Import: ",
                      borderColor: "#00A76F",
                      fill: false,
                      tension: 0.1,
                    },
                    {
                      data: [2, 8, 3, 0, 0, 6, 10, 0, 0, 2, 3, 5],
                      label: "Export: ",
                      borderColor: "#FFAB00",
                      fill: false,
                      tension: 0.1,
                    },
                  ]
                }}
                options={{
                  title: {
                    display: true,
                    text: "World population per region (in millions)"
                  },
                  plugins: {
                    legend: {
                      display: false
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                        display: false
                      }
                    },
                    y: {
                      grid: {
                        color: '#212B36',
                        lineWidth: 0.2
                      },
                      border: {
                        dash: [2, 4],
                      },
                      ticks: {
                        color: '#212B36',
                        font: 'Poppins',
                        padding: 10,
                        callback: function (val, index) {
                          // Hide every 2nd tick label
                          return index % 2 === 0 ? this.getLabelForValue(val) : '';
                        },
                      }
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="shadow rounded-xl flex flex-col gap-4 p-4 w-full h-full">
            <div className='overflow-x-auto'>
              <table className='border rounded-lg'>
                <thead>
                  <tr className=' bg-textdisable/20 border-textdisable'>
                    <th scope='col' className={`${Header} flex flex-row gap-2 items-center`}>
                      <IoIosArrowRoundDown
                        size={20}
                        className={`${activeSort ? "text-textdisable" : "text-textprimary"} cursor-pointer`}
                        onClick={() => setActiveSort(!activeSort)} />
                      <span>Invoice ID</span>
                    </th>
                    <th scope='col' className={`${Header}`}>Invoice Type</th>
                    <th scope='col' className={`${Header}`}>Invoice Name</th>
                    <th scope='col' className={`${Header} flex flex-row gap-2 items-center`}>
                      <span>Price</span>
                      <IoIosArrowRoundDown
                        size={20}
                        className={`${activeSort ? "text-textdisable" : "text-textprimary"} cursor-pointer`}
                        onClick={() => setActiveSort(!activeSort)} />
                    </th>
                    <th scope='col' className={`${Header}`}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentInvoicePigs?.length === 0 &&
                    <tr>
                      <td colSpan='6' className='text-xs font-normal text-textprimary px-2 py-3 text-start whitespace-nowrap w-56'>
                        No data
                      </td>
                    </tr>
                  }
                  {currentInvoicePigs?.map(row => (
                    <tr className=' border-slate-300 border-b border-dashed hover:bg-slate-100' key={row.id}>
                      <td className={`${Row}`}>
                        {row.invoiceID}
                      </td>
                      <td className={`${Row}`}>{row.invoiceType}</td>
                      <td className={`${Row}`}>{row.invoiceName}</td>
                      <td className={`${Row}`}>{(row.price)}</td>
                      <td className={`${Row}`}>
                        <span className={`${row.status === 'Paid' ? Paid : Progress}`}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='flex flex-row justify-end items-center w-full gap-2 text-xs text-textprimary px-4'>
              <span>Row per page: </span>
              <select className='outline-none' value={rowPerPage} onChange={(e) => setRowPerPage(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <span>{indexOfFirstPig + 1}-{indexOfLastPig > filteredInvoicePigs?.length ? filteredInvoicePigs?.length : indexOfLastPig}</span>
              <span>of</span>
              <span>{filteredInvoicePigs?.length}</span>
              <FaAngleLeft size={12} className='text-textdisable cursor-pointer' onClick={handleLeftClick} />
              <FaAngleRight size={12} className='text-textprimary cursor-pointer' onClick={handleRightClick} />
            </div>
          </div>
        </div>
      </div>
    )

}

export default Dashboard