import Footer from "./Footer.tsx";
import Navbar from "./Navbar.tsx";

function Hero() {
    return (
      <>
        <Navbar/>
        <div className="pt-16 pr-0 pl-0 pb-8">
            <div className="max-w-7xl my-0 mx-auto py-0 px-3.5 grid grid-cols-2 items-center gap-24">
                <div className="px-4">
                    <h1 className="text-[5.5rem] animate-bounce cursor-pointer font-rubik bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500 transition-all duration-700 font-extrabold mb-6">Body Works</h1>
                    <p className="text-white font-poppins text-xl opacity-70 leading-10 ">Are you lagging to find the best exercises for your muscles ?</p>
                    <p className="text-white font-poppins text-xl opacity-70 leading-10">Now your wait is over with BodyWorks! </p>
                    <p className="text-white font-poppins text-xl opacity-70 leading-10 mb-16">Build your muscles with your favourite exercises!</p>
                    <a href={"/main"} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-pink-600 to-violet-500 group-hover:from-pink-600 group-hover:to-violet-500 absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Explore Now</span>
                        </span>
                    </a>
                </div>
                <div>
                    <img src="/public/silhouette-basketball-player-holding-ball-black-background.jpg" alt={"strong-man-fence-with-dumbbell"} className={"h-full w-full bg-black z-10 rounded "}/>
                </div>
            </div>
        </div>
      <Footer/>
      </>



    );
}

export default Hero;
