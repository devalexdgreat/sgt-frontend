import AdminNav from "@/app/components/AdminNav";
import Image from "next/image";
import testImg from '@/public/conte.png'

export default function Contestants() {
    return (
        <div className="w-full bg-black text-black h-screen md:h-screen lg:h-screen flex md:justify-center md:items-start lg:items-center pt-5 md:pt-16 overflow-hidden">
            <div className="md:mt-10 lg:mt-0 relative w-full mx-auto text-white">
                <AdminNav />
                <div className="w-full md:w-6/12 mx-auto md:bg-black/60 backdrop-blur-sm rounded-md overflow-y-scroll scrollbar-hide h-[90vh] md:h-96 mt-12 pb-6 border border-gray-800">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-2 pt-2">
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-md border-green-500">
                            <div className="h-36 md:h-36 w-full rounded-t-md">
                                <Image src={testImg} className="object-cover object-center h-full w-full rounded-t-md" alt="" />
                            </div>
                            <div className="flex flex-col items-center bg-white md:bg-black b border-green-500 rounded-b-md text-black md:text-white">
                                <span className="mt-2">Royalty</span>
                                <span className="text-sm md:text-gray-300">Performance: <span>Dancing</span></span>
                                <button className="bg-red-500 text-white py-1 px-6 rounded-md mt-4 mb-2 text-sm">Eliminate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}