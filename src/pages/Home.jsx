import { useEffect } from "react";
import Header from "../components/Header";
import MainTrailerSection from "../components/MainTrailerSection";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/slice/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, [])
  return <div className="w-screen overflow-x-hidden" >
    <Header />
    <MainTrailerSection />
  </div>;
};

export default Home;
