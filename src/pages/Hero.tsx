import { Link } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';

export default Hero;

function Hero() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');

  return (
    <>
      <div className=' xs:mt-32 md:mt-30 w-full relative md:flex items-center justify-center'>
        <div className='container mx-auto items-center md:grid grid-cols-col-lg gap-4 justify-between'>
          <div className=''>
            <h1 className='xs:text-5xl sm:text-6xl md:text-5xl lg:text-[4em] xl:text-[5rem] font-extrabold mb-8'>
              Push <span className={'text-amber-900 dark:text-pink-500'}> yourself harder</span> to become better
              <span>
                <img
                  src={'/img.png'}
                  className={
                    'xs:w-[12rem] xs:h-12 xs:mt-4 sm:ml-4 sm:w-[16rem] sm:h-14 md:w-[16rem] md:mt-2 lg:w-[20rem] xl:h-16 xl:ml-4 inline rounded-2xl object-cover '
                  }
                  alt={'man with dumbell'}
                />
              </span>
            </h1>
            <div className='xs:mb-12 md:mb-16 text-left text-amber-800 font-semibold dark:text-gray-100 text-xl opacity-70 leading-10'>
              <p>Are you lagging to find the best exercises for your muscles ?</p>
              <p>Now your wait is over with BodyWorks !</p>
              <p>Build your muscles with your favourite exercises!</p>
            </div>

            <Link to={'/exercises'} className=' relative p-0.5 group font-semibold transition-all duration-300 '>
              <span className='px-6 py-3 bg-gradient-to-br bg-amber-500 dark:bg-pink-500 group-hover:from-amber-700 group-hover:to-amber-400 dark:group-hover:from-pink-600 dark:group-hover:to-violet-500 rounded-xl transition-all duration-300'>
                <span className='relative dark:text-gray-300 text-gray-600 transition-all duration-300'>
                  Explore Now
                </span>
              </span>
            </Link>
          </div>
          {!isSmallDevice && (
            <div
              className={
                'md:h-[30rem] xl:h-[35rem] mx-auto shadow-2xl shadow-amber-600 dark:shadow-pink-600 rounded-2xl'
              }
            >
              <img
                src={'/hero.webp'}
                className={'md:h-[30rem] xl:h-[35rem] dark:grayscale rounded-2xl'}
                loading={'eager'}
                alt={'man with dumbell'}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
