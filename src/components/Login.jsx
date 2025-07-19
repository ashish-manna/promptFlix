import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
          {!isSignIn && <input className="w-full bg-gray-700 px-2 py-4 rounded-lg" placeholder="Full Name" name="name" type="text" />}
          <input className="w-full bg-gray-700 px-2 py-4 rounded-lg" placeholder="Email" name="email" type="email" />
          <input className="w-full bg-gray-700 px-2 py-4 rounded-lg" placeholder="Password" name="password" type="password" />
          <button className="w-full bg-red-700 px-2 py-4 rounded-lg text-white font-bold text-xl cursor-pointer">Submit</button>
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
