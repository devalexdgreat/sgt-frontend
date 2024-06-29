import Image from "next/image";
import LogoImg from '@/public/hero.png';
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="w-full bg-black text-white">
            <div className="w-11/12 mx-auto py-8 flex flex-col md:flex-row gap-6 justify-between items-center">
                <div className="flex flex-col items-center md:items-start">
                    <Link href={'/'} className="">
                        <Image src={LogoImg} height={100} width={100} className="" alt="" />
                    </Link>
                    <div className="mt-12 flex gap-10">
                        <Link href={'#contestants'} className="">Contestants</Link>
                        <Link href={'#gallery'} className="">Gallery</Link>
                        <Link href={'/contact'} className="">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link href={'https://www.tiktok.com/@streetsgottalent_'} className="" passHref legacyBehavior>
                        <a target="_blank">
                            <FaTiktok />
                        </a>
                    </Link>
                    <Link href={'https://www.instagram.com/streetsgottalent_'} className="" passHref legacyBehavior>
                        <a target="_blank">
                            <FaInstagram />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}