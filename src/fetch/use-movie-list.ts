import { useEffect } from "react";
import { useState } from "react";
import useSWR from "swr";

export const UseMovieList = (type: string) => {
    const [movieList, setMovieList] = useState([]);
    const { data, error } = useSWR(
        `movie/${type}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    useEffect(() => {
        if (data?.data && data.data.results) setMovieList(data.data.results);
    }, [data]);

    return {
        movieList,
    };
};
