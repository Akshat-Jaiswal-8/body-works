interface IBodyPartProp {
  name: string;
  image: string;
}

function BodyPartsCard(props: IBodyPartProp) {
  const name: string = props.name;
  const image: string = props.image;
  return (
    <a href={`/body-parts/${name}`}>
      <div className='overflow-y-scroll hover:scale-110 transition-all duration-200 mx-8 cursor-pointer scrollbar-hide h-70 bg-bg-card-light-primary-color dark:bg-gray-900 mt-10 border border-amber-700 dark:border-gray-800 rounded-xl overflow-hidden'>
        <div className='flex flex-col'>
          <img loading={'lazy'} src={image} className='w-full h-48' alt='exercise image' />
          <div className='p-6 text-left'>
            <div className='text-center'>
              <h4 className='text-gray-800 dark:text-white truncate group-hover:text-white transition-all duration-300 text-xl font-semibold '>
                {name.toUpperCase()}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default BodyPartsCard;
