import { UseMovieList } from "../fetch";
import { Movie } from "@/models";
import { MovieCard } from "../components/movies";
import { Main } from "../layouts";
import {Search} from "../components/search";

export function MoviePage() {
    const { movieList } = UseMovieList("popular");
    return (
        <Main>
            <div className="page-container">
                <Search />
                <div className="grid grid-cols-4 gap-10 ">
                    {movieList.length > 0 &&
                        movieList.map((movie: Movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>
        </Main>
    );
}
