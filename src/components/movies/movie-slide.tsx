import { Movie } from "@/models";
import * as React from "react";
import { MovieList } from "./movie-list";

export interface MovieSlideProps {
    title: string;
}

export function MovieSlide({ title }: MovieSlideProps) {
    return (
        <section className="pb-10 page-container">
            <h2 className="mb-10 text-2xl font-bold text-white">{title}</h2>

            <MovieList type="now_playing" />
        </section>
    );
}
