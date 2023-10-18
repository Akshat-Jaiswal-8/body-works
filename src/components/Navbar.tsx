import {Link } from "react-router-dom"
function Navbar()   {
    return (
        <>
        <div className="navbar flex justify-between px-10 py-4 border-b border-gray-700 border-opacity-100 border-dotted">
            <div className="flex items-center cursor-pointer ">
                <img src={"/logo.svg"} className="h-10 rounded-lg" alt={"logo"}/>
                <a className="text-xl text-gray-600 animate-bounce hover:text-white font-bold">BodyWorks</a>
            </div>
            <div className="flex items-center">
                <Link className="text-white font-poppins m-3" to={"/home"} >Home</Link>
                <Link className="text-white font-poppins m-3" to={"/about"}>About</Link>
            </div>
        </div>
        </>
    );
}

export default Navbar;
