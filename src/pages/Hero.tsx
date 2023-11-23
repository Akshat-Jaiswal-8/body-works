import { Link } from 'react-router-dom';
import Footer from '../ui/Footer.tsx';
import Navbar from '../ui/Navbar.tsx';

function Hero() {
  return (
    <>
      <div className="dark:bg-[url('/hero_dark.webp')] bg-[url('/hero_light.webp')] bg-cover">
        <Navbar />
        <div className='pt-16 pr-0 pl-0 pb-8 '>
          <div className='max-w-7xl my-[3rem] mx-auto  py-0 text-center px-3.5 items-center gap-24'>
            <div className='px-4 w-[60%] mx-auto'>
              <h1 className='text-6xl text-amber-900 bg-transparent dark:text-pink-500 font-extrabold mb-6 '>
                The only Website you ever need to train your muscles !
              </h1>
              <div className='text-center mx-auto px-4'>
                <p className='text-amber-700 px-8 dark:text-gray-100 dark:hover:text-pink-500 hover:text-amber-900 transition-all duration-300 font-poppins text-xl opacity-70 leading-10'>
                  Are you lagging to find the best exercises for your muscles ?
                </p>
                <p className='text-amber-700 px-8 dark:text-gray-100 dark:hover:text-pink-500 hover:text-amber-900 transition-all font-poppins text-xl opacity-70 leading-10 decoration-inherit'>
                  Now your wait is over with BodyWorks!{' '}
                </p>
                <p className='text-amber-700 z-10 dark:text-gray-100 dark:hover:text-pink-500 hover:text-amber-900 transition-all font-poppins text-xl opacity-70 leading-10 mb-16'>
                  Build your muscles with your favourite exercises!
                </p>
              </div>
              <Link
                to={'/exercises'}
                className='relative p-0.5 inline-flex items-center group justify-center font-semibold overflow-hidden rounded-md '
              >
                <span className='transition-all duration-300'></span>
                <span className='relative px-6 py-3 bg-gradient-to-br bg-amber-500 dark:bg-pink-500 group-hover:from-amber-700 group-hover:to-amber-400 dark:group-hover:from-pink-600 dark:group-hover:to-violet-500 rounded-md '>
                  <span className='relative dark:text-gray-300 text-gray-600 transition-all duration-300'>
                    Explore Now
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Hero;
