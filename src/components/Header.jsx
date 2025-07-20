import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            console.log("user sign out successfully!")
            navigate('/')
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="">
            <div className="w-full text-red-700 bg-gradient-to-b from-black text-4xl font-bold absolute px-4 py-6 cursor-pointer z-99">
                <div className="w-full flex justify-between items-center">
                    <div>PROMPTFLIX</div>
                    {user &&
                        <div className="">
                            <div onClick={handleSignOut} className="text-white font-bold text-2xl">SignOut</div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Header