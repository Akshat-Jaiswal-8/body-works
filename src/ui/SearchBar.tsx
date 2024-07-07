import { BiSearch } from 'react-icons/bi';
import { JSX, useState } from 'react';

function SearchBar(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <div className={'xs:mx-8 sm:mx-8'}>
        <form className='px-4 xs:text-[1rem] md:text-xl rounded-xl border border-border-light-primary-color dark:border-gray-700 text-center flex items-center justify-between'>
          <input
            placeholder='Search by name'
            className='text-amber-700  bg-transparent dark:text-pink-500 font-poppins focus:outline-none overflow-x-scroll rounded-xl py-3 w-3/4'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className='text-amber-900 dark:text-pink-500 xs:text-[1rem] md:text-xl cursor-pointer'>
            <BiSearch />
          </span>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
