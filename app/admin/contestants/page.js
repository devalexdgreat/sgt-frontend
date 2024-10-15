import { superFetch } from "@/actions";
import User from "@/app/components/admin/User";

export default async function Contestants() {

    const data = await superFetch(`contestants/current?page=1&limit=1000`);

    var contestants;
    if (data && Array.isArray(data.contestants)) {
        const filteredContestants = data.contestants.filter(contestant => 
            contestant.status !== 'evicted' && contestant.status !== 'eliminated'
          );
        contestants = filteredContestants;
    } else {
        contestants = [];
    }

    return (
        <div className="w-full bg-black text-black h-screen md:h-screen lg:h-screen flex md:justify-center md:items-start lg:items-center pt-5 md:pt-16 overflow-hidden">
            <User data={contestants} />
        </div>
    );
}