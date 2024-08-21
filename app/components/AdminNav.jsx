import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { HiMenuAlt1 } from "react-icons/hi";

export default function AdminNav() {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <Link href={'/'} className="">
                    <GoArrowLeft className="w-6 h-6 hover:text-[#52CF50] duration-500" />
                </Link>
                <button className="lg:hidden"><HiMenuAlt1 className="h-6 w-6" /></button>
            </div>
        </div>
    );
}