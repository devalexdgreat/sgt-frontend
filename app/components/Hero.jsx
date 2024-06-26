'use client';
import Image from "next/image";
import LogoImg from '@/public/hero.png';
import Link from 'next/link';
import SignupForm from './SignupForm';
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";

export default function Hero() {

    const [openModal, setOpenmodal] = useState(false);

    const toggleModal = () => {
        setOpenmodal(prevOpenModal => !prevOpenModal);
    };

    return (
        <div className="w-full bg-black text-white h-screen flex justify-center items-center pt-0 md:pt-16">
            <div className="relative w-11/12 mx-auto bg-black flex md:justify-between h-5/6 justify-center items-center">
                <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                    <Image src={LogoImg} className='w-full' alt='' height={100} width={100} />
                    <p className='py-8 text-md'>Show case your talent and stand a chance to win big.
                    <br className='hidden md:block'/> Will you be the next street champion?</p>
                    <div>
                        <button onClick={toggleModal} className='py-2 px-6 border border-[#52CF50]'>Register Now</button>
                    </div>
                </div>
                <div className='hidden md:block w-6/12'>
                    <SignupForm />
                </div>
                {openModal ? (
                    <div className="absolute top-0 md:hidden w-full bg-transparent flex flex-col">
                        <div className="w-full pb-4 pt-2">
                            <button onClick={toggleModal}><GoArrowLeft className="h-6 w-6" /></button>
                        </div>
                        <SignupForm />
                    </div>
                ):(
                    <div></div>
                )}
                
            </div>
        </div>
    );
}