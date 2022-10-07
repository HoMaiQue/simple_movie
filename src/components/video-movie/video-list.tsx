import { Video } from "models/video";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { VideoItem } from "./video-item";

export interface MovieListProps {}

export function VideoList(props: MovieListProps) {
    const { id } = useParams();
    const { data, error } = useSWR(
        `movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return (
        <div className="flex flex-col items-center justify-center gap-10 mb-10 aspect-video">
            {data?.data?.results.slice(0, 2).map((video: Video) => (
                <VideoItem video={video} />
            ))}
        </div>
    );
}
