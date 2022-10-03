import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import { HomePage, MoviePage } from "./pages";

function App() {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<HomePage />}  ></Route>
                <Route path="/movie" element={<MoviePage />}></Route>
            </Routes>
        </>
    );
}

export default App;
