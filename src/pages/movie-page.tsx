import { UseMovieList } from "../fetch";
import { Movie } from "@/models";
import { MovieCard } from "../components/movies";
import { Main } from "../layouts";
import { Search } from "../components/search";
import { useDebounce } from "../hooks";
import { useEffect, useState } from "react";

export function MoviePage() {
    const [valueSearch, setValueSearch] = useState("");
    const filterDebounce = useDebounce(valueSearch, 500);
    const { movieList, setFilter, error, data } = UseMovieList("popular");
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    };
    const loading = !data  && !error;
    useEffect(() => {
        setFilter(filterDebounce);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterDebounce]);

    return (
        <Main>
            <div className="page-container">
                <Search handleChange={handleChangeInput} />
                {loading && (
                    <div className="h-10 w-10 rounded-full border-4 animate-spin border-t-transparent border-t-4 border-primary mx-auto "></div>
                )}

                <div className="grid grid-cols-4 gap-10 ">
                    {!loading &&
                        movieList.length > 0 &&
                        movieList.map((movie: Movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>
        </Main>
    );
}
