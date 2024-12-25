import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-1">
        <img className="h-7 w-8" src="./codeant1.svg" alt="Logo" />
        <h2 className="text-2xl font-light">
          CodeAnt<span> </span>AI
        </h2>
      </div>
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
