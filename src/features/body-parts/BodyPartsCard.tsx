import { Card } from '@/ui/Card.tsx';

interface IBodyPartProp {
  name: string;
  image: string;
}

function BodyPartsCard(props: IBodyPartProp) {
  const name: string = props.name;
  const image: string = props.image;
  return <Card name={name} image={image} path={'body-parts'} />;
}

export default BodyPartsCard;
