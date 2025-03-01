'use client';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import ContestantImg from '@/public/conte.png';
import emptyIcon from '@/public/empty.png';
import SearchComponent from "./SearchComponent";
import Link from "next/link";
import { superFetch } from "@/actions";
import Spinner from './Spinner';

export default function ContestantsSection({ session, contestants, pageData }) {
    const [page, setPage] = useState(pageData?.currentPage || 1);
    const [contestantsList, setContestantsList] = useState(contestants || []);
    const [loading, setLoading] = useState(false);

    // Handle fetching data for the current page
    const fetchContestants = async (page) => {
        setLoading(true);
        const data = await superFetch(`contestants/current?page=${page}&limit=${5}`);
        if (data) {
            setContestantsList(data.contestants);
            setLoading(false);
        }
    };

    // Handle page change
    const handlePageChange = (newPage) => {
        
        if (newPage > 0 && newPage <= pageData.totalPages) {
            setPage(newPage);
            fetchContestants(newPage);
        }
    };

    return (
        <div className="w-full" id="contestants">
            <div className="w-11/12 mx-auto">
                <div className="w-full flex justify-between mt-8">
                    <div className="md:hidden w-full text-center flex items-center justify-center">
                        {session === null ? (
                            <span className="hidden">error</span>
                        ) : (
                            <h1 className="w-9/12 mx-auto font-bold text-xl">
                                Contestants for {session.currentSeason.title}
                            </h1>
                        )}
                    </div>
                    <div className="hidden md:flex flex-col text-md w-4/12">
                        <div className="w-full">
                            <span className="text-xl font-bold">Contestants for</span>
                        </div>
                        {session === null ? (
                            <div className="hidden">error</div>
                        ) : (
                            <div className="w-full flex justify-end">
                                <span className="text-xl font-bold">
                                    Street Got Talent {session.currentSeason.title}
                                </span>
                            </div>
                        )}
                    </div>
                    <SearchComponent />
                </div>
                <>
                    {loading ? (
                        <div className="w-full py-12 flex justify-center">
                            <div><Spinner/></div>
                        </div>
                    ) : contestantsList.length === 0 ? (
                        <div className="w-full py-12 flex justify-center">
                            <div className="flex flex-col justify-center items-center text-center">
                                <Image
                                    src={emptyIcon}
                                    height={100}
                                    width={100}
                                    className="h-48 w-48"
                                    alt=""
                                />
                                <h1>No Contestants at the moment😥</h1>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="w-full">
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
                                    {contestantsList.map((d) => (
                                        <div key={d._id} className="relative">
                                            {d.status === 'evicted' ? (
                                                <div className="absolute top-2 right-2 bg-red-500 text-white p-2">
                                                    <span className="font-medium text-center">
                                                        {d.status.charAt(0).toUpperCase() + d.status.slice(1)}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className='flex gap-2 items-center absolute top-2 right-2'>
                                                    {d.group != null && (
                                                        <div className="bg-green-500 text-white p-2">
                                                            <span className="font-medium text-center">
                                                                {d.group.charAt(0).toUpperCase() + d.group.slice(1)}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="bg-green-500 text-white p-2">
                                                        <span className="font-medium text-center">
                                                            {d.status.charAt(0).toUpperCase() + d.status.slice(1)}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            <Link
                                                href={`/contestant/${d._id}`}
                                                className="top-0 absolute w-full h-full"
                                            ></Link>
                                            <div className="h-80 md:h-64">
                                                <Image
                                                    src={d.imageUrl}
                                                    className="h-full w-full object-cover object-center"
                                                    alt=""
                                                    width={1000}
                                                    height={1000}
                                                />
                                            </div>
                                            <div className="flex flex-col text-center justify-center py-2">
                                                <span>
                                                    Name: <span className="font-bold">{d.name}</span>
                                                </span>
                                                <span>
                                                    Performance Type: <span className="font-bold">{d.performanceType}</span>
                                                </span>
                                                <span>
                                                    Votes: <span className="font-bold">{d.votes}</span>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full flex justify-center py-4">
                                <div className="flex gap-8 items-center pb-2">
                                    <button
                                        className={page !== 1 ? 'bg-green-500 px-2 py-2 text-white' : 'bg-green-300 text-white py-2 px-2'}
                                        onClick={() => handlePageChange(page - 1)}
                                        disabled={page === 1}
                                    >
                                        <FiChevronLeft />
                                    </button>
                                    <span className='bg-green-500 text-white px-3 py-1'>{page}/{pageData?.totalPages}</span>
                                    <button
                                        className={page !== pageData?.totalPages ? 'bg-green-500 text-white px-2 py-2' : 'bg-green-300 text-white py-2 px-2'}
                                        onClick={() => handlePageChange(page + 1)}
                                        disabled={page === pageData?.totalPages}
                                    >
                                        <FiChevronRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            </div>
        </div>
    );
}
