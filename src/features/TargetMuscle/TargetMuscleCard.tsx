import { Link } from "react-router-dom";

interface ITargetMuscleProp {
  name: string;
}

function TargetMuscleCard(props: ITargetMuscleProp) {
  const name: string = props.name;
  return (
    <Link
      to={"/exercises/target-muscle"}
      className="bg-gray-900 group hover:bg-gray-950 transition-all duration-300 mx-12 py-4 mt-10 border border-gray-800 rounded-xl"
    >
      <div className="text-center">
        <h4 className="text-gray-300 group-hover:text-white transition-all duration-300 text-lg font-semibold ">
          {name.toUpperCase()}
        </h4>
      </div>
    </Link>
  );
}

export default TargetMuscleCard;
