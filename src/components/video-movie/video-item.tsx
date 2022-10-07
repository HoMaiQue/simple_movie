import { Video } from "models/video";
import * as React from "react";

export interface VideoItemProps {
    video: Video;
}

export function VideoItem({ video }: VideoItemProps) {
    return (
        <div className="gap-10 ">
            <h3 className="inline-block p-3 mb-5 text-xl font-bold text-white bg-primary ">
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
    );
}
