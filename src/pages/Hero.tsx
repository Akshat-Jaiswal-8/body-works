import Navbar from '../ui/Navbar.tsx';
import { Link } from 'react-router-dom';
import Footer from '../ui/Footer.tsx';

function Hero() {
  return (
    <>
      <Navbar />
      <div className='pt-16 pr-0 pl-0 pb-8'>
        <div className='max-w-7xl my-0 mx-auto py-0 px-3.5 grid grid-cols-2 items-center gap-24'>
          <div className='px-4'>
            <h1 className='text-[5.5rem] cursor-pointer font-rubik bg-clip-text text-transparent dark:from-pink-500 dark:to-violet-500 bg-gradient-to-r from-[#C63D2F] to-[#FF9B50] transition-all duration-700 font-extrabold mb-6 decoration-pink-500'>
              Body Works
            </h1>
            <p className='text-black dark:text-gray-200 dark:hover:text-pink-500 hover:text-amber-700 transition-all duration-300 font-poppins text-xl opacity-70 leading-10'>
              Are you lagging to find
              the best exercises for
              your muscles ?
            </p>
            <p className='text-black dark:text-gray-200 dark:hover:text-pink-500 hover:text-amber-700 transition-all font-poppins text-xl opacity-70 leading-10 decoration-inherit'>
              Now your wait is over with
              BodyWorks!{' '}
            </p>
            <p className='text-black dark:text-gray-200 dark:hover:text-pink-500 hover:text-amber-700 transition-all font-poppins text-xl opacity-70 leading-10 mb-16'>
              Build your muscles with
              your favourite exercises!
            </p>
            <Link
              to={'/exercises'}
              className='relative p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-md'
            >
              <span className='group'></span>
              <span className='relative px-6 py-3 bg-gradient-to-br bg-amber-500 dark:bg-pink-500 dark:group-hover:from-pink-600 dark:group-hover:to-violet-500 rounded-md transition-all duration-300'>
                <span className='relative dark:text-gray-200 text-gray-600'>
                  Explore Now
                </span>
              </span>
            </Link>
          </div>
          <div>
            <img
              src='/gym_04.jpg'
              alt={
                'strong-man-fence-with-dumbbell'
              }
              className={
                'h-full w-full z-10 rounded-xl '
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hero;
