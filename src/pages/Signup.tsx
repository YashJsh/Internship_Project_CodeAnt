import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

const Signup = () => {
  const [selectedOption, setSelectedOption] = useState("SAAS");
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex flex-1 relative">
          <img src="./codeant.svg" alt="" className="absolute bottom-0 left-0"/>
      </div>
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
              <div>
                {/* Login Options for SAAS */}
                <div className="w-full h-14 flex justify-center items-center border-[1px] rounded-lg gap-2 hover:bg-[#F5F5F5]">
                  <FaGithub className="h-6 w-6" />
                  <p className="font-semibold">Sign in with Github</p>
                </div>
                <div className="mt-3 w-full h-14 flex justify-center items-center border-[1px] rounded-lg gap-2 hover:bg-[#F5F5F5]">
                  <FaBitbucket className="h-6 w-6 text-[#2684FF]" />
                  <p className="font-semibold">Sign in with Bitbucket </p>
                </div>
                <div className="mt-3 w-full h-14 flex justify-center items-center border-[1px] rounded-lg gap-2 hover:bg-[#F5F5F5]">
                  <VscAzureDevops className="h-6 w-6 text-[#0074D1]" />
                  <p className="font-semibold">Sign in with Azure Devops </p>
                </div>
                <div className="mt-3 w-full h-14 flex justify-center items-center border-[1px] rounded-lg gap-2 hover:bg-[#F5F5F5]">
                  <FaGitlab className="h-6 w-6 text-[#FCA121]" />
                  <p className="font-semibold">Sign in with GitLab </p>
                </div>
              </div>
            ) : (
              <div>
                {/* Login Options for Self Hosted */}
                <div className="mt-3 w-full h-14 flex justify-center items-center border-[1px] rounded-lg gap-2 hover:bg-[#F5F5F5]">
                  <FaGitlab className="h-6 w-6 text-[#FCA121]" />
                  <p className="font-semibold">Self Hosted GitLab </p>
                </div>
                <div className="mt-3 w-full h-14 flex justify-center items-center border-[1px] rounded-lg gap-2 hover:bg-[#F5F5F5]">
                  <IoKeyOutline className="h-6 w-6 " />
                  <p className="font-semibold">Sign in with SSO</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <h3 className="font-normal text-xs pt-6">By signing up you agree to the <span className="font-semibold">Privacy Policy.</span></h3>
      </div>
    </div>
  );
};

export default Signup;
