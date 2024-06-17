import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAccountAction } from "../Redux/Actions/AccountActions";
import toast from "react-hot-toast";
import { IoAddCircleOutline } from "react-icons/io5";
import { TbPig, TbPigMoney, TbTemperatureFahrenheit } from "react-icons/tb";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { PiBarnBold, PiBarnDuotone } from "react-icons/pi";
import { FaRegUser, FaUserTie } from "react-icons/fa6";

Chart.register(...registerables);

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;

    ctx.save();
    ctx.font = 'bold 24px Poppins';
    ctx.tillStyle = '#212B36';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Total: ${data.datasets[0].data.reduce((sum, x) => sum + x, 0)}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
  }
}

function Dashboard() {
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAccountAction());
    localStorage.removeItem('farmID');
    toast.success("Logout Successfully!");
    navigate('/Login')
  }
  useEffect(() => {

  }, [])
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
        <div className="flex flex-row gap-6 justify-center items-center w-full">
          {/* Pig Totals */}
          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <TbPig size={36} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Total pigs</span>
              <span className="text-xs font-medium text-textprimary">2,000</span>
            </div>
          </div>

          {/* Pig Barns */}
          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <PiBarnDuotone  size={36} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Barns</span>
              <span className="text-xs font-medium text-textprimary">200</span>
            </div>
          </div>

          {/* Employees */}
          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <TbPig size={36} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Breeds</span>
              <span className="text-xs font-medium text-textprimary">20</span>
            </div>
          </div>

          {/* Partners */}
          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <FaRegUser size={24} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Employees</span>
              <span className="text-xs font-medium text-textprimary">20</span>
            </div>
          </div>

          {/* Partners */}
          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <FaUserTie size={24} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Partners</span>
              <span className="text-xs font-medium text-textprimary">2,000</span>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-row gap-4 justify-center items-center w-full">
          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <TbPig size={36} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Total Pigs</span>
              <span className="text-xs font-medium text-textprimary">2,000</span>
            </div>
          </div>
          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <TbPig size={36} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Total Pigs</span>
              <span className="text-xs font-medium text-textprimary">2,000</span>
            </div>
          </div>

          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <TbPig size={36} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Total Pigs</span>
              <span className="text-xs font-medium text-textprimary">2,000</span>
            </div>
          </div>

          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <TbPig size={36} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Total Pigs</span>
              <span className="text-xs font-medium text-textprimary">2,000</span>
            </div>
          </div>
          <div className="flex shadow w-full rounded-xl flex-row gap-2 justify-center items-center p-4">
            <div className="h-16 w-16 bg-other30 rounded-xl flex flex-row items-center justify-center">
              <TbPig size={36} className="text-other20" />
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
              <span className="text-xs font-medium text-textdisable text-start">Total Pigs</span>
              <span className="text-xs font-medium text-textprimary">2,000</span>
            </div>
          </div>
        </div> */}


        {/* chart doughnut*/}
        <div className="flex flex-row items-center justify-center w-full h-full gap-6">
          <div className="shadow rounded-xl flex flex-col gap-4 p-4 w-1/3 h-full">
            <span className="font-bold text-textprimary text-sm text-start">Pig details</span>
            <Doughnut
              className="p-4"
              borderAlign="inner"
              data={{
                labels: [
                  "Sows",
                  "Boars",
                  "Piglets",
                  "Weaners",
                ],
                datasets: [
                  {
                    backgroundColor: [
                      "#00A76F",
                      "#00B8D9",
                      "#FF5630",
                      "#FFAB00"
                    ],
                    data: [2478, 3000, 3500, 1200],
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
              <select className="p-2 bg-login text-textprimary text-xs rounded-md font-medium">
                <option value="1">2021</option>
                <option value="2">2022</option>
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
                    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 200, 100, 200],
                    label: "Import: ",
                    borderColor: "#00A76F",
                    fill: false,
                    tension: 0.1, 
                  },
                  {
                    data: [282, 350, 411, 502, 635, 809, 947, 100, 120, 50, 120, 200],
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
      </div>
    </div>
  )
}

export default Dashboard