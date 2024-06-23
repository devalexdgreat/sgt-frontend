import Image from "next/image";
import LogoImg from '@/public/hero.png';
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
    return (
        <div className="w-full bg-black text-white absolute top-0">
            <div className="w-11/12 mx-auto flex justify-between items-center py-6 md:py-3">
                <Link href={'/'} className="hidden md:block">
                    <Image src={LogoImg} height={100} width={100} className="" alt="" />
                </Link>
                <button className="md:hidden"><HiMenuAlt1 className="h-6 w-6" /></button>
                <button className="md:hidden"><FiSearch className="h-6 w-6" /></button>
                <div className="hidden w-6/12 md:flex justify-between">
                    <div className="flex gap-20">
                        <Link href={'/contestants'} className="">Contestants</Link>
                        <Link href={'/gallery'} className="">Gallery</Link>
                    </div>
                    <div>
                        <Link href={'/signup'} className="border border-[#52CF50] text-white py-2 px-6">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}