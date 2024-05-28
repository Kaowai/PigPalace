import { useContext, createContext, useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import React from "react";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbCalendarPause, TbInvoice, TbPig, TbReportAnalytics } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { CgCalendarToday } from "react-icons/cg";
import e from "cors";


const SidebarContext = createContext()

const SideBar = ({ open, setOpen }) => {
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const Nav_animation = {
      open: {
        width: "14rem",
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
      closed: {
        width: "0",
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    };

  const MenuList = [
    // Overview
    {
      name: "Dashboard",
      path: "/Dashboard",
      icon: <AiOutlineAppstore size={23} className="min-w-max" />,
    },
    {
      name: "Pig Manager",
      path: "/Pigmanager",
      icon: <TbPig size={23} className="min-w-max" />,
    },
    {
      name: "Feed Manager",
      icon: CgCalendarToday,
      menus: [
        {
          name: "Today Feed",
          path: "/FeedManager/TodayFeed"
        },
        {
          name: "Feed Plan",
          path: "/FeedManager/FeedPlan"
        }
      ],
    },
    {
      name: "Inventory",
      path: "/Inventory",
      icon: <HiOutlineDatabase size={23} className="min-w-max" />,
    },
    {
      name: "Events",
      icon: TbCalendarPause,
      menus: [
        {
          name: "Pregnancy Monitor",
          path: "/Events/PregnancyMonitor/PregnancyOverview"
        },
        {
          name: "Vaccine Monitor",
          path: "/Events/VaccineMonitor/VaccineMonitorOverview"
        },
        {
          name: "Dead Monitor",
          path: "/Events/DeadMonitor/DeadMonitorOverview"
        }
      ],
    },

    // Farm Analystics
    {
      name: "Farm Analytics",
    },
    {
      name: "Invoice",
      icon: TbInvoice,
      menus: [
        {
          name: "Sales",
          path: "/Invoice/Sales/SalesOverview"
        },
        {
          name: "Expenses",
          path: "/Invoice/Expenses/ExpensesOverview"
        }
      ],
    },
    {
      name: "Reports",
      path: "/Report",
      icon: <TbReportAnalytics size={20} className="min-w-max" />,
    },
    {
      name: "Users",
      path: "/User",
      icon: <FiUser size={20} className="" />,
    },
  ]
  const [openSubMenu, setOpenSubMenu] = useState("");
  const handleClick = (name) => {
    setOpenSubMenu(openSubMenu === name ? "" : name);
  }

  return (
    <div className="h-full flex flex-row gap-2 animate-slide-in-from-left">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden max-h-screen h-screen bg-black/50 ${open ? "" : "hidden"
          } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed h-screen "
      >
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-none scrollbar-track-white scrollbar-thumb-slate-100  md:h-[68%] h-[70%]">
            <small className={`pl-3 text-slate-500 inline-block mb-2 `}>
              Overview
            </small>
            {MenuList.map((menu) => menu.path ?
              (
                <MenuItem
                  key={menu.name}
                  {...menu}
                  onClick={() => { !open && setOpen(!open) }} />
              ) :
              menu.icon ? (
                <div key={menu.name} className="flex flex-col">
                  <SubMenu {...menu} onClick={() => handleClick(menu.name)} />
                </div>
              ) : (
                <div className=" pt-2 border-t border-slate-300">
                  <small className={`pl-3 text-slate-500 inline-block mb-2`}>
                    Analytics
                  </small>
                </div>
              )
            )}


          </ul>
          <div className="flex flex-row text-sm max-h-60 my-auto  whitespace-pre  w-full  font-medium  ">
            <div className="flex w-full  border-y border-slate-300 p-4 items-center justify-between">
              <div>
                <p>PigPalace</p>
                <small>Premium $0/month</small>
              </div>
              <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl cursor-pointer">
                Upgrade
              </p>
            </div>
          </div>

        </div>

        {/* button collapse and expand */}
        {/* <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                x: 0,
                rotate: 0,
              }
              : {
                x: -10,
                rotate: 180,
              }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block hidden right-2 bottom-20 p-1  cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div> */}
      </motion.div>
    </div>

  );
};

export default SideBar;


export const MenuItem = ({ icon, name, path, onClick }) => {
  return (
    <li
      className=" hover:text-other20 cursor-pointer"
      onClick={onClick}>
      <NavLink to={path} className="link">
        {icon}
        <span>{name}</span>
      </NavLink>
    </li>
  )
};



