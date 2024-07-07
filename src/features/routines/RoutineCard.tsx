import { BsArrowRight } from 'react-icons/bs';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card.tsx';

interface IRoutineCardProps {
  routine_title: string;
  routine_description: string;
  routine_imageUrl: string;
  id: number;
}

const RoutineCard = ({ routine_title, routine_description, routine_imageUrl, id }: IRoutineCardProps) => {
  return (
    <>
      <CardContainer className='font-poppins'>
        <CardBody
          className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.2] w-full sm:w-[30rem] h-auto rounded-xl p-6 border
       hover:-translate-y-6 transition-all duration-300 max-w-[20rem] mx-12 overflow-y-scroll scrollbar-hide mt-10 dark:border-gray-800 overflow-hidden shadow-lg shadow-amber-900 dark:shadow-pink-500'
        >
          <CardItem translateZ='50' className='text-xl font-bold text-gray-800 dark:text-white'>
            {routine_title}
          </CardItem>
          <CardItem as='p' translateZ='60' className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
            {routine_description}
          </CardItem>
          <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
            <img
              src={routine_imageUrl}
              height='1000'
              width='1000'
              className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
              alt='thumbnail'
            />
          </CardItem>
          <div className='flex justify-center items-center mt-10'>
            <a href={`/routines/routine/${id}`}>
              <CardItem
                translateZ={20}
                translateX={40}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                <BsArrowRight />
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default RoutineCard;
