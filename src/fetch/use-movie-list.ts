import { useEffect, useRef } from "react";
import { useState } from "react";
import useSWR from "swr";

export const UseMovieList = (type: string) => {
    const [filter, setFilter] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [url, setUrl] = useState(
        `movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    const nodeRef = useRef(false);
    const { data, error } = useSWR(url);

    useEffect(() => {
        if (data?.data && data.data.results) setMovieList(data.data.results);
    }, [data, url]);

    useEffect(() => {
        if (!nodeRef.current) {
            nodeRef.current = true;
            return;
        }
        if (filter) {
            setUrl(
                `/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&query=${filter}&page=${page}`
            );
            return;
        }
        setUrl(
            `movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
    }, [filter, type, page]);

    return {
        movieList,
        error,
        setFilter,
        data,
        setPage,
    };
};
