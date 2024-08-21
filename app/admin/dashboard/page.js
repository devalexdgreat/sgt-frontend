import AdminNav from "@/app/components/AdminNav";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

export default function Dashboard() {
    return (
        <div className="w-full hero-bg text-black h-screen md:h-screen lg:h-screen flex justify-center items-center md:items-start lg:items-center pt-5 md:pt-16 overflow-hidden">
            <div className="md:mt-10 lg:mt-0 relative w-11/12 mx-auto text-white">
                <AdminNav />

            </div>
        </div>
    );
}