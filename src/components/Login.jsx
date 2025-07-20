import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const validatorMessage = validate(email.current.value, password.current.value);
    setErrorMessage(validatorMessage);
    if (validatorMessage) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            dispatch(addUser({ displayName: user.displayName, uid: user.uid, email: user.email }));
            navigate('/home');
            // console.log("User created and display name set:", user.displayName, user.uid, user.email);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({ displayName: user.displayName, uid: user.uid, email: user.email }));
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setErrorMessage(errorMessage)
        });
    }
  }

  return (
    <div className="">
      <Header />
      <div className="w-full  relative">
        <img className="w-full  h-auto" src="src/assets/login-page-bg-banner.jpg" alt="bg-banner" />
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="w-4/12 flex flex-col gap-4 rounded-2xl bg-black opacity-90 px-4 py-6 absolute top-[20%] mx-auto left-0 right-0 z-88">
          <div className="text-4xl font-bold text-white mb-4"> {isSignIn ? "Sign In" : "Sign Up"}</div>
          {!isSignIn && <input className="w-full bg-gray-700 px-2 py-4 rounded-lg" ref={name} placeholder="Full Name" name="name" type="text" />}
          <input className="w-full bg-gray-700 px-2 py-4 rounded-lg" ref={email} placeholder="Email" name="email" type="email" />
          <input className="w-full bg-gray-700 px-2 py-4 rounded-lg" ref={password} placeholder="Password" name="password" type="password" />
          <p className="text-sm font-bold text-red-600">{errorMessage}</p>
          <button
            onClick={handleSubmit}
            className="w-full bg-red-700 px-2 py-4 rounded-lg text-white font-bold text-xl cursor-pointer">Submit</button>
          <div
            className="text-white font-semibold text-md cursor-pointer mt-2"
            onClick={() => {
              setIsSignIn(!isSignIn);
            }}>{isSignIn ? "New to Promptflix? Sign up now." : "Already registered? Sign in now"}
          </div>
        </form>
      </div>
    </div>
  )
};

export default Login;
