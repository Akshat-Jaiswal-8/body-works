import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

interface IProps {
  image: string;
  title: string;
  blog: string;
}

const ExerciseCard = (props: IProps) => {
  const image: string = props.image;
  const title: string = props.title;
  const blog: string = props.blog;
  const match: RegExpMatchArray | null = blog.match("Description");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const index: number = match.index;
  console.log(window.screenY);

  return (
    <>
      <div className="max-w-sm mx-12 overflow-y-scroll scrollbar-hide h-80 bg-gray-900 mt-10 border border-gray-800 rounded-xl overflow-hidden">
        <div className="flex flex-col gap-3">
          <Link to={"/exercises/exercise"}>
            <img src={image} className="w-full h-48" alt="exercise image" />
          </Link>
          <div className="p-6 text-left">
            <h2 className="text-white text-left font-semibold text-lg mb-4">
              {title}
            </h2>
            <p className="text-gray-400 h-fit mb-6">
              {blog.slice(index + 11, 150) + "..."}
            </p>
            <Link
              to={"/exercise"}
              className="flex text-white hover:text-pink-500 transition-all duration-300 text-center items-center"
            >
              More
              <span className="ml-1">
                <BsArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseCard;
