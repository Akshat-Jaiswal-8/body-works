import { DescriptedCard } from '@/ui/DescriptedCard.tsx';

interface IProps {
  gif: string;
  title: string;
  blog: string;
  id: string;
}

const EquipmentCard = ({ gif, title, blog, id }: IProps) => {
  return <DescriptedCard gif={gif} title={title} blog={blog} id={id} />;
};

export default EquipmentCard;
