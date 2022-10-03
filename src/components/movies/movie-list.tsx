import { UseMovieList } from "../../fetch";
import { Movie } from "@/models";
import { Swiper, SwiperSlide } from "swiper/react";

import { MovieCard } from "./movie-card";
export interface MovieListProps {
    type: string;
}

export function MovieList({ type }: MovieListProps) {
    const { movieList } = UseMovieList(type);
    return (
        <div className="movie-list ">
            <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={40}>
                {movieList.length > 0 &&
                    movieList.map((movie: Movie) => (
                        <SwiperSlide key={movie.id}>
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
