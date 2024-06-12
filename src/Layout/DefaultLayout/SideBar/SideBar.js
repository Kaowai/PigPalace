import { useContext, createContext, useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import React from "react";

// * React icons
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbCalendarPause, TbInvoice, TbPig, TbReportAnalytics } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { CgCalendarToday } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { get } from "react-hook-form";
import { getAccountIsUpgradedAction } from "../../../Redux/Actions/AccountActions";
import { getAccountIsUpgradeService } from "../../../Redux/APIs/AccountService";

const SideBar = ({ open, setOpen, isTabletMid, sidebarRef }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.accountLogin);
  const { isUpgraded } = useSelector(state => state.accountGetIsUpgraded);
  useEffect(() => {
    if (isTabletMid) {
      console.log("isTabletMid", isTabletMid);
      if (open) {
        setOpen();
      }
    }
    else {
      if (!open) {
        setOpen();
      }
    }
  }, [isTabletMid, userInfo, dispatch]);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('userInfo'));
    dispatch(getAccountIsUpgradedAction(id));
    console.log(isUpgraded);
  }, []);


  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "15rem",
        transition: {
          damping: 100,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 100,
          delay: 0.1,
        },
      },
    }
    : {
      open: {
        width: "15rem",
        transition: {
          damping: 40,
        },

      }
    };

  const MenuList = isUpgraded ? [
    // Overview
    {
      name: "Dashboard",
      path: "/Dashboard",
      icon: <AiOutlineAppstore size={20} className="min-w-max" />,
    },
    {
      name: "Pig Manager",
      path: "/Pigmanager",
      icon: <TbPig size={20} className="min-w-max" />,
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
      icon: <HiOutlineDatabase size={20} className="min-w-max" />,
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
      icon: <FiUser size={20} className="min-w-max" />,
    },
    {
      name: "Settings",
      icon: IoSettingsOutline,
      menus: [
        {
          name: "General",
          path: "/Settings/General"
        },
        {
          name: "Pig Barn",
          path: "/Settings/PigBarn"
        },
        {
          name: "Breed",
          path: "/Settings/Breed"
        }
      ],
    },
  ] : [
    // Overview
    {
      name: "Dashboard",
      path: "/Dashboard",
      icon: <AiOutlineAppstore size={20} className="min-w-max" />,
    },
    {
      name: "Pig Manager",
      path: "/Pigmanager",
      icon: <TbPig size={20} className="min-w-max" />,
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
      icon: <HiOutlineDatabase size={20} className="min-w-max" />,
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
      name: "Settings",
      icon: IoSettingsOutline,
      menus: [
        {
          name: "General",
          path: "/Settings/General"
        },
        {
          name: "Pig Barn",
          path: "/Settings/PigBarn"
        },
        {
          name: "Breed",
          path: "/Settings/Breed"
        }
      ],
    },
  ]
  const [openSubMenu, setOpenSubMenu] = useState("");
  const handleClick = (name) => {
    console.log("name", name);
    setOpenSubMenu(openSubMenu === name ? "" : name);
  }

  return (
    <div className="h-full flex flex-row gap-2 animate-slide-in-from-left">
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl max-w-[15rem]  w-[15rem] 
            overflow-hidden md:relative fixed h-screen z-[999]"
      >
        <div className="flex flex-col h-full">
          <ul className={`whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-none scrollbar-track-white scrollbar-thumb-slate-100 md:h-[74%] h-[70%] `}>
            <small className={`pl-3 text-slate-500 inline-block mb-2 ${!open && "hidden"}`}>
              Overview
            </small>
            {MenuList.map((menu) => menu.path ?
              (
                <MenuItem
                  key={menu.name}
                  {...menu}
                  onClick={() => { isTabletMid && setOpen() }} />
              ) :
              menu.icon ? (
                <div key={menu.name} className="flex flex-col">
                  <SubMenu {...menu} onClick={() => handleClick(menu.name)} setOpen={setOpen} open={open} />
                </div>
              ) : (
                <div className=" pt-2 border-t border-slate-300">
                  <small className={`pl-3 text-slate-500 inline-block mb-2 ${!open && "hidden"}`}>
                    Analytics
                  </small>
                </div>
              )
            )}
          </ul>
          {
            !isUpgraded ? (
              <div className={`flex flex-row text-sm max-h-60 my-auto  whitespace-pre  w-full  font-medium`}>
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
            ) : (
              <div className={`flex flex-row text-sm max-h-60 my-auto  whitespace-pre  w-full  font-medium`}>
                <div className="flex w-full  border-y border-slate-300 p-4 items-center justify-between">
                  <div>
                    <p>PigPalace</p>
                    <small>Premium account</small>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </motion.div>
    </div>

  );
};

export default SideBar;


export const MenuItem = ({ icon, name, path, onClick }) => {

  return (
    <>
      <li
        className=" hover:text-other20 cursor-pointer icon relative"
        onClick={onClick}>
        <NavLink to={path} className="link">
          {icon}
          <span>{name}</span>
        </NavLink>
      </li>
    </>
  )
};

