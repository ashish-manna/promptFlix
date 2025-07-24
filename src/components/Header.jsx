import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { aiPage } from "../redux/slice/aiSearchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const isAipage = useSelector((store) => store.ai.isAiPage);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            console.log("user sign out successfully!")
            navigate('/')
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleAiPageClick = () => {
        dispatch(aiPage());
    }

    return (
        <div className="">
            <div className="w-screen bg-gradient-to-b from-black  absolute px-4 py-6 z-9999">
                <div className="w-full flex justify-between items-center">
                    <div className="text-xl md:text-4xl font-bold text-red-700">PROMPTFLIX</div>
                    {user &&
                        <div className="flex items-center gap-1 relative z-9999">
                            <div onClick={handleAiPageClick} className="md:text-sm text-xs font-semibold text-white bg-purple-700 md:px-2 px-1 md:py-0.5 mr-2 cursor-pointer rounded-sm">{!isAipage ? <div>Ask  <span className="md:text-lg text-sm font-bold">AI</span></div> : <> <div className="font-bold text-sm md:text-lg text-white">Home</div></>}</div>
                            <div className="md:w-8 md:h-8 w-4 h-4">
                                <img className="w-full h-full object-cover" src="/profileIcon.jpg" alt="profile-icon" />
                            </div>
                            <div onClick={handleSignOut} className="text-white font-semibold md:text-sm text-xs cursor-pointer">SignOut</div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Header