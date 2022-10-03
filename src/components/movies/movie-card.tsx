import { Movie } from "@/models";
import { FaStar } from "react-icons/fa";

export interface MovieCardProps {
    movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
    return (
        <div className="flex flex-col h-full p-3 text-white rounded-lg select-none bg-slate-800">
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="card"
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col flex-1">
                <h3 className="mb-3 text-xl font-bold">{movie.title}</h3>
                <div className="flex items-center justify-between mb-5 text-sm ">
                    <span className="opacity-50">
                        {new Date(movie.release_date).getFullYear()}
                    </span>
                    <div className="flex items-center gap-x-2">
                        <span className="opacity-50">{movie.vote_average}</span>
                        <FaStar className="text-yellow-300 " />
                    </div>
                </div>
                <button className="w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary">
                    {" "}
                    Watch now
                </button>
            </div>
        </div>
    );
}
