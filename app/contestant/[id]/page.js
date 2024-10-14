import { GoArrowLeft } from "react-icons/go";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import ShareBtn from "@/app/components/ShareBtn";
import Navbar from "@/app/components/Navbar";
import { superFetch } from "@/actions";
import ContestantBox from "@/app/components/ContestantBox";

export default async function Contestant({ params }) {
    const { id } = params;
    const data = await superFetch(`contestants/current/${id}`);
    
    let contestant;
    if (data && typeof data.contestant === 'object' && !Array.isArray(data.contestant) && data.contestant !== null) {
        contestant = data.contestant;
    } else {
        contestant = null;
    }

    return (
        <div className="w-full">
            <Navbar />
            <ContestantBox contestant={contestant} id={id} />
        </div>
    );
}