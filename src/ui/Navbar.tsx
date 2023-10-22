import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between px-10 py-4 border-b border-gray-700">
        <div className="flex items-center animate-pulse cursor-pointer ">
          <img
            src={"./logo.jpg"}
            className="h-8 rounded-lg mr-2"
            alt={"logo"}
          />
          <a className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold font-poppins transition-all duration-300 ease-in-out">
            Works
          </a>
        </div>
        <div className="flex items-center">
          <div className="text-gray-300 font-semibold cursor-pointer font-poppins hover:text-pink-500 transition-all duration-300 ease-in-out m-3">
            Home
          </div>
          <div className="text-gray-300 font-semibold cursor-pointer font-poppins hover:text-pink-500 transition-all duration-300 ease-in-out m-3">
            About
          </div>
          <div className="text-gray-300 font-semibold cursor-pointer font-poppins hover:text-pink-500 transition-all duration-300 ease-in-out m-3">
            Testimonials
          </div>
          <div className="text-gray-300 font-semibold cursor-pointer font-poppins hover:text-pink-500 transition-all duration-300 ease-in-out m-3">
            Contact
          </div>
        </div>
        <div className="flex items-center">
          <Link
            to={"/login"}
            className="text-pink-500 font-medium cursor-pointer font-poppins border border-pink-500 hover:text-white hover:bg-pink-500  rounded-md px-4 py-2 transition-all duration-300 ease-in-out m-3"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="text-violet-500 font-medium border-violet-500 border rounded-md px-4 py-2 cursor-pointer font-poppins hover:text-white hover:bg-violet-500 transition-all duration-300 ease-in-out m-3"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
