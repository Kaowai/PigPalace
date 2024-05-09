import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        className={`link ${pathname.includes(data.name) && "text-other20"}`}
        onClick={() => {
          console.log('SubMenu clicked' + subMenuOpen);
          setSubMenuOpen(!subMenuOpen);
        }}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className={`flex h-0 flex-col pl-12 text-[0.9rem] font-normal overflow-hidden }`}
      >
        {data.menus?.map((menu) => (
          <li key={menu}>
            <NavLink
              to={`/${menu.trim()}`}
              className="link capitalize"
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;