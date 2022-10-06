import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

export const UseMovieList = (type: string) => {
    const [filter, setFilter] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [url, setUrl] = useState(
        `movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const { data, error } = useSWR(url);

    useEffect(() => {
        if (data?.data && data.data.results) setMovieList(data.data.results);
    }, [data, url]);

    useEffect(() => {
        if (filter) {
            setUrl(
                `/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&query=${filter}`
            );
            return;
        }
        setUrl(`movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`);
    }, [filter, type]);

    return {
        movieList,
        error,
        setFilter,
        data
    };
};
