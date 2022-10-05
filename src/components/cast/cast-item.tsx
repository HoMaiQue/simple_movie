import { Cast } from "@/models/cast";
import * as React from "react";

export interface CastItemProps {
    castItem: Cast;
}

export function CastItem({ castItem }: CastItemProps) {
    return (
        <div className="h-[300px] mb-10">
            <img
                className="w-full h-full object-cover mb-2"
                src={`https://image.tmdb.org/t/p/original/${castItem.profile_path}`}
                alt=""
            />
            <h3 className="text-white font-bold text-xl">{castItem.name}</h3>
        </div>
    );
}
