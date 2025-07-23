import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"


const SecondarySection = () => {
    const nowPlayingMoviesData = useSelector((store) => store.movies?.nowPlayingMovies);

    // popular movies fetching

    return (
        <div className="w-full bg-black pb-4" >
            {/* //Movies list according to title */}
            <div className="bg-transparent relative -mt-80 z-9999 px-2 flex flex-col gap-2">
                <MoviesList title={"Now Playing"} data={nowPlayingMoviesData} />
                <MoviesList title={"Popular"} data={nowPlayingMoviesData} />
                <MoviesList title={"Top Rated"} data={nowPlayingMoviesData} />
                <MoviesList title={"Upcoming"} data={nowPlayingMoviesData} />
            </div>
        </div>
    )
}

export default SecondarySection