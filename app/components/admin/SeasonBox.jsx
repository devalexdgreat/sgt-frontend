'use client'
import { FaChevronRight } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import AdminNav from "../AdminNav";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import img from '@/public/conte.png';
import { SiAdobeaudition } from "react-icons/si";
import { MdErrorOutline, MdGroups } from "react-icons/md";
import { PiCalendarCheckFill } from "react-icons/pi";
import { BsCalendarCheckFill } from "react-icons/bs";

export default function SeasonBox() {

    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [isComplete, setIsComplete] = useState(true);
    const [isOn, setIsOn] = useState(false);

    const toggleModal = () => {
        setIsOpen(prevOpen => !prevOpen);
    };

    const toggleResultModal = () => {
        setModal(prevOpen => !prevOpen);
    };

    const toggleOn = () => {
        setIsOn(prevVal => !prevVal);
    }

    return (
        <div className="w-full bg-black text-black h-screen md:h-screen lg:h-screen flex md:justify-center md:items-start lg:items-center pt-5 md:pt-16 overflow-hidden relative">
            <div className="md:mt-10 lg:mt-0 relative w-full mx-auto text-white">
                <AdminNav />
                <div className="text-center hidden md:block">
                    <h1 className="font-medium text-lg">Seasons</h1>
                </div>
                <div className="w-full md:w-6/12 mx-auto md:bg-black/60 backdrop-blur-sm rounded-md overflow-y-scroll scrollbar-hide h-[90vh] md:h-96 mt-12 pb-6 border border-gray-800 relative">
                    <div className="text-center md:hidden mt-2">
                        <h1 className="font-medium text-lg">Seasons</h1>
                    </div>
                    <div className="flex flex-col px-2 pt-2">
                        <div className="flex justify-between border-b-2 border-gray-800 p-2 items-center">
                            <div className="flex flex-col gap-1">
                                <span className="text-base">Season One (1)</span>
                                <span className="text-[10px] text-gray-400">No. of contestants: <span>4000</span></span>
                            </div>
                            <div>
                                <span className="text-green-500 text-[10px]">Completed</span>
                            </div>
                            <div>
                                <button onClick={toggleResultModal} className="bg-white/20 backdrop-blur-sm p-1">
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between border-b-2 border-gray-800 p-2 items-center">
                            <div className="flex flex-col gap-1">
                                <span className="text-base">Season One (1)</span>
                                <span className="text-[10px] text-gray-400">No. of contestants: <span>4000</span></span>
                            </div>
                            <div>
                                <span className="text-green-500 text-[10px]">Completed</span>
                            </div>
                            <div>
                                <button onClick={toggleResultModal} className="bg-white/20 backdrop-blur-sm p-1">
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between border-b-2 border-gray-800 p-2 items-center">
                            <div className="flex flex-col gap-1">
                                <span className="text-base">Season One (1)</span>
                                <span className="text-[10px] text-gray-400">No. of contestants: <span>4000</span></span>
                            </div>
                            <div>
                                <span className="text-green-500 text-[10px]">Completed</span>
                            </div>
                            <div>
                                <button onClick={toggleResultModal} className="bg-white/20 backdrop-blur-sm p-1">
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button onClick={toggleModal} className="rounded-full border-green-500 border-2 h-8 w-8 absolute bottom-[10%] md:bottom-2 right-[5%] md:right-2">
                        <FiPlus className="text-green-500 h-full w-full" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="h-screen bg-black/10 backdrop-blur-sm w-full fixed top-0 right-0 flex justify-center items-center flex-col">
                    <span className="w-11/12 justify-center text-center flex gap-1 items-center mb-2">
                        <MdErrorOutline className="text-red-500" />
                        <span className="text-red-500 font-medium">Warning: Creating new season will automatically end previous seasons</span>
                    </span>
                    <div className="bg-white w-11/12 md:w-6/12 rounded-md relative">
                        <button onClick={toggleModal} className="absolute right-2 top-2 border border-black rounded-md"><IoCloseOutline className="h-5 w-5" /></button>
                        <form className="flex flex-col gap-5 w-11/12 md:w-10/12 mx-auto">
                            <div className="flex text-center justify-center items-center mt-3">
                                <h1 className="font-medium">Create new season</h1>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="title">
                                    Season Title
                                </label>
                                <input type="text" className="border border-black rounded-sm text-sm ps-2" placeholder="Credibility" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="limit">
                                    Contestant Limit
                                </label>
                                <input type="number" className="border border-black rounded-sm text-sm ps-2" placeholder="200" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="deadline">
                                    Application Deadline
                                </label>
                                <input type="date" className="border border-black rounded-sm text-sm ps-2"   placeholder="Credibility" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="fee">
                                    Registration Fee
                                </label>
                                <input type="number" className="border border-black rounded-sm text-sm ps-2" placeholder="Credibility" />
                            </div>
                            <div className="w-full flex justify-center">
                                <button className="text-white bg-green-500 font-bold w-6/12 my-4 py-2 px-6 text-sm rounded-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {modal && (
                <div className="w-full h-screen fixed top-0">
                    {isComplete === true ? (
                        <div className="h-screen bg-black/90 backdrop-blur-sm w-full fixed top-0 right-0 flex justify-center items-center">
                            <div className=" text-white w-11/12 md:w-6/12 rounded-md relative">
                                <button onClick={toggleResultModal} className="absolute right-0 top-0 border border-white rounded-md"><IoCloseOutline className="h-5 w-5" /></button>
                                <div className="flex text-center flex-col items-center gap-2 ">
                                    <h1 className="text-lg">Season One</h1>
                                    <span className="text-sm text-gray-400">Season was completed on Feb 31st 2024</span>
                                </div>
                                <div className="mt-3">
                                    <span className="text-gray-300">Winner from Season One</span>
                                </div>
                                <div className="mt-3">
                                    <div className="border border-white rounded-md flex gap-2 p-2 items-center">
                                        <div className="h-24 w-24">
                                            <Image src={img} className="object-cover rounded-md h-full w-full" alt="" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="">Royalty Bangs</span>
                                            <span className="text-gray-400 text-sm">Perfomance type: Arrang</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div className="mt-6 w-full h-screen absolute top-0 bg-black/80 backdrop-blur-sm flex justify-center items-center">
                            <div className="bg-black/30 border border-gray-300 text-white w-11/12 md:w-5/12 backdrop-blur-sm rounded-md">
                                <button onClick={toggleResultModal} className="absolute top-1 right-1 border border-white rounded-md">
                                    <IoCloseOutline className="h-5 w-5" />
                                </button>
                                <div className="w-11/12 mx-auto py-5">
                                    <div className="w-full text-center">
                                        <h1>Monitor Season Progress</h1>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Registration Fee</span>
                                        <span>#25,000</span>
                                    </div>
                                    <div className="mt-2">
                                        <button className="border border-green-500 text-white py-1 px-2 text-sm">Change Registration Fee</button>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span>Registration</span>
                                        <button onClick={toggleOn} className="border rounded-3xl px-1 flex justify-between items-center">
                                            {isOn === true ? (
                                                <div className="flex gap-1">
                                                    <div className="duration-300 rounded-full bg-white p-2">
                                                    </div>
                                                    <div className="duration-300 rounded-full bg-transparent p-2">
                                                    </div>
                                                </div>
                                            ):(
                                                <div className="flex gap-1">
                                                    <div className="duration-300 rounded-full bg-transparent p-2">
                                                    </div>
                                                    <div className="duration-300 rounded-full bg-green-500 p-2">
                                                    </div>
                                                </div>
                                            )}
                                        </button>
                                    </div>
                                    <div className="w-full flex flex-col items-center my-4 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-green-500"></div>
                                            <SiAdobeaudition className="h-6 w-6 text-green-500" />
                                            <div className="flex flex-col gap-0">
                                                <span className="text-green-500 font-medium text-sm">Auditions</span>
                                                <span className="text-green-500 font-light text-[11px]">100 Contestants</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-green-500"></div>
                                            <MdGroups className="h-6 w-6 text-green-500" />
                                            <div className="flex flex-col gap-0">
                                                <span className="text-green-500 font-medium text-sm">Groups</span>
                                                <span className="text-green-500 font-light text-[11px]">25 Contestants</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-green-500"></div>
                                            <SiAdobeaudition className="h-6 w-6 text-green-500" />
                                            <div className="flex flex-col gap-0">
                                                <span className="text-green-500 font-medium text-sm">Semi-Finals</span>
                                                <span className="text-green-500 font-light text-[11px]">4 Contestants</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-green-500"></div>
                                            <SiAdobeaudition className="h-6 w-6 text-green-500" />
                                            <div className="flex flex-col gap-0">
                                                <span className="text-green-500 font-medium text-sm">Finals</span>
                                                <span className="text-green-500 font-light text-[11px]">4 Contestants</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-green-500"></div>
                                            <BsCalendarCheckFill className="h-6 w-6 text-green-500" />
                                            <div className="flex flex-col gap-0 items-center">
                                                <span className="text-green-500 font-medium text-sm">Complete</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button className="border border-green-500 text-white py-1 px-4 text-sm">Advance Stage</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}