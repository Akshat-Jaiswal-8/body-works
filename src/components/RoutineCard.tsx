import { BsArrowRight } from "react-icons/bs";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";

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
    <CardContainer className="font-poppins">
      <CardBody className="group/card scrollbar-hide relative mx-12 mt-10 h-auto w-full max-w-[20rem] overflow-hidden overflow-y-scroll rounded-xl border border-black/[0.2] bg-gray-50 p-6 shadow-lg shadow-amber-900 transition-all duration-300 hover:-translate-y-6 dark:border-gray-800 dark:border-white/[0.2] dark:bg-black dark:shadow-pink-500 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem translateZ="50" className="text-xl font-bold text-gray-800 dark:text-white">
          {routine_title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
          {routine_description}
        </CardItem>
        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="mt-4 w-full">
          <img
            src={routine_imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-10 flex items-center justify-center">
          <a href={`/routines/routine/${id}`}>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black">
              <BsArrowRight />
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default RoutineCard;
