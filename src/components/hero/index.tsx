import { Genres } from "models/genres";
import { Hero } from "models/hero";

export interface HeroProps {
    hero: Hero;
}

export default function HeroSection({ hero }: HeroProps) {
    return (
        <div className="relative w-full h-full px-5 py-10">
            <div
                className="w-full h-[600px] bg-cover bg-no-repeat relative"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${hero?.backdrop_path})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="w-full h-[400px] -mt-[200px] mx-auto max-w-[800px] relative z-10 pb-10 ">
                <img
                    className="object-cover w-full h-full rounded-xl"
                    src={`https://image.tmdb.org/t/p/original/${hero?.backdrop_path}`}
                    alt=""
                />
            </div>
            <h1 className="mb-10 text-2xl font-bold text-center text-white">
                {hero?.title}
            </h1>

            <div className="flex items-center justify-center mb-10 gap-x-5">
                {hero?.genres.map((gen: Genres) => (
                    <span
                        className="px-4 py-2 text-center border rounded-lg text-primary border-primary"
                        key={gen.id}
                    >
                        {gen.name}
                    </span>
                ))}
            </div>

            <p className="text-white leading-6 max-w-[600px] mx-auto text-center mb-10 ">
                {hero?.overview}
            </p>
        </div>
    );
}
