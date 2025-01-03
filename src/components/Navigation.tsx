import { useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineHome } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";


export const routes = [
  {
    label: "Repositories",
    icon: <HiOutlineHome />,
  },
  {
    label: "AI Code Review",
    icon: <IoCodeSlashOutline />,
  },
  {
    label: "Cloud Security",
    icon: <CiCloudOn />,
  },
  {
    label: "How to Use",
    icon: <HiOutlineBookOpen />,
  },
  {
    label: "Settings",
    icon: <IoSettingsOutline />,
  },
];

export const Navigation = () => {
  const [select, setSelect] = useState("Repositories");
  return (
    <ul className="flex flex-col w-full">
      {routes.map((item) => {
        return (
          <li
            key={item.label}
            className="flex items-center py-2 h-[40px]  justify-start mb-1"
          >
            <Link
              to={"/"}
              onClick={() => {
                setSelect(item.label);
              }}
              className={`flex justify-start text-center items-center gap-2 font-medium w-full h-10 rounded-lg lg:px-4 px-2 ${
                select === item.label
                  ? "bg-[#1570EF] text-white" // Highlight selected item
                  : "hover:bg-[#1570EF] hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
