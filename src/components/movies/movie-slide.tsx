import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "models";
import { MovieCard } from "./movie-card";
import { MovieCartSkeleton } from "./movie-card-skeleton";
import { UseMovieList } from "fetch";
export interface MovieSlideProps {
    type: string;
}

export function MovieSlide({ type }: MovieSlideProps) {
    const { movieList, error, data } = UseMovieList(type);
    const loading = !data && !error;
    return (
        <div className="movie-list ">
            {!loading && (
                <Swiper
                    grabCursor={true}
                    slidesPerView={"auto"}
                    spaceBetween={40}
                >
                    {movieList.length > 0 &&
                        movieList.map((movie: Movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}

            {loading && (
                <Swiper
                    grabCursor={true}
                    slidesPerView={"auto"}
                    spaceBetween={40}
                >
                    {Array.from(Array(10).keys()).map((item) => (
                        <SwiperSlide key={item}>
                            <MovieCartSkeleton />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
