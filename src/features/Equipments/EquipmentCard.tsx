import { BsArrowRight } from 'react-icons/bs';

interface IProps {
  gif: string;
  title: string;
  blog: string;
  id: string;
}

const EquipmentCard = ({ gif, title, blog, id }: IProps) => {
  const match: RegExpMatchArray | null = blog.match('Description');
  const index: number | undefined = match?.index;

  return (
    <>
      <div className='hover:scale-110 transition-all duration-200 bg-bg-card-light-primary-color max-w-sm mx-12 overflow-y-scroll scrollbar-hide h-80 dark:bg-gray-900 mt-10 border dark:border-gray-800 border-border-light-primary-color rounded-xl overflow-hidden'>
        <div className='flex flex-col gap-3'>
          <a href={`/exercises/${id}`}>
            <img src={gif} className='w-full h-48' alt='exercise image' />
          </a>
          <div className='p-6 text-left'>
            <h2 className='dark:text-white text-gray-800 text-left font-semibold text-lg mb-4'>{title}</h2>
            <p className='text-gray-700 dark:text-white h-fit mb-6'>{index && blog.slice(index + 11, 150) + '...'}</p>
            <a
              href={`/exercises/${id}`}
              className='flex dark:text-white dark:hover:text-pink-500 hover:text-primary-hover-color text-gray-800 transition-all duration-300 text-center items-center'
            >
              More{' '}
              <span className='ml-1'>
                <BsArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentCard;
