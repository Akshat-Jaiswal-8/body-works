import { Link } from 'react-router-dom';
import Navbar from '@/ui/Navbar.tsx';

export default Hero;

function Hero() {
  return (
    <div className='dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]'>
      <Navbar />
      <div className='z-20 h-[100vh] w-full relative flex items-center justify-center'>
        <div className='absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]' />
        <div className='container mx-auto items-center grid grid-cols-col-lg'>
          <div className='ml-16'>
            <h1 className='text-7xl bg-transparent font-extrabold mb-6'>
              Push <span className={'text-amber-900 dark:text-pink-500'}> yourself harder</span> to become better
              <span>
                <img
                  src={'/img.png'}
                  className={'w-60 h-14 ml-8 inline rounded-2xl object-cover '}
                  alt={'man with dumbell'}
                />
              </span>
            </h1>
            <p className='text-amber-800 font-semibold dark:text-gray-100 dark:hover:text-pink-500 hover:text-amber-900 transition-all duration-300 font-poppins text-xl opacity-70 leading-10'>
              Are you lagging to find the best exercises for your muscles ?
            </p>
            <p className='text-amber-800 font-semibold dark:text-gray-100 dark:hover:text-pink-500 hover:text-amber-900 transition-all font-poppins text-xl opacity-70 leading-10 decoration-inherit'>
              Now your wait is over with BodyWorks!
            </p>
            <p className='text-amber-800 font-semibold dark:text-gray-100 dark:hover:text-pink-500 hover:text-amber-900 transition-all font-poppins text-xl opacity-70 leading-10 mb-10'>
              Build your muscles with your favourite exercises!
            </p>
            <Link
              to={'/exercises'}
              className='relative p-0.5 inline-flex items-center group justify-center font-semibold overflow-hidden transition-all duration-300 '
            >
              <span className='relative px-6 py-3 bg-gradient-to-br bg-amber-500 dark:bg-pink-500 group-hover:from-amber-700 group-hover:to-amber-400 dark:group-hover:from-pink-600 dark:group-hover:to-violet-500 rounded-xl transition-all duration-300'>
                <span className='relative dark:text-gray-300 text-gray-600 transition-all duration-300'>
                  Explore Now
                </span>
              </span>
            </Link>
          </div>
          <div className={'-z-50 mx-auto  rounded-2xl'}>
            <img
              src={'/hero.webp'}
              className={
                'h-[40rem] border-4 border-amber-900 dark:border-pink-500 rounded-3xl shadow-2xl shadow-amber-900 dark:shadow-pink-600'
              }
              alt={'man with dumbell'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
