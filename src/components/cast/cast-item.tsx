import { Cast } from "models/cast";

export interface CastItemProps {
    castItem: Cast;
}

export function CastItem({ castItem }: CastItemProps) {
    return (
        <div className="h-[300px] mb-10">
            <img
                className="object-cover w-full h-full mb-2"
                src={`https://image.tmdb.org/t/p/original/${castItem.profile_path}`}
                alt=""
            />
            <h3 className="text-xl font-bold text-white">{castItem.name}</h3>
        </div>
    );
}
