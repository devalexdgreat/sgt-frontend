import { superFetch } from "@/actions";
import DashComp from "@/app/components/admin/DashComp";

export default async function Dashboard() {

    const data = await superFetch(`contestants/current`);
    
    var contestants;
    if (data && Array.isArray(data.contestants)) {
        contestants = data.contestants;
    } else {
        contestants = [];
    }

    const lData = await superFetch(`contestants/current?leaderboard='s'`);

    var lCon;
    if (lData && Array.isArray(lData.contestants)) {
        lCon = lData.contestants;
    } else {
        lCon = [];
    }

    return (
        <div className="w-full bg-black text-black h-screen md:h-screen lg:h-screen flex md:justify-center md:items-start lg:items-center pt-5 md:pt-16 overflow-hidden">
            <DashComp data={contestants} lData={lCon} />
        </div>
    );
}