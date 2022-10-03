import { Movie } from "@/models";

export interface BannerItemProps {
    movie: Movie;
}

export function BannerItem({ movie }: BannerItemProps) {
    return (
        <>
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
            <div className="w-full h-full bg-white rounded-lg">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="banner"
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>

            <div className="absolute text-white left-5 bottom-5">
                <h2 className="mb-5 text-3xl font-bold">{movie.title}</h2>
                <div className="flex items-center mb-8 gap-x-5">
                    <span className="px-4 py-2 border border-solid rounded-md">
                        Actions
                    </span>
                    <span className="px-4 py-2 border border-solid rounded-md">
                        Avengers
                    </span>
                    <span className="px-4 py-2 border border-solid rounded-md">
                        Drama
                    </span>
                </div>
                <button className="px-6 py-3 text-white rounded-lg bg-primary">
                    Watch now
                </button>
            </div>
        </>
    );
}
