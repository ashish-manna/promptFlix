const VideoTitle = ({ title, overview }) => {
    console.log(title)
    console.log(overview)

    return (
        <div className="pt-40 px-4 absolute text-white w-screen aspect-video z-99">
            <div className="text-5xl font-bold">{title}</div>
            <div className="w-2/4 pt-4">{overview}</div>
            <div className="flex pt-4 gap-1">
                <button className=" bg-white text-black py-2 px-8 font-bold text-lg rounded-lg hover:bg-opacity-80">
                    Play Now
                </button>
                <button className=" mx-2  bg-gray-500 text-white py-2 px-8 font-bold text-lg bg-opacity-50 rounded-lg">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle