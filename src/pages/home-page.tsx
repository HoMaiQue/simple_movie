import { Main } from "../layouts/index";
import { Banner } from "../components/banner";
import { MovieList } from "../components/movies";

export function HomePage() {
    return (
        <Main>
            <Banner type="upcoming" />
            <section className="pb-10 page-container">
                <h2 className="mb-10 text-2xl font-bold text-white">
                    Now Playing
                </h2>

                <MovieList type="now_playing" />
            </section>
            <section className="pb-10 page-container">
                <h2 className="mb-10 text-2xl font-bold text-white">
                    top_Rated
                </h2>

                <MovieList type="top_rated" />
            </section>
            <section className="pb-10 page-container">
                <h2 className="mb-10 text-2xl font-bold text-white">
                    Trending
                </h2>

                <MovieList type="popular" />
            </section>
        </Main>
    );
}
