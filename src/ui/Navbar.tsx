import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Spinner from "./Spinner.tsx";

function Navbar() {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) <Spinner />;

  return (
    <>
      <div className="flex bg-[#F7EFE5] dark:bg-black justify-between px-10 py-4 dark:border-gray-700 border-b border-amber-700 border-dotted shadow-indigo-500/40">
        <div className="flex items-center animate-pulse cursor-pointer ">
          <img src={"/logo.jpg"} className="h-8 rounded-lg mr-2" alt={"logo"} />
          <a className="text-xl bg-clip-text text-transparent bg-gradient-to-r dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 from-amber-600 to-amber-500 font-bold font-poppins transition-all duration-300 ease-in-out">
            Works
          </a>
        </div>
        <div className="flex items-center">
          <Link
            to={"/"}
            className="text-black dark:text-gray-200 dark:hover:text-pink-500 font-semibold cursor-pointer font-poppins hover:text-amber-900 transition-all duration-300 ease-in-out m-3"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="text-black dark:text-gray-200 dark:hover:text-pink-500 font-semibold cursor-pointer font-poppins hover:text-amber-900 transition-all duration-300 ease-in-out m-3"
          >
            About
          </Link>
          <Link
            to={"/"}
            className="text-black dark:text-gray-200 dark:hover:text-pink-500 font-semibold cursor-pointer font-poppins hover:text-amber-900 transition-all duration-300 ease-in-out m-3"
          >
            Testimonials
          </Link>
          <Link
            to={"/"}
            className="text-black dark:text-gray-200 dark:hover:text-pink-500 font-semibold cursor-pointer font-poppins hover:text-amber-900 transition-all duration-300 ease-in-out m-3"
          >
            Contact
          </Link>
        </div>

        {!isSignedIn && (
          <div className="flex items-center">
            <Link
              to={"/sign-in"}
              className="font-semibold dark:text-gray-100 dark:hover:text-pink-500 cursor-pointer font-poppins hover:text-amber-900 rounded-md px-4 py-2 transition-all duration-300 ease-in-out m-3"
            >
              Login
            </Link>
            <Link
              to={"/sign-up"}
              className="text-gray-700 dark:bg-pink-500 dark:text-gray-100 dark:hover:bg-pink-700 font-semibold border-amber-700 border rounded-md px-4 py-2 cursor-pointer font-poppins hover:text-gray-800 bg-amber-500 hover:bg-amber-600 transition-all duration-300 ease-in-out m-3"
            >
              Register
            </Link>
          </div>
        )}
        {isSignedIn}
      </div>
    </>
  );
}

export default Navbar;
