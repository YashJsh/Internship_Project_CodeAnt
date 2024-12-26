import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { SaasLogin, SelfHosted } from "@/components/LoginMethods";
import { ArrowUp } from "lucide-react";

const SignIn = () => {
  const [selectedOption, setSelectedOption] = useState("SAAS");
  return (
    <div className="flex h-screen">
      {/* Left Side Div */}
      <div className="hidden lg:flex flex-1 relative items-center px-auto ">
          <img src="./codeant.svg" alt="" className="absolute bottom-0 left-0 z-0"/>
          <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 px-14 w-full max-w-screen ">
            <div className="w-auto flex flex-col justify-start rounded-3xl border  py-4 shadow-lg gap-4 z-10 overflow-auto ">
              <div className="flex items-center gap-2 pl-4 pr-2 ">
                <img className="h-9 w-10" src="./codeant1.svg" alt="Logo" />
                <h2 className="text-2xl font-semibold">
                AI to Detect & Autofix Bad Code
                </h2>
              </div>
              <Separator/>
              <div className="grid grid-cols-3 py-5 ">
                  <div className="flex flex-col items-center text-center ml-4 w-fit">
                    <h2 className="font-bold text-xl">30+</h2>
                    <p className="font-normal">Language Support</p>
                  </div>
                  <div className="flex flex-col items-center text-center ml-4 w-fit">
                    <h2 className="font-bold text-xl">10K+</h2>
                    <p className="font-normal">Developers</p>
                  </div>
                  <div className="flex flex-col items-center text-center ml-4 w-fit">
                    <h2 className="font-bold text-xl">100K+</h2>
                    <p className="font-normal">Hours Saved</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 rounded-xl shadow-xl px-8 py-7 flex flex-col z-20 gap-5 bg-white">
                <div className="flex justify-between">
                <img className="h-10 w-10 p-2 bg-violet-200 rounded-full" src="./pie-chart.svg" alt="Logo"  />
                  <div className="flex flex-col items-center text-center">
                      <div className="flex text-[#0049C6]">
                        <ArrowUp/><span className="font-bold">14%</span>
                      </div>
                      <h3>This week</h3>
                  </div>
                </div>
                <div className="flex flex-col font-bold">
                    <h2 className="">Issues Fixed</h2>
                    <p>500K+</p>
                </div>
              </div>
      </div>

      {/* Right Side div */}
      <div className="flex-1 flex flex-col justify-center items-center text-center bg-[#FAFAFA] w-full px-4 ">
        <div className="h-auto w-full flex-col items-center bg-[#FFFFFF] rounded-md border-[1px] border-[#E9EAEB]">
          <div className="w-full flex flex-col items-center gap-6 py-9 px-4">
            <div className="flex items-center">
              <img className="h-7 w-8" src="./codeant1.svg" alt="Logo" />
              <h2 className="text-2xl font-light">
                CodeAnt<span> </span>AI
              </h2>
            </div>
            <h2 className="font-semibold">Welcome to CodeAnt AI</h2>
            <div className="w-full flex gap-[2px] bg-[#FAFAFA]">
              {/* Conditional Rendering on button colors*/}
              <button
                className={`h-10 rounded-lg w-full flex justify-center items-center 
          ${
            selectedOption === "SAAS"
              ? "bg-[#1570EF] text-white"
              : " hover:bg-[#D5D7DA] focus:bg-[#1570EF]"
          }`}
                onClick={() => setSelectedOption("SAAS")}
              >
                SAAS
              </button>

              <button
                className={`h-10 rounded-lg w-full flex justify-center items-center 
          ${
            selectedOption === "SelfHosted"
              ? "bg-[#1570EF] text-white"
              : "hover:bg-[#D5D7DA] focus:bg-[#1570EF]"
          }`}
                onClick={() => setSelectedOption("SelfHosted")}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <Separator />
          <div className="py-6 w-full px-4">
            {selectedOption === "SAAS" ? (
              <SaasLogin/>
              
            ) : (
              <SelfHosted/>
            )}
          </div>
        </div>
        <h3 className="font-normal text-xs pt-6">By signing up you agree to the <span className="font-semibold">Privacy Policy.</span></h3>
      </div>
    </div>
  );
};

export default SignIn;
