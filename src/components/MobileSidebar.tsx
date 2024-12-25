import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
               <IoMenuOutline/>
            </SheetTrigger>
            <SheetContent side={"top"} className="p-0 justify-center items-center">
                <Sidebar/>
            </SheetContent>
        </Sheet>  );
};

export default MobileSidebar;
