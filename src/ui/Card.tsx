import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card.tsx';
import { BsArrowRight } from 'react-icons/bs';
interface ICardProps {
  name: string;
  image: string;
  path: string;
  searchName?: string;
}

export const Card = ({ name, image, path, searchName }: ICardProps) => {
  return (
    <div>
      <CardContainer className='xs:max-w-[16rem] xs:h-auto sm:max-w-[30rem] md:max-w-[30rem] lg:max-w-[20rem]'>
        <CardBody
          className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.2] rounded-xl p-6 border
       hover:-translate-y-6 transition-all duration-300 overflow-y-scroll scrollbar-hide mt-10 dark:border-gray-800 overflow-hidden shadow-lg shadow-amber-900 dark:shadow-pink-500'
        >
          <CardItem translateZ='100' rotateX={20} rotateZ={-10} className='w-full mt-4'>
            <img
              src={image}
              height='1000'
              width='1000'
              className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
              alt='thumbnail'
            />
          </CardItem>

          <div className='flex justify-between items-center mt-6'>
            <CardItem translateZ='50' className='text-xl font-bold text-gray-800 dark:text-white'>
              {name}
            </CardItem>
            <a href={`/${path}/${searchName ? searchName : name}`}>
              <CardItem
                translateZ={20}
                translateX={20}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                <BsArrowRight />
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};
