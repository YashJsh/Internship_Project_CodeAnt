import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex w-full h-full">
      {/* Sidebar for larger screens */}
      <div className="fixed left-0 top-0 hidden lg:block lg:w-[242px] h-full border-[1px] lg:px-0 px-[16px]">
        <Sidebar />
      </div>

      {/* Content for both mobile and larger screens */}
      <div className="flex-grow h-full lg:ml-[242px] lg:px-4 bg-[#FAFAFA]">
        {/* Navbar for smaller screens */}
        <div className="lg:hidden">
          <Navbar />
        </div>
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
