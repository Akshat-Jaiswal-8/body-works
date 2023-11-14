import { Link } from 'react-router-dom';

type props = {
  title: string;
};
function NavElements(props: props) {
  const title: string = props.title;
  return (
    <>
      <Link
        to={'/'}
        className='text-black dark:text-gray-200 dark:hover:text-pink-500 hover:text-light-primary-hover-color font-semibold cursor-pointer font-poppins hover:text-primary-hover-color transition-all duration-300 ease-in-out m-3'
      >
        {title}
      </Link>
    </>
  );
}

export default NavElements;
