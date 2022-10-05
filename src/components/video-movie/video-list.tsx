import { Video } from "@/models/video";
import * as React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export interface MovieListProps {}

export function VideoList(props: MovieListProps) {
    const { id } = useParams();
    const { data, error } = useSWR(
        `movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
    return (
        <div className=" flex items-center justify-center aspect-video flex-col gap-10 mb-10">
            {data?.data?.results.slice(0, 2).map((video: Video) => (
                <div className=" gap-10 ">
                    <h3 className="text-white font-bold mb-5 bg-primary p-3 text-xl inline-block ">
                        {video.name}
                    </h3>
                    <iframe
                        allowFullScreen
                        width="885"
                        height="498"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="Ở Trong Thành Phố - B Ray x Masew (Ft. Hannah B )"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            ))}
        </div>
    );
}
