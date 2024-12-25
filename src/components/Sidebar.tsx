import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navigation } from "./Navigation";
import { IoCallOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col lg:mx-0 lg:my-2 lg:gap-4 p-[10px]">
        <div className="flex justify-start items-center text-center gap-2 pl-2">
          <img className="h-7 w-8" src="./codeant1.svg" alt="Logo" />
          <h2 className="text-2xl font-light">
            CodeAnt<span> </span>AI
          </h2>
        </div>

        <div className="flex justify-center items-center text-center lg:mt-0 mt-2">
          <Select>
            <SelectTrigger className="w-full lg:w-[200px] h-[40px]">
              <SelectValue placeholder="People" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</SelectItem>
              <SelectItem value="Amartya Jha">Amartya Jha</SelectItem>
            </SelectContent>
          </Select>          
        </div>

        <div className="flex items-center justify-start lg:mt-0 mt-3">
            <Navigation></Navigation>
        </div>

        <div className="lg:absolute bottom-2 left-0 w-full lg:px-4">
            <Link to={"/"} className="flex justify-start text-center items-center gap-2 h-10 font-medium rounded-lg lg:px-2 px-2 hover:bg-[#1570EF] hover:text-white ">
                <IoCallOutline />
                <h1>Support</h1>
            </Link>
            <Link to={"/"} className="flex justify-start text-center items-center gap-2 h-10 font-medium rounded-lg lg:px-2 px-2 hover:bg-[#1570EF] hover:text-white">
                <IoIosLogOut />
                <h1>Logout</h1>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
