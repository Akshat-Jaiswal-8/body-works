import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";
import { BsArrowRight } from "react-icons/bs";

interface IDescriptedCardProps {
  gif: string;
  title: string;
  blog: string;
  id: string;
}

export const DescriptedCard = ({ gif, title, blog, id }: IDescriptedCardProps) => {
  const match: RegExpMatchArray | null = blog.match("Description");
  const index: number | undefined = match?.index;

  return (
    <div>
      <CardContainer className="font-poppins xs:max-w-[16rem] xs:h-auto sm:max-w-[30rem] md:max-w-[30rem] lg:max-w-[20rem]">
        <CardBody
          className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.2] h-auto rounded-xl p-6 border
       hover:-translate-y-6 transition-all duration-300 overflow-y-scroll scrollbar-hide mt-10 dark:border-gray-800 overflow-hidden shadow-lg shadow-amber-900 dark:shadow-pink-500 flex flex-col justify-center items-center"
        >
          <CardItem translateZ="50" className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {index && blog.slice(index + 11, 150) + "..."}
          </CardItem>
          <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
            <img
              src={gif}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-6">
            <a href={`/exercises/${id}`}>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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
