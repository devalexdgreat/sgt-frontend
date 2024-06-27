'use client'
import { useState } from "react";
import { AiOutlineStop } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";


export default function NoSeasonPcCard({ }) {

    return (
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full p-4 bg-white rounded-md text-black flex flex-col justify-center items-center text-center gap-6">
                        <AiOutlineStop className="h-24 w-24" />
                        <h1>Application form is not available at the moment</h1>    <span className="font-bold">Contact us 
                        xpatainment@gmail.com</span>
                        <button className="bg-[#52CF50] rounded-md px-6 py-2 text-white">Send Us a message</button>
                    </div>
                </div>
    );
}