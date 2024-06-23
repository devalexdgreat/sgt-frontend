import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { BsFilterLeft } from "react-icons/bs";
import Image from "next/image";
import ContestantImg from '@/public/conte.png';

export default function ContestantsSection() {
    return (
        <div className="w-full">
            <div className="w-11/12 mx-auto">
                <div className="w-full flex justify-between mt-8">
                    <div className="md:hidden w-full text-center flex items-center justify-center">
                        <h1 className="font-bold text-xl">Contestants</h1>
                    </div>
                    <div className="hidden md:flex flex-col text-md w-3/12">
                        <div className="w-full">
                            <span className="font-bold">Contestants for</span>
                        </div>
                        <div className="w-full flex justify-end">
                            <span className="font-bold">Street Got Talent Season 2</span>
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
        </div>
    );
}