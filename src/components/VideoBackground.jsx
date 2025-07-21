import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/slice/moviesSlice";
import { TMDB_API_OPTIONS } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies?.movieTrailer)
    // fetch trailer by movie id 
    const getMovieVideo = async () => {
        const movieVideo = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_OPTIONS);
        const json = await movieVideo.json();
        // console.log(json.results);
        const filterData = json.results.filter(v => v.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        getMovieVideo();
    }, [])
    return (
        <div className="relative w-screen aspect-video overflow-hidden">
            <iframe
                className="absolute top-0 left-0 w-full h-full scale-125"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=0&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                title="YouTube video player"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                frameBorder="0"
            ></iframe>
        </div>
    )
}

export default VideoBackground