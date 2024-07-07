interface IExerciseHeadersProps {
  title: string;
  content: string;
}

const ExerciseHeaders = ({ title, content }: IExerciseHeadersProps) => {
  return (
    <h2 className='text-gray-200 xs:text-lg xl:text-xl'>
      <span className='text-amber-800 dark:text-white font-bold mr-2  inline-flex items-center'>
        {title}
        <span className='ml-2'>:</span>
      </span>
      <span className='font-montserrat dark:text-gray-200 font-semibold text-amber-600'>
        {content.charAt(0).toUpperCase() + content.slice(1)}
      </span>
    </h2>
  );
};

export default ExerciseHeaders;
