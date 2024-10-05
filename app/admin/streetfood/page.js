import { superFetch } from "@/actions";
import StreetFoodBox from "@/app/components/admin/StreetFoodBox";

export default async function StreetFood() {

    const data = await superFetch(`/streetfoods`);
    var streetFoods;
    if (data && Array.isArray(data.streetFoods)) {
        streetFoods = data.streetFoods;
    } else {
        streetFoods = [];
    }

    return (
        <div className="w-full">
            <StreetFoodBox data={streetFoods} />
        </div>
    );
}