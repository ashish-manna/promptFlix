import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainTrailerSection = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (movies === null) return;
    const data = movies[0];
    const { title, overview, id } = data;

    return (
        <div className="w-screen overflow-x-hidden" >
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainTrailerSection