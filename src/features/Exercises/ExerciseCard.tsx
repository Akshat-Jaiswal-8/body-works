import { DescriptedCard } from '@/ui/DescriptedCard.tsx';

interface IProps {
  gif: string;
  title: string;
  blog: string;
  id: string;
}

export const ExerciseCard = ({ gif, title, blog, id }: IProps) => {
  return <DescriptedCard gif={gif} title={title} blog={blog} id={id} />;
};
