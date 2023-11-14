import { BsArrowRight } from 'react-icons/bs';

interface IRoutineCardProps {
  routine_title: string;
  routine_description: string;
  routine_imageUrl: string;
  id: number;
}

const RoutineCard = ({
  routine_title,
  routine_description,
  routine_imageUrl,
  id,
}: IRoutineCardProps) => {
  return (
    <>
      <div className='hover:-translate-y-6 transition-all duration-300 bg-bg-card-light-primary-color max-w-sm mx-12 overflow-y-scroll scrollbar-hide h-80 dark:bg-gray-900 mt-10 border dark:border-gray-800 border-border-light-primary-color rounded-xl overflow-hidden'>
        <div className='flex flex-col gap-3'>
          <a href={`/routines/routine/${id}`}>
            <img
              src={routine_imageUrl}
              className='w-full h-48'
              alt='exercise image'
            />
          </a>

          <div className='p-6 text-left'>
            <h2 className='dark:text-white text-gray-800 text-left font-semibold text-lg mb-8'>
              {routine_title}
            </h2>
            <p className='text-gray-700 dark:text-white h-fit mb-6'>
              {routine_description}
            </p>
            <a
              href={`/exercises`}
              className='flex dark:text-white dark:hover:text-pink-500 hover:text-primary-hover-color text-gray-800 transition-all duration-300 text-center items-center'
            >
              More
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

export default RoutineCard;
