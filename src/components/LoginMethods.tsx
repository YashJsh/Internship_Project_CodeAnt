import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

export const SaasLogin = () => {
  return (
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
  )
}

export const SelfHosted = ()=>{
    return (
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
    )
}