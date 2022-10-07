import { Banner } from "components/banner";
import { MovieTopic } from "components/movies";
import { Main } from "layouts";


export default function HomePage() {
    return (
        <Main>
            <Banner type="upcoming" />
            <MovieTopic type="now_playing" title="Now Playing" />
            <MovieTopic type="top_rated" title="Top_Rated" />
            <MovieTopic type="upcoming" title="Trending" />
        </Main>
    );
}
