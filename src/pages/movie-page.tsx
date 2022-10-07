import Loading from "components/loading";
import { MovieList } from "components/movies";
import Pagination from "components/pagination";
import { Search } from "components/search";
import { ITEM_PER_PAGE } from "constant";
import { UseMovieList } from "fetch";
import { useDebounce } from "hooks";
import { Main } from "layouts";
import { useEffect, useState } from "react";

export default function MoviePage() {
    const [valueSearch, setValueSearch] = useState("");

    const filterDebounce = useDebounce(valueSearch, 500);

    const [totalPages, setTotalPages] = useState(0);

    const { movieList, setFilter, error, data, setPage } =
        UseMovieList("popular");

    const loading = !data && !error;

    useEffect(() => {
        setFilter(filterDebounce);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterDebounce]);

    useEffect(() => {
        if (!data) return;
        const newTotalPages = Math.ceil(
            data.data.total_results / ITEM_PER_PAGE
        );
        setTotalPages(newTotalPages);
    }, [data]);

    const handleChangePage = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1);
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    };
    return (
        <Main>
            <div className="page-container">
                <Search handleChange={handleChangeInput} />
                {<MovieList movieList={movieList} loading={loading} />}
                <Pagination
                    handleChangePage={handleChangePage}
                    totalPages={totalPages}
                />
            </div>
        </Main>
    );
}
