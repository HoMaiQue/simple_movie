import { Cast } from "components/cast";
import HeroSection from "components/hero";
import { MovieTopic } from "components/movies";
import { VideoList } from "components/video-movie";
import { Main } from "layouts";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export interface MovieDetailPageProps {}

export default function MovieDetailPage(props: MovieDetailPageProps) {
    const { id } = useParams();
    const { data, error } = useSWR(
        `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return (
        <Main>
            <HeroSection hero={data?.data} />
            <Cast />
            <VideoList />
            <MovieTopic type="popular" title="Similar Movie" />
        </Main>
    );
}
