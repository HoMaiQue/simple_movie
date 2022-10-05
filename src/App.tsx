import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import { HomePage, MoviePage } from "./pages";
import { MovieDetailPage } from "./pages/movie-detail-page";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/movie" element={<MoviePage />}></Route>
                <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
