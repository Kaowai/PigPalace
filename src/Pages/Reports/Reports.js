import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCoCauHeoAction, getCommonFieldAction, getSaleOverviewAction, getTotalIOByMonthAction } from '../../Redux/Actions/DashboardActions';
import { getListParameterAction } from '../../Redux/Actions/ParameterActions';
import { getAllBarnAction } from '../../Redux/Actions/BarnActions';
const Header = 'text-xs font-bold text-textprimary whitespace-nowrap px-20 py-3 text-start w-full '
const Row = 'text-xs  font-normal text-textprimary px-20 pr-10 mx-1 py-3 text-start whitespace-nowrap w-full'
function Reports() {
  const { commonField } = useSelector(state => state.commonFieldGet);
  const dispatch = useDispatch();
  const { coCauHeo } = useSelector(state => state.coCauHeoGet);
  const { parameters } = useSelector(state => state.getListParameter);
  const { barns } = useSelector(state => state.barnGetAll);
  const { totalIOByMonth } = useSelector(state => state.totalIOByMonthGet);
  const { salesOverview } = useSelector(state => state.salesOverviewGet);
  useEffect(() => {
    const farmID = JSON.parse(localStorage.getItem('farmID'));
    dispatch(getCommonFieldAction(farmID));
    dispatch(getListParameterAction(farmID));
    dispatch(getCoCauHeoAction(farmID));
    dispatch(getAllBarnAction(farmID));
    dispatch(getTotalIOByMonthAction(farmID, 2024));
    dispatch(getSaleOverviewAction(farmID, 2024));
    console.log('totalIOByMonth', totalIOByMonth)
  }, [dispatch])
  return (
    <div className='h-full w-full flex flex-col gap-4'>
      {/* Navigation */}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col w-full justify-start items-start gap-2'>
          <h1 className='text-2xl font-semibold text-textprimary'>Report</h1>
          <div className='flex flex-row gap-3 text-xs items-center'>
            <NavLink to='/dashboard' className='text-xs text-textdisable hover:text-textprimary hover:cursor-pointer transition-all duration-200 ease-in-out'>Dashboard</NavLink>
            <span className='w-1 h-1 rounded-full bg-textdisable' />
            <span className='text-xs text-textprimary font-semibold'>Report Overview</span>
          </div>
        </div>
        <div className='flex place-items-end '>
          <select className="p-2 bg-login text-textprimary text-xs rounded-md font-medium"
            defaultValue={"2024"}
          >
            <option value="2">2024</option>
            <option value="2">2023</option>
            <option value="1">2022</option>
          </select>
        </div>
      </div>

      {/* Contents */}

      <div className='flex flex-col gap-2 shadow rounded-xl w-full'>
        <div className='flex flex-row gap-2 w-full p-2 border-b border-login'>
          <div className='flex flex-col p-4 gap-2 justify-start items-start w-full'>
            <span className='text-sm text-textdisable'>TOTAL SALES</span>
            <span className='text-md font-bold text-textprimary'>{commonField?.totalSales} $</span>
          </div>
          <div className='flex flex-col p-4 gap-2 justify-start items-start w-full'>
            <span className='text-sm text-textdisable'>TOTAL EXPENSES</span>
            <span className='text-md font-bold text-textprimary'>{commonField?.totalExpense} $</span>
          </div>
          <div className='flex flex-col p-4 gap-2 justify-start items-start w-full'>
            <span className='text-sm text-textdisable'>TOTAL INCOME</span>
            <span className='text-md font-bold text-textprimary'>{commonField?.totalIncomes} $</span>
          </div>
        </div>

        <div className='w-full py-4 border-b border-login'>
          <table className='border rounded-lg '>
            <thead>
              <tr className=' bg-textdisable/20 border-textdisable '>
                <th scope='col' className={`${Header} `}>Cencus</th>
                <th scope='col' className={`${Header}`}>#</th>
              </tr>
            </thead>
            <tbody>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Piglets"}</td>
                <td className={`${Row}`}>{"0"}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Weaners/Nursery Piglets"}</td>
                <td className={`${Row}`}>{"0"}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Growers"}</td>
                <td className={`${Row}`}>4</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Gilts"}</td>
                <td className={`${Row}`}>8</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Sows"}</td>
                <td className={`${Row}`}>8</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Boars"}</td>
                <td className={`${Row}`}>4</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed bg-cyan-200'>
                <td className={`${Row}`}>{"Total"}</td>
                <td className={`${Row}`}>24</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className='w-full py-4 border-b border-login'>
          <table className='border rounded-lg '>
            <thead>
              <tr className=' bg-textdisable/20 border-textdisable '>
                <th scope='col' className={`${Header} `}>Barns Detail</th>
                <th scope='col' className={`${Header}`}>#</th>
              </tr>
            </thead>
            <tbody>

              {barns?.map((row, index) => (
                <tr className=' border-slate-300 border-b border-dashed ' key={row.maChuong}>
                  <td className={`${Row}`}>{row.ghiChu}</td>
                  <td className={`${Row}`}>{row.soLuongHeo}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div className='w-full py-4 border-b border-login'>
          <table className='border rounded-lg '>
            <thead>
              <tr className=' bg-textdisable/20 border-textdisable '>
                <th scope='col' className={`${Header} `}>Breed Detail</th>
                <th scope='col' className={`${Header}`}>#</th>
              </tr>
            </thead>
            <tbody>

              {coCauHeo?.map((row, index) => (
                <tr className=' border-slate-300 border-b border-dashed ' key={index}>
                  <td className={`${Row}`}>{row.tenGiongHeo}</td>
                  <td className={`${Row}`}>{row.soLuong}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div className='w-full py-4 border-b border-login'>
          <table className='border rounded-lg '>
            <thead>
              <tr className=' bg-textdisable/20 border-textdisable '>
                <th scope='col' className={`${Header} `}>Regulatory definition</th>
                <th scope='col' className={`${Header}`}>#</th>
              </tr>
            </thead>
            <tbody>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Minimum Pig Weight Export"}</td>
                <td className={`${Row}`}>{parameters[0]?.trongLuongToiThieuXuatChuong}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Maximum Pig Weight Export"}</td>
                <td className={`${Row}`}>{parameters[0]?.trongLuongToiDaXuatChuong}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Minimum Pig Age Export"}</td>
                <td className={`${Row}`}>{parameters[0]?.tuoiToiThieuXuatChuong}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Maximum Pig Age Export"}</td>
                <td className={`${Row}`}>{parameters[0]?.tuoiToiDaXuatChuong}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Minimum Age Piglet"}</td>
                <td className={`${Row}`}>{parameters[0]?.tuoiNhapDanHeoCon}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Minimum Blood Mating"}</td>
                <td className={`${Row}`}>{parameters[0]?.giaoPhoiCanHuyetToiThieu}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Minimum Age Mating Boar"}</td>
                <td className={`${Row}`}>{parameters[0]?.tuoiPhoiGiongToiThieuHeoDuc}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed '>
                <td className={`${Row}`}>{"Minimum Age Mating Sow"}</td>
                <td className={`${Row}`}>{parameters[0]?.tuoiPhoiGiongToiThieuHeoCai}</td>
              </tr>
              <tr className=' border-slate-300 border-b border-dashed'>
                <td className={`${Row}`}>{"Minimum Days Mating Again"}</td>
                <td className={`${Row}`}>{parameters[0]?.soNgayToiThieuPhoiGiongLai}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='w-full py-4 border-b border-login'>
          <table className='border rounded-lg '>
            <thead>
              <tr className=' bg-textdisable/20 border-textdisable '>
                <th scope='col' className={`${Header} `}>Import Pig Detail</th>
                <th scope='col' className={`${Header}`}>#</th>
              </tr>
            </thead>
            <tbody>

              {totalIOByMonth?.map((row, index) => (
                <tr className=' border-slate-300 border-b border-dashed ' key={index}>
                  <td className={`${Row}`}>{
                    row.month === 1 ? "January" :
                      row.month === 2 ? "February" :
                        row.month === 3 ? "March" :
                          row.month === 4 ? "April" :
                            row.month === 5 ? "May" :
                              row.month === 6 ? "June" :
                                row.month === 7 ? "July" :
                                  row.month === 8 ? "August" :
                                    row.month === 9 ? "September" :
                                      row.month === 10 ? "October" :
                                        row.month === 11 ? "November" :
                                          row.month === 12 ? "December" : ""
                  }</td>
                  <td className={`${Row}`}>{row.totalImport}</td>
                </tr>
              ))}
              <tr className=' border-slate-300 border-b border-dashed bg-cyan-200'>
                <td className={`${Row}`}>{"Total"}</td>
                <td className={`${Row}`}>{totalIOByMonth?.reduce((sum, map2) => sum + map2?.totalImport, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='w-full py-4 border-b border-login'>
          <table className='border rounded-lg '>
            <thead>
              <tr className=' bg-textdisable/20 border-textdisable '>
                <th scope='col' className={`${Header} `}>Export Pig Detail</th>
                <th scope='col' className={`${Header}`}>#</th>
              </tr>
            </thead>
            <tbody>

              {totalIOByMonth?.map((row, index) => (
                <tr className=' border-slate-300 border-b border-dashed ' key={index}>
                  <td className={`${Row}`}>{
                    row.month === 1 ? "January" :
                      row.month === 2 ? "February" :
                        row.month === 3 ? "March" :
                          row.month === 4 ? "April" :
                            row.month === 5 ? "May" :
                              row.month === 6 ? "June" :
                                row.month === 7 ? "July" :
                                  row.month === 8 ? "August" :
                                    row.month === 9 ? "September" :
                                      row.month === 10 ? "October" :
                                        row.month === 11 ? "November" :
                                          row.month === 12 ? "December" : ""
                  }</td>
                  <td className={`${Row}`}>{row.totalExport}</td>
                </tr>
              ))}
              <tr className=' border-slate-300 border-b border-dashed bg-cyan-200'>
                <td className={`${Row}`}>{"Total"}</td>
                <td className={`${Row}`}>{totalIOByMonth?.reduce((sum, map2) => sum + map2?.totalExport, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='w-full py-4 border-b border-login'>
          <table className='border rounded-lg '>
            <thead>
              <tr className=' bg-textdisable/20 border-textdisable '>
                <th scope='col' className={`${Header} `}>Sales Detail</th>
                <th scope='col' className={`${Header}`}>#</th>
              </tr>
            </thead>
            <tbody>

              {salesOverview?.map((row, index) => (
                <tr className=' border-slate-300 border-b border-dashed ' key={index}>
                  <td className={`${Row}`}>{
                    row.month === 1 ? "January" :
                      row.month === 2 ? "February" :
                        row.month === 3 ? "March" :
                          row.month === 4 ? "April" :
                            row.month === 5 ? "May" :
                              row.month === 6 ? "June" :
                                row.month === 7 ? "July" :
                                  row.month === 8 ? "August" :
                                    row.month === 9 ? "September" :
                                      row.month === 10 ? "October" :
                                        row.month === 11 ? "November" :
                                          row.month === 12 ? "December" : ""
                  }</td>
                  <td className={`${Row}`}>{row.totalSales}</td>
                </tr>
              ))}
              <tr className=' border-slate-300 border-b border-dashed bg-cyan-200'>
                <td className={`${Row}`}>{"Total"}</td>
                <td className={`${Row}`}>{salesOverview?.reduce((sum, map2) => sum + map2?.totalSales, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='w-full py-4 border-b border-login'>
          <table className='border rounded-lg '>
            <thead>
              <tr className=' bg-textdisable/20 border-textdisable '>
                <th scope='col' className={`${Header} `}>Expenses Detail</th>
                <th scope='col' className={`${Header}`}>#</th>
              </tr>
            </thead>
            <tbody>

              {salesOverview?.map((row, index) => (
                <tr className=' border-slate-300 border-b border-dashed ' key={index}>
                  <td className={`${Row}`}>{
                    row.month === 1 ? "January" :
                      row.month === 2 ? "February" :
                        row.month === 3 ? "March" :
                          row.month === 4 ? "April" :
                            row.month === 5 ? "May" :
                              row.month === 6 ? "June" :
                                row.month === 7 ? "July" :
                                  row.month === 8 ? "August" :
                                    row.month === 9 ? "September" :
                                      row.month === 10 ? "October" :
                                        row.month === 11 ? "November" :
                                          row.month === 12 ? "December" : ""
                  }</td>
                  <td className={`${Row}`}>{row.totalExpense}</td>
                </tr>
              ))}
              <tr className=' border-slate-300 border-b border-dashed bg-cyan-200'>
                <td className={`${Row}`}>{"Total"}</td>
                <td className={`${Row}`}>{salesOverview?.reduce((sum, map2) => sum + map2?.totalExpense, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default Reports