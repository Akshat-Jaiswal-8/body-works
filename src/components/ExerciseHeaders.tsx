interface IExerciseHeadersProps {
  title: string;
  content: string;
}

const ExerciseHeaders = ({ title, content }: IExerciseHeadersProps) => {
  return (
    <h2 className="text-gray-200 xs:text-lg xl:text-xl">
      <span className="mr-2 inline-flex items-center font-bold text-amber-800 dark:text-white">
        {title}
        <span className="ml-2">:</span>
      </span>
      <span className="font-montserrat font-semibold text-amber-600 dark:text-gray-200">
        {content?.charAt(0).toUpperCase() + content?.slice(1)}
      </span>
    </h2>
  );
};

export default ExerciseHeaders;
