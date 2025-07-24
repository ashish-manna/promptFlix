import { useRef } from "react"
import { cohere, TMDB_API_OPTIONS } from "../utils/constant";
import { extractMovieNames } from "../utils/extractNames";
import { useDispatch } from "react-redux";
import { addAiMovies } from "../redux/slice/aiSearchSlice";
import Recommendations from "./Recommendations";

const AiSearch = () => {
    const searchText = useRef();
    const dispatch = useDispatch();

    const searchMovies = async (movie) => {
        // &region=India
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTIONS);
        const json = await data.json();
        console.log(json.results)
        return json.results
    }

    const getApiRecomendations = async () => {
        const aiQuery = `Act as a movie recommendation system and suggest some movies for the query ${searchText.current.value} only give me names of 5 movies , comma seperated like the example result given ahead. Example Result : Sholay , Don , Gomaal , Andaz Apna Apna , Don`
        const chat = await cohere.chat({
            model: "command",
            message: aiQuery,
        });
        console.log(chat.text)
        const lines = chat.text.split('\n').map(line => line.trim()).filter(Boolean);
        const movieList = extractMovieNames(lines);
        console.log(movieList)
        const cleanedMovieList = movieList.map(name => name.replace(/^\d+\.\s*/, '').trim());
        console.log(cleanedMovieList);
        const promiseArray = cleanedMovieList.map((movie) => searchMovies(movie))
        const moviesData = await Promise.all(promiseArray)
        dispatch(addAiMovies({ moviesData: moviesData, movieList: cleanedMovieList }))
    }

    return (
        <div className="w-full h-screen bg-[url('/login-page-bg-banner.jpg')] bg-center bg-fixed">
            <div className="px-4 md:px-0 flex pt-[40%] md:pt-[10%] w-full md:w-[50%] mx-auto">
                <input name="searchText" ref={searchText} className="bg-white p-4 w-full" placeholder="Get AI Recomendation" type="text" />
                <button className="bg-black text-white p-4 font-bold cursor-pointer" onClick={getApiRecomendations}>Search</button>
            </div>
            <Recommendations />
        </div>
    )
}

export default AiSearch