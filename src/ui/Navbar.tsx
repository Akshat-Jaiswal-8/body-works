import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle.tsx';

function Navbar() {
  return (
    <section>
      <div className='flex justify-between h-[80px] bg-transparent backdrop-blur fixed w-full mx-auto top-0 z-50 border-b border-b-amber-500 dark:border-b-gray-800 border-dotted px-10 py-4'>
        <Link to={'/'} className='flex items-center animate-pulse px-4 cursor-pointer '>
          <img loading={'eager'} src={'/logo.webp'} className='h-8 rounded-lg mr-2' alt={'logo'} />
          <p className='text-xl bg-clip-text text-transparent bg-gradient-to-r dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 from-amber-600 to-amber-500 font-bold font-poppins transition-all duration-300 ease-in-out'>
            Works
          </p>
        </Link>
        <div className='items-center flex'>
          <ModeToggle />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
