import MovieCard from "./MovieCard"

const MoviesList = ({ title, data }) => {
    return (
        <div>
            <div className="text-lg md:text-2xl font-bold text-white my-4 px-2" >
                {title}
            </div>
            <MovieCard data={data} />
        </div>
    )
}

export default MoviesList