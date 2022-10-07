import { Genres } from "./genres";


export interface Hero {
    backdrop_path: string;
    title: string;
    genres: Genres[];
    overview: string
}
