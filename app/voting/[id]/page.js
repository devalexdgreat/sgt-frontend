import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import foodImg from '@/public/conte.png';

export default function Voting() {
    return (
        <div className="w-full hero-bg text-black h-screen md:h-screen lg:h-screen flex justify-center items-center md:items-start lg:items-center pt-5 md:pt-16 overflow-hidden">
            <div className="md:mt-10 lg:mt-0 relative w-11/12 mx-auto text-white">
                <div className="mb-4">
                    <Link href={'/'} className="">
                        <GoArrowLeft className="w-6 h-6 hover:text-[#52CF50] duration-500" />
                    </Link>
                </div>
                <div className="w-full md:w-8/12 mx-auto">
                    <div>
                        <h1 className="text-center text-lg font-bold">Buy my street food</h1>
                    </div>
                    <div className="flex flex-col gap-2 mt-6 h-[350px] md:h-[350px] overflow-y-scroll scrollbar-hide">
                        <div className="flex justify-between items-center rounded-md bg-white/5 ps-2 pe-3 py-2">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-12 md:w-24 md:h-16 rounded-md">
                                    <Image src={foodImg} alt="" height={1000} width={1000} className="h-full w-full object-cover rounded-sm" />
                                </div>
                                <span>Roasted Corn</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm">N23,000</span>
                        </div>
                        <div className="flex justify-between items-center rounded-md bg-white/5 ps-2 pe-3 py-2">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-12 md:w-24 md:h-16 rounded-md">
                                    <Image src={foodImg} alt="" height={1000} width={1000} className="h-full w-full object-cover rounded-sm" />
                                </div>
                                <span>Roasted Corn</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm">N23,000</span>
                        </div>
                        <div className="flex justify-between items-center rounded-md bg-white/5 ps-2 pe-3 py-2">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-12 md:w-24 md:h-16 rounded-md">
                                    <Image src={foodImg} alt="" height={1000} width={1000} className="h-full w-full object-cover rounded-sm" />
                                </div>
                                <span>Roasted Corn</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm">N23,000</span>
                        </div>
                        <div className="flex justify-between items-center rounded-md bg-white/5 ps-2 pe-3 py-2">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-12 md:w-24 md:h-16 rounded-md">
                                    <Image src={foodImg} alt="" height={1000} width={1000} className="h-full w-full object-cover rounded-sm" />
                                </div>
                                <span>Roasted Corn</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm">N23,000</span>
                        </div>
                        <div className="flex justify-between items-center rounded-md bg-white/5 ps-2 pe-3 py-2">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-12 md:w-24 md:h-16 rounded-md">
                                    <Image src={foodImg} alt="" height={1000} width={1000} className="h-full w-full object-cover rounded-sm" />
                                </div>
                                <span>Roasted Corn</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm">N23,000</span>
                        </div>
                        <div className="flex justify-between items-center rounded-md bg-white/5 ps-2 pe-3 py-2">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-12 md:w-24 md:h-16 rounded-md">
                                    <Image src={foodImg} alt="" height={1000} width={1000} className="h-full w-full object-cover rounded-sm" />
                                </div>
                                <span>Roasted Corn</span>
                            </div>
                            <span className="text-green-500 font-bold text-sm">N23,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}