import { MovieSlide } from "./movie-slide";

export interface MovieTopicProps {
    title: string;
    type: string;
}

export function MovieTopic({ title, type }: MovieTopicProps) {
    return (
        <section className="pb-10 page-container">
            <h2 className="mb-10 text-2xl font-bold text-white">{title}</h2>
            <MovieSlide type={type} />
        </section>
    );
}
