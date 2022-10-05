import { Genres } from "@/models/genres";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Cast } from "../components/cast";
import { MovieSlide } from "../components/movies";
import { VideoList } from "../components/video-movie";
import { Main } from "../layouts";

export interface MovieDetailPageProps {}

export function MovieDetailPage(props: MovieDetailPageProps) {
    const { id } = useParams();
    const { data, error } = useSWR(
        `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return (
        <Main>
            <div className="w-full h-full  relative px-5 py-10">
                <div
                    className="w-full h-[600px] bg-cover bg-no-repeat relative"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.data.backdrop_path})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="w-full h-[400px] -mt-[200px] mx-auto max-w-[800px] relative z-10 pb-10 ">
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src={`https://image.tmdb.org/t/p/original/${data?.data.backdrop_path}`}
                        alt=""
                    />
                </div>
                <h1 className="text-white font-bold text-center text-2xl mb-10">
                    {data?.data.title}
                </h1>

                <div className="flex items-center gap-x-5  justify-center mb-10">
                    {data?.data.genres.map((gen: Genres) => (
                        <span
                            className="text-primary border border-primary rounded-lg py-2 px-4 text-center"
                            key={gen.id}
                        >
                            {gen.name}
                        </span>
                    ))}
                </div>

                <p className="text-white leading-6 max-w-[600px] mx-auto text-center mb-10 ">
                    {data?.data.overview}
                </p>
                <Cast />
                <VideoList />
                <MovieSlide title="Similar Movie" />
            </div>
        </Main>
    );
}
