import { IRoutineCategory } from '@/services/apiRoutineCategory.ts';
import { Card } from '@/ui/Card.tsx';

function RoutineCategoryCard(props: IRoutineCategory) {
  const name: string = props.title;
  const image: string = props.imageUrl;
  const searchName = name?.replace(' ', '%20');
  return <Card name={name} image={image} path={'routines'} searchName={searchName} />;
}

export default RoutineCategoryCard;
