import { Card } from '@/ui/Card.tsx';

interface IEquipmentProp {
  name: string;
  image: string;
}

export function EquipmentsCard(props: IEquipmentProp) {
  const name: string = props.name;
  const image: string = props.image;
  return <Card name={name} image={image} path={'equipments'} />;
}
