const VideoTitle = ({ title, overview }) => {
    console.log(title)
    console.log(overview)

    return (
        <div className="pt-25 md:pt-40  px-4 absolute text-white w-screen aspect-video z-99">
            <div className="text-xl md:text-5xl font-bold">{title}</div>
            <div className="w-full line-clamp-3 md:line-clamp-none md:w-2/4 md:pt-4 text-sm md:text-lg">{overview}</div>
            <div className="flex pt-4 gap-1">
                <button className=" bg-white text-black md:py-2 md:px-8 px-1 font-bold text-sm md:text-lg rounded-lg hover:bg-opacity-80">
                    Play Now
                </button>
                <button className=" mx-2  bg-gray-500 text-white px-1 md:py-2 md:px-8 font-bold text-lg bg-opacity-50 rounded-lg">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle