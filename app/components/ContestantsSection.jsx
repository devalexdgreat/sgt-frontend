import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { BsFilterLeft } from "react-icons/bs";
import Image from "next/image";
import ContestantImg from '@/public/conte.png';
import emptyIcon from '@/public/empty.png';
import useFetch from "@/utils/useFetch";

export default async function ContestantsSection() {

    const contestants = await useFetch(`contestants/current?pages=1&limit=10`);
    console.log(contestants);

    return (
        <div className="w-full" id="contestants">
            <div className="w-11/12 mx-auto">
                <div className="w-full flex justify-between mt-8">
                    <div className="md:hidden w-full text-center flex items-center justify-center">
                        <h1 className="font-bold text-xl">Contestants</h1>
                    </div>
                    <div className="hidden md:flex flex-col text-md w-3/12">
                        <div className="w-full">
                            <span className="text-xl font-bold">Contestants for</span>
                        </div>
                        <div className="w-full flex justify-end">
                            <span className="text-xl font-bold">Street Got Talent Season 2</span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex gap-3">
                            <button className="bg-[#EAFFEA] w-8 flex justify-center items-center rounded-md">
                                <BsFilterLeft className="" />
                            </button>
                            <div className="border border-black rounded-md flex p-1 px-2 items-center gap-1">
                                <input type="" className="outline-none" />
                                <button>
                                    <FiSearch className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    {contestants === null ? (
                        <div className="w-full py-12 flex justify-center">
                            <div className="flex flex-col justify-center items-center text-center">
                                <Image src={emptyIcon} height={100} width={100} className="h-48 w-48" alt="" />
                                <h1>No Contestants at the moment😥</h1>
                            </div>
                        </div>
                    ):(
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3">
                                <div>
                                    <div>
                                        <Image src={ContestantImg} className="w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center justify-center py-2">
                                        <span>Name: <span className="font-bold">Davido</span></span>
                                        <span>Perfomance Type: <span className="font-bold">Singing</span></span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Image src={ContestantImg} className="w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center justify-center py-2">
                                        <span>Name: <span className="font-bold">Davido</span></span>
                                        <span>Perfomance Type: <span className="font-bold">Singing</span></span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Image src={ContestantImg} className="w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center justify-center py-2">
                                        <span>Name: <span className="font-bold">Davido</span></span>
                                        <span>Perfomance Type: <span className="font-bold">Singing</span></span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Image src={ContestantImg} className="w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center justify-center py-2">
                                        <span>Name: <span className="font-bold">Davido</span></span>
                                        <span>Perfomance Type: <span className="font-bold">Singing</span></span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Image src={ContestantImg} className="w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center justify-center py-2">
                                        <span>Name: <span className="font-bold">Davido</span></span>
                                        <span>Perfomance Type: <span className="font-bold">Singing</span></span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Image src={ContestantImg} className="w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center justify-center py-2">
                                        <span>Name: <span className="font-bold">Davido</span></span>
                                        <span>Perfomance Type: <span className="font-bold">Singing</span></span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Image src={ContestantImg} className="w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center justify-center py-2">
                                        <span>Name: <span className="font-bold">Davido</span></span>
                                        <span>Perfomance Type: <span className="font-bold">Singing</span></span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Image src={ContestantImg} className="w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col text-center justify-center py-2">
                                        <span>Name: <span className="font-bold">Davido</span></span>
                                        <span>Perfomance Type: <span className="font-bold">Singing</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center py-4">
                                <div className="flex gap-8 items-center pb-2">
                                    <button><FiChevronLeft /></button>
                                    <button><FiChevronRight /></button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
                
            </div>
        </div>
    );
}