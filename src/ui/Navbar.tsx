import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle.tsx';

function Navbar() {
  return (
    <section>
      <div className='flex h-[80px] top-0 z-50 fixed w-full mx-auto  bg-transparent justify-between px-10 py-4 '>
        <Link to={'/'} className='flex items-center animate-pulse px-4 cursor-pointer '>
          <img loading={'eager'} src={'/logo.webp'} className='h-8 rounded-lg mr-2' alt={'logo'} />
          <a className='text-xl bg-clip-text text-transparent bg-gradient-to-r dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-500 from-amber-600 to-amber-500 font-bold font-poppins transition-all duration-300 ease-in-out'>
            Works
          </a>
        </Link>
        <div className='items-center flex'>
          <ModeToggle />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
