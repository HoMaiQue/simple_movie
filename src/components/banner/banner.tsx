import { UseMovieList } from "../../fetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannerItem } from "./banner-item";
import { Movie } from "models";

export interface BannerProps {
    type: string;
}

export function Banner({ type }: BannerProps) {
    const { movieList } = UseMovieList(type);
    return (
        <section className="banner  h-[400px] page-container relative mb-10">
            <Swiper grabCursor={true} slidesPerView={"auto"}>
                {movieList.length > 0 &&
                    movieList.map((movie: Movie) => (
                        <SwiperSlide key={movie.id}>
                            <BannerItem  movie={movie} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}
