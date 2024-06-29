'use client';
import Image from "next/image";
import LogoImg from '@/public/logobg.png';
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    return (
        <div className="w-full bg-black/30 fixed text-white top-0 z-30">
            <div className="w-11/12 mx-auto flex justify-between items-center py-6 md:py-1">
                <Link href={'/'} className="hidden md:block">
                    <Image src={LogoImg} height={100} width={100} className="" alt="" />
                </Link>
                <button onClick={toggleMenu} className="md:hidden"><HiMenuAlt1 className="h-6 w-6" /></button>
                <button className="md:hidden"><FiSearch className="h-6 w-6" /></button>
                <div className="hidden w-6/12 md:flex justify-between">
                    <div className="flex gap-20">
                        <Link href={'#contestants'} className="">Contestants</Link>
                        <Link href={'#gallery'} className="">Gallery</Link>
                        <Link href={'/contact'} className="">Contact</Link>
                    </div>
                    <div>
                        <Link href={'/signup'} className="border border-[#52CF50] text-white py-2 px-6">Sign-up</Link>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="w-full h-screen text-white fixed top-0 bg-black z-30 md:hidden flex flex-col gap-8 items-center py-4">
                    <button onClick={toggleMenu} className="absolute top-4 right-4">
                        <IoClose className="h-6 w-6" />
                    </button>
                    <div className="w-full flex justify-center items-center">
                        <Image src={LogoImg} onClick={toggleMenu} height={100} width={100} className="" alt="" />
                    </div>
                    <div className="h-5/6 flex flex-col justify-between w-9/12">
                        <div className="flex flex-col gap-8 w-full mx-auto text-lg">
                            <Link href={'#contestants'} onClick={toggleMenu} className="">Contestants</Link>
                            <Link href={'#gallery'} onClick={toggleMenu} className="">Gallery</Link>
                            <Link href={'#gallery'} onClick={toggleMenu} className="">Contact</Link>
                        </div>
                        <div className="text-center w-full flex flex-col justify-center gap-6 mb-12">
                            <p>Come show your talent and win grand prizes</p>
                            <div className="w-full flex justify-center">
                                <button href={'#hero'} onClick={toggleMenu} className="border border-[#52CF50] text-white py-2 px-6 w-full text-center">Sign-up</button>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <Link href={'https://www.tiktok.com/@xpatainment?_t=8nbfITf0F3W&_r=1'} className="" passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaTiktok />
                                    </a>
                                </Link>
                                <Link href={'https://www.instagram.com/xpatainment_?igsh=aW1qc2RtaGt3bnBo'} className="" passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaInstagram />
                                    </a>
                                </Link>
                                <Link href={'https://www.facebook.com/streetsgottalent_'} className="" passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaFacebookF />
                                    </a>
                                </Link>
                                <Link href={'https://www.facebook.com/xpataintment?mibextid=kFxxJD'} className="" passHref legacyBehavior>
                                    <a target="_blank">
                                        <FaYoutube />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}