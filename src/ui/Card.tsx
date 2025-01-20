import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";
import { BsArrowRight } from "react-icons/bs";

interface ICardProps {
  name: string;
  image: string;
  path: string;
  searchName?: string;
}

export const Card = ({ name, image, path, searchName }: ICardProps) => {
  return (
    <div className={"transition-all duration-200 hover:scale-110"}>
      <CardContainer className="xs:max-w-[15.5rem] sm:max-w-[30rem] md:max-w-[30rem] lg:max-w-[17rem]">
        <CardBody className="group/card scrollbar-hide relative mt-10 overflow-hidden rounded-xl border border-black/[0.2] bg-gray-50 p-6 shadow-lg shadow-amber-900 transition-all duration-300 hover:-translate-y-6 dark:border-gray-800 dark:border-white/[0.2] dark:bg-black dark:shadow-pink-500 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
          <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="mt-4 w-full">
            <img
              src={image}
              className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt={"photo"}
            />
          </CardItem>

          <div className="mt-6 flex items-center justify-between">
            <CardItem translateZ="50" className="text-xl font-bold text-gray-800 dark:text-white">
              {name}
            </CardItem>
            <a href={`/${path}/${searchName ? searchName : name}`}>
              <CardItem
                translateZ={20}
                translateX={20}
                as="button"
                className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black">
                <BsArrowRight />
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};
