import data from "../../data.json";

import { Button } from "./ui/button";
import { LuRefreshCw } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Separator } from "./ui/separator";
import { DatabaseIcon, Dot } from "lucide-react";
import { IoAdd } from "react-icons/io5";

const Main = () => {
  return (
    <div className="bg-[#FFFFFF] border lg:my-6 lg:rounded-xl">
      <div className="flex flex-col justify-start px-4 py-5 gap-3 lg:mt-5 lg:flex lg:justify-between">
        <div className="lg:flex justify-between items-center">
          <div>
            <h1 className="font-medium lg:text-3xl">Repositories</h1>
            <p className="font-light text-sm text-[rgb(65,70,81)]">
              33 total repositories
            </p>
          </div>

          <div className="flex gap-3 lg:justify-end ">
            <Button variant="outline">
              <LuRefreshCw />
              <span className="text-sm font-extralight ">Refresh All</span>
            </Button>
            <Button
              variant="default"
              className="bg-[#1570EF] hover:bg-[#1367dd]"
            >
              <IoAdd />
              <span className="text-sm font-extralight ">Add Repository</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center border w-full lg:w-[356px] h-11 rounded-lg px-2 gap-2 ">
          <HiMiniMagnifyingGlass />
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full border-none border-transparent h-full font-light focus:outline-none"
          />
        </div>
      </div>

      <div>
        {data.map((item) => (
          <div className="flex flex-col hover:bg-[#F5F5F5]">
            <div className="w-full">
              <Separator />
            </div>

            <div key={item.title} className="px-4 py-4">
              <div className="flex gap-2 items-center">
                <h1>{item.title}</h1>
                <button className="h-7 w-15 border-[1px] border-[#B2DDFF] text-[#175CD3] bg-[#EFF8FF] rounded-full py-[2px] px-[10px] text-sm">
                  {item.visibility}
                </button>
              </div>

              <div className="flex items-center">
                <p className="text-sm font-light">{item.language}</p>
                <Dot className="text-[#1570EF]" size={40} />
                <div className="flex gap-1  items-center">
                  <DatabaseIcon size={12} className="lg:ml-4" />
                  <p className="text-sm font-light">{item.size} KB</p>
                  <p className="text-sm font-light ml-5">
                    Updated {item.updated} day ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
