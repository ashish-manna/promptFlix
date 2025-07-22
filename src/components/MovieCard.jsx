const MovieCard = ({ data }) => {
    if (!data) return <div>Loading....</div>
    return (
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-2">
            {data.map((movie) =>
                <div key={movie?.id} className="flex-shrink-0 w-40 h-50" >
                    <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} alt="movie-poster" />
                </div>)}
        </div>
    )
}

export default MovieCard