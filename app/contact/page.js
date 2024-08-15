import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
    return (
        <div className="w-full hero-bg text-black h-[800px] md:h-auto flex justify-center items-center pt-5 md:pt-16 overflow-hidden">
            <div className="relative w-11/12 md:w-full mx-auto flex flex-col h-5/6 justify-center items-center rounded-md  bg-white/10 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0 text-white">
                
                <form className="text-sm w-11/12 md:w-5/12 flex flex-col gap-6 md:pb-24 md:pt-6">
                    <div className="flex items-start w-11/12">
                        <Link href={'/'} className="w-full flex items-start justify-start md:hidden">
                            <GoArrowLeft className="h-6 w-6" />
                        </Link>
                    </div>
                    <h1 className="py-6 pb-8 text-xl md:text-2xl text-center">Like to share anything with us?</h1>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col gap-3 w-full">
                            <label>
                                Your name (Required)
                            </label>
                            <div className="border border-gray-500 flex justify-between items-center px-1 gap-3 rounded-sm bg-white">
                                <input type="text" placeholder="John Doe" className="py-2 md:py-0.5 text-gray-700 w-full outline-none ps-1" />
                                <FaRegUser className="h-4 w-4 text-gray-500 pe-1" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            <label>
                                Your email (Required)
                            </label>
                            <div className="border border-gray-500 flex justify-between items-center px-1 gap-3 rounded-sm bg-white">
                                <input type="email" placeholder="Johndoe@email.com" className="py-2 md:py-0.5 text-gray-700 w-full outline-none ps-1" />
                                <MdOutlineMail className="h-5 w-5 text-gray-500 pe-1" />
                            </div>
                        </div>
                    </div>
                    

                    <div className="flex flex-col gap-3 w-full">
                        <label>
                            Subject
                        </label>
                        <div className="border border-gray-500 flex justify-between items-center px-1 gap-3 rounded-sm bg-white">
                            <input type="text" placeholder="I want to register" className="py-2 md:py-0.5 text-gray-700 w-full outline-none px-1" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <label>
                            Your message
                        </label>
                        <div className="border border-gray-500 flex justify-between items-center px-1 gap-3 rounded-sm bg-white">
                            <textarea className="py-2 md:py-0.5 text-gray-700 w-full outline-none px-1 resize-none rounded-sm" rows='4'>
                            </textarea>
                        </div>
                    </div>
                    <button className="bg-[#52CF50] text-white w-full py-2 px-6 rounded-md">Send</button>
                </form>
            </div>
        </div>
    );
}