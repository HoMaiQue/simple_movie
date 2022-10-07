import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import { ErrorBoundary } from "./components/common";

function App() {
    const HomePage = lazy(() => import("./pages/home-page"));
    const MoviePage = lazy(() => import("./pages/movie-page"));
    const MovieDetailPage = lazy(() => import("./pages/movie-detail-page"));
    return (
        <ErrorBoundary>
            <Suspense>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/movie" element={<MoviePage />}></Route>
                    <Route
                        path="/movie/:id"
                        element={<MovieDetailPage />}
                    ></Route>
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
