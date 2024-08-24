import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import useFetch from "@/utils/useFetch";
import FoodOpt from "@/app/components/voting/FoodOpt";

export default async function Voting({ params }) {

    const { id } = params

    const data = await useFetch(`/streetfoods`);
    console.log(data);

    var streetFoods;
    if (data && Array.isArray(data.streetFoods)) {
        streetFoods = data.streetFoods;
    } else {
        streetFoods = null;
    }

    return (
        <div className="w-full hero-bg text-black h-screen md:h-screen lg:h-screen flex justify-center items-start md:items-start lg:items-start pt-20 md:pt-20 lg:pt-28 overflow-hidden">

            <div className="md:mt-10 lg:mt-0 relative w-11/12 mx-auto text-white">
                <div className="mb-4">
                    <Link href={'/'} className="">
                        <GoArrowLeft className="w-6 h-6 hover:text-[#52CF50] duration-500" />
                    </Link>
                </div>
                <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
                    <div>
                        <h1 className="text-center text-lg md:text-xl">Buy me street food</h1>
                    </div>
                    {streetFoods === null ? (
                        <div className="hidden">error</div>
                    ):(
                        <FoodOpt id={id} streetFoods={streetFoods}/>
                    )}
                </div>
            </div>
        </div>
    );
}