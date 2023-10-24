interface IExerciseHeadersProps {
  title: string;
  content: string;
}

const ExerciseHeaders = ({ title, content }: IExerciseHeadersProps) => {
  return (
    <h2 className="text-gray-200 text-xl">
      <span className="text-gray-400 font-semibold mr-2 inline-flex items-center">
        {title}
        <span className="ml-2">:</span>
      </span>
      <span className="font-rubik ">
        {content.charAt(0).toUpperCase() + content.slice(1)}
      </span>
    </h2>
  );
};

export default ExerciseHeaders;
