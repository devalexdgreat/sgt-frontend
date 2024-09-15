'use client'
import AdminNav from "@/app/components/AdminNav";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import conImg from '@/public/conte.png';
import { useState } from "react";

export default function Dashboard() {

    const [isSelected, setIsSelected] = useState(false);

    const toggleLead = () => {
        setIsSelected(true);
    }

    const toggleComp = () => {
        setIsSelected(false);
    }

    return (
        <div className="w-full bg-black text-black h-screen md:h-screen lg:h-screen flex md:justify-center md:items-start lg:items-center pt-5 md:pt-16 overflow-hidden">
            <div className="md:mt-10 lg:mt-0 relative w-full mx-auto text-white">
                <AdminNav />
                <div className="text-center hidden md:block">
                    <h1 className="font-bold text-lg">Dashboard</h1>
                </div>
                <div className="w-full md:w-6/12 mx-auto md:bg-black/60 backdrop-blur-sm rounded-md overflow-y-scroll scrollbar-hide h-[90vh] md:h-96 mt-12 pb-6 border border-gray-800">
                    <div className="text-center md:hidden mt-2">
                        <h1 className="font-medium text-lg">Dashboard</h1>
                    </div>
                    <div className="bg-black rounded-t-md text-sm border-gray-800 border-b-2 w-full flex justify-between sticky top-0">
                        <button onClick={toggleComp} className="w-full flex justify-end items-end p-3 pe-5">
                            <div>
                                {isSelected === true ? (
                                    <span>Competitors (56)</span>
                                ):(
                                    <span className="text-green-500 border-green-500 border-b-2 pb-1 duration-150">Competitors (56)</span>
                                )}
                            </div>
                        </button>
                        <button onClick={toggleLead} className="w-full flex justify-start items-start p-3 ps-5">
                            <div>
                                {isSelected === true ? (
                                    <span className="text-green-500 border-green-500 border-b-2 pb-1 duration-150">Leaderboards</span>
                                ):(
                                    <span>Leaderboards</span>
                                )}
                            </div>
                        </button>
                    </div>
                    {isSelected ? (
                        <div className="">
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-gray-400 text-sm">
                                    <span className="text-green-500">Group 1</span>
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div className="">
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                            <div className="px-3 py-2 flex justify-between items-center border-gray-800 border-b-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-16 w-16 rounded-md">
                                        <Image src={conImg} className="bg-cover h-full w-full rounded-md" alt="contestant" />
                                    </div>
                                    <div className="">
                                        <h1>Favour Ebere</h1>
                                        <p className="text-sm text-gray-400">Performance: <span>Dance</span></p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span className="border-bottom border-gray-200">400 Votes</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}