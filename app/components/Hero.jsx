'use client';
import Image from "next/image";
import LogoImg from '@/public/hero.png';
import Link from 'next/link';
import SignupForm from './SignupForm';
import { useState } from "react";
import RegForm from "./RegForm";
import PayForm from "./PayForm";
import NoSeasonCard from "./NoSeasonCard";
import NoSeasonPcCard from "./NoSeasonPcCard";

export default function Hero({ session }) {
    
    const [openModal, setOpenmodal] = useState(false);
    const [page, setPage] = useState(0);
    const [isSeasonAvail, setIsSeasonAvail] = useState(true);
    const [openNoModal, setOpenNoModal] = useState(false);

    const toggleNoModal = () => {
        setOpenNoModal(prevOpenNoModal => !prevOpenNoModal);
    };

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

    const handleRegister = () => {
        if(session === null || session.currentSeason.acceptance === false) {
            setOpenNoModal(true);
        } else {
            toggleModal();
        }
    }

    return (
        <div className="w-full hero-bg text-white h-screen flex justify-center items-center pt-0 md:pt-16 overflow-hidden">
            <div className="relative w-11/12 mx-auto flex flex-col md:flex-row md:justify-between h-5/6 justify-center items-center">

            {/* <div class="-z-10 absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,green,rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,green,rgba(255,255,255,0))]"></div> */}

                <div className='flex flex-col items-center text-center md:text-left md:items-start'>
                    <Image src={LogoImg} className='w-full' alt='' height={100} width={100} />
                    <p className='py-8 text-md'>Show case your talent and stand a chance to win big.
                    <br className='hidden md:block'/> Will you be the next street champion?</p>
                    <div>
                        <button onClick={handleRegister} className='bg-[#52CF50] text-black py-2 px-6 rounded-md md:hidden'>Register Now</button>
                        <button className="hidden md:block py-2 px-6 border border-[#52CF50]">
                            Register Now
                        </button>
                    </div>
                </div>
                <div className='hidden md:block w-6/12'>
                    {session === null ? (
                        <NoSeasonPcCard />
                    ):(
                        <SignupForm />
                    )}
                </div>
                <NoSeasonCard openNoModal={openNoModal} toggleNoModal={toggleNoModal} />
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