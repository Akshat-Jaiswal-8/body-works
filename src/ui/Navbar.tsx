function Navbar()   {
    return (
        <>
        <div className="navbar flex justify-between px-10 py-4 border-b border-gray-700 border-opacity-100 border-dotted">
            <div className="flex items-center cursor-pointer ">
                <img src={"./logo.jpg"} className="h-8 rounded-lg mr-2" alt={"logo"}/>
                <a className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold transition-all duration-300 ease-in-out">BodyWorks</a>
            </div>
            <div className="flex items-center">
                <div className="text-gray-300 font-semibold cursor-pointer font-poppins hover:text-white transition-all duration-300 ease-in-out m-3">Home</div>
                <div className="text-gray-300 font-semibold cursor-pointer font-poppins hover:text-white transition-all duration-300 ease-in-out m-3">About</div>
            </div>
        </div>
        </>
    );
}

export default Navbar;
