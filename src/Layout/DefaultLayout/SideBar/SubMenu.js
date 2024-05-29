import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ name, icon, menus, setOpen, open }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const Icon = icon;
  useEffect(() => {
    if (!pathname.includes(name.replace(' ', ''))) {
      if (subMenuOpen) {
        setSubMenuOpen(!subMenuOpen);
      }
    }
    // if submenu has link in url and the sidebar is opened, the submenu will be opened
    if (pathname.includes(name.replace(' ', ''))) {
      if (open) {  
        setSubMenuOpen(true);
      }
    }
    console.log("hehe");
    // if the sidebar is closed, the submenu will be closed
    if (!open) { 
      setSubMenuOpen(false);
    }
  }, [pathname, open]);
  return (
    <>
      <li
        className={`link ${pathname.includes(name.replace(' ', '')) && "text-other20"} hover:text-other20 cursor-pointer icon`}
        onClick={() => {
          setSubMenuOpen(!subMenuOpen);
          !open && setOpen(!open);
        }}
      >
        <Icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
              height: "auto",
              transition: { duration: 0.3, ease: "easeInOut" }
            }
            : {
              height: "0rem",
              transition: { duration: 0.3, ease: "easeInOut" }
            }
        }

        className={`flex h-0 flex-col text-[0.9rem] font-normal overflow-hidden ${subMenuOpen ? "h-fit" : "h-0"}`}
      >
        {menus?.map((menu) => (
          <li
            className="hover:text-other20 cursor-pointer icon"
            key={menu.name}
            onClick={() => {setOpen()}}
            >
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <NavLink
              to={menu.path}
              className="link"
            >
              <span className="pl-12">{menu.name}</span>
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;