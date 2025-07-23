import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";

const Recommendations = () => {
    const { movieList, moviesData } = useSelector((store) => store.ai)
    console.log(movieList, moviesData);
    if (!movieList) return null;
    return (
        <div className="bg-black">
            {movieList.map((movie, index) => <div key={movie}>
                <MoviesList title={movie} data={moviesData[index]} />
            </div>)}
        </div>
    )
}

export default Recommendations