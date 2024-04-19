import { DescriptedCard } from '@/ui/DescriptedCard.tsx';

interface ITargetMuscleCardProps {
  gif: string;
  title: string;
  blog: string;
  id: string;
}

const TargetMuscleCard = ({ gif, title, blog, id }: ITargetMuscleCardProps) => {
  return <DescriptedCard gif={gif} title={title} blog={blog} id={id} />;
};

export default TargetMuscleCard;
