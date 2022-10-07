import { Movie } from "models";
import * as React from "react";
import { MovieCard } from "./movie-card";
import { MovieCartSkeleton } from "./movie-card-skeleton";

export interface MovieListProps {
    movieList: Movie[];
    loading: boolean;
}

export function MovieList({ movieList, loading }: MovieListProps) {
    return (
        <div className="grid grid-cols-4 gap-10 ">
            {!loading &&
                movieList.length > 0 &&
                movieList.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}

            {loading &&
                Array.from(Array(20).keys()).map((item: number) => (
                    <MovieCartSkeleton key={item} />
                ))}
        </div>
    );
}
