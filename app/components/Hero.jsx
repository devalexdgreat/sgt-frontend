'use client';
import Image from "next/image";
import LogoImg from '@/public/hero.png';
import Link from 'next/link';
import SignupForm from './SignupForm';
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import FormComponent from "./FormComponent";
import RegForm from "./RegForm";
import PayForm from "./PayForm";

export default function Hero() {

    const [openModal, setOpenmodal] = useState(false);
    const [page, setPage] = useState(0);

    const toggleModal = () => {
        setOpenmodal(prevOpenModal => !prevOpenModal);
    };

    const PageDisplay = () => {
        if(page === 0) {
            return <RegForm toggleModal={toggleModal} handleNext={handleNext} />
        } else if(page === 1) {
            return <PayForm handlePrev={handlePrev} />
        }
    }

    const handleNext = () => {
        setPage((currPage) => currPage + 1);
    }

    const handlePrev = () => {
        setPage((currPage) => currPage - 1);
    }

    return (
        <div className="w-full bg-black text-white h-screen flex justify-center items-center pt-0 md:pt-16">
            <div className="relative w-11/12 mx-auto bg-black flex flex-col md:flex-row md:justify-between h-5/6 justify-center items-center">
                <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                    <Image src={LogoImg} className='w-full' alt='' height={100} width={100} />
                    <p className='py-8 text-md'>Show case your talent and stand a chance to win big.
                    <br className='hidden md:block'/> Will you be the next street champion?</p>
                    <div>
                        <button onClick={toggleModal} className='bg-green-500 text-white py-2 px-6 rounded-md md:hidden'>Register Now</button>
                        <button className="hidden md:block py-2 px-6 border border-[#52CF50]">
                            Register Now
                        </button>
                    </div>
                </div>
                <div className='hidden md:block w-6/12'>
                    <SignupForm />
                </div>
                {/* <FormComponent toggleModal={toggleModal}/> */}
                {openModal ? (
                    <div className="md:hidden w-full">
                        {PageDisplay()}
                    </div>
                ):(
                    <div className="hidden"></div>
                )}
            </div>
        </div>
    );
}