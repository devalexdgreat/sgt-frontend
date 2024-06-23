import Image from "next/image";
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="w-full bg-black text-white">
            <div className="w-11/12 mx-auto py-8 flex flex-col md:flex-row gap-6 justify-between items-center">
                <div className="flex flex-col items-center md:items-start">
                    <Link href={'/'} className="">
                        <Image src='/heroimg.png' height={100} width={100} className="" alt="" />
                    </Link>
                    <div className="mt-12 flex gap-10">
                        <Link href={'#'} className="">Contestants</Link>
                        <Link href={'#'} className="">Gallery</Link>
                        <Link href={'#'} className="">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link href={'#'} className=""><FaFacebookF /></Link>
                    <Link href={'#'} className=""><FaXTwitter /></Link>
                    <Link href={'#'} className=""><FaInstagram /></Link>
                    <Link href={'#'} className=""><FaYoutube /></Link>
                </div>
            </div>
        </div>
    );
}