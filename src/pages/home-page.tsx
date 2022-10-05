import { Main } from "../layouts/index";
import { Banner } from "../components/banner";
import { MovieList } from "../components/movies";
import { MovieSlide } from "../components/movies";

export function HomePage() {
    return (
        <Main>
            <Banner type="upcoming" />
            <MovieSlide title=" Now Playing" />
            <MovieSlide title="  top_Rated" />
            <MovieSlide title="  Trending" />
        </Main>
    );
}
