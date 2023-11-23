import { CgGym } from 'react-icons/cg';
import { GiMuscleUp } from 'react-icons/gi';
import { IoBody } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Sidebar(): JSX.Element {
  const theme: string | null = localStorage?.getItem('theme');
  return (
    <aside className='px-8 py-6 bg-inherit dark:bg-black gap-3 col-span-1 flex flex-col border-border-light-primary-color border-dotted dark:border-gray-700 '>
      {theme === 'dark' ? (
        <img loading='lazy' src='/sidebar_dark.jpg' className='rounded-full' alt='logo' />
      ) : (
        <img loading={'lazy'} src='/sidebar_light.jpg' className='rounded-full' alt='logo' />
      )}
      <nav className='block'>
        <ul className='cursor-pointer flex flex-col gap-6 items-center'>
          <li className='w-full group'>
            <Link
              to={'/equipments'}
              className='w-full px-8 py-4 text-gray-900 dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-light-primary-hover-color  dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg'
            >
              <CgGym />
              <span className='dark:text-gray-300 font-poppins text-gray-900 group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300'>
                Equipments
              </span>
            </Link>
          </li>
          <li className='w-full group'>
            <Link
              to={'/target-muscle'}
              className='w-full px-8 py-4 text-gray-900  dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg'
            >
              <GiMuscleUp />
              <span className='dark:text-gray-300 font-poppins text-gray-900 group-hover:text-[#8f3e00] dark:group-hover:text-pink-500 transition-all duration-300 '>
                Target Muscle
              </span>
            </Link>
          </li>
          <li className='w-full group'>
            <Link
              to={'/body-parts'}
              className='w-full px-8 py-4 text-gray-900  dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg'
            >
              <IoBody />
              <span className='dark:text-gray-300 text-gray-900 font-poppins group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300'>
                Body Parts
              </span>
            </Link>
          </li>
          <li className='w-full group'>
            <Link
              to={'/routine-category'}
              className='w-full px-8 py-4 text-gray-900  dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg'
            >
              <IoBody />
              <span className='dark:text-gray-300 text-gray-900 font-poppins group-hover:text-light-primary-hover-color dark:group-hover:text-pink-500 transition-all duration-300'>
                Routine Category
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
