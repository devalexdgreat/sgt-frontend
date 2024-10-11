import { GoArrowLeft } from "react-icons/go";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import ShareBtn from "@/app/components/ShareBtn";
import Navbar from "@/app/components/Navbar";
import { superFetch } from "@/actions";
import ContestantBox from "@/app/components/ContestantBox";

export default async function Contestant({ params }) {
    const { id } = params;
    const data = await superFetch(`contestants/current/${id}`);
    
    var contestant;
    if (data && !Array.isArray(data.contestant)) {
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