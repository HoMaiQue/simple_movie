import { Cast } from "models/cast";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { CastItem } from "./cast-item";

export interface CastListProps {}

export function CastList(props: CastListProps) {
    const { id } = useParams();
    const { data, error } = useSWR(
        `movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    );

    return (
        <div className="grid grid-cols-4 gap-x-5 page-container">
            {data?.data?.cast.slice(0, 4).map((castItem: Cast) => (
                <CastItem castItem={castItem} key={castItem.id} />
            ))}
        </div>
    );
}
