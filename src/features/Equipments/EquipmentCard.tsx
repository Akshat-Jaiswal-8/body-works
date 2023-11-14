interface IEquipmentProp {
  name: string;
  image: string;
}

function EquipmentCard(props: IEquipmentProp) {
  const name: string = props.name;
  const image: string = props.image;
  return (
    <a href={`/exercises/`}>
      <div className='overflow-y-scroll hover:-translate-y-6 transition-all duration-300 mx-8 cursor-pointer scrollbar-hide h-70 bg-bg-card-primary-color dark:bg-gray-900 mt-10 border border-amber-700 dark:border-gray-800 rounded-xl overflow-hidden'>
        <div className='flex flex-col'>
          <img src={image} className='w-full h-48' alt='exercise image' />
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

export default EquipmentCard;
