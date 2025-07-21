const VideoTitle = ({ title, overview }) => {
    console.log(title)
    console.log(overview)

    return (
        <div className="pt-80 px-4 absolute text-white w-screen aspect-video z-99">
            <div className="text-5xl font-bold">{title}</div>
            <div className="w-2/4 pt-4">{overview}</div>
            <div className="flex pt-2 gap-1">
                <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
                    Play Now
                </button>
                <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle