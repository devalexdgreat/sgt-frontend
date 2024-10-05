import { getToken, superAuthFetch } from "@/actions";
import SeasonBox from "@/app/components/admin/SeasonBox";

export default async function Seasons() {
    const accessToken = await getToken();

    const data = await superAuthFetch(`seasons`, accessToken);

    const curData = data.filter(datum => datum.current === true);
    var curSeason;
    if (curData && Array.isArray(curData)) {
        curSeason = curData[0];
    } else {
        curSeason = {acceptance:false};
    }

    return (
        <div className="w-full">
            <SeasonBox data={data} sznData={curSeason} />
        </div>
    );
}