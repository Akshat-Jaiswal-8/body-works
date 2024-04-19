import { Card } from '@/ui/Card.tsx';

interface ITargetMuscleProp {
  name: string;
  image: string;
}

function TargetMusclesCard(props: ITargetMuscleProp) {
  const name: string = props.name;
  const image: string = props.image;
  return <Card name={name} image={image} path={'target-muscle'} />;
}
export default TargetMusclesCard;
