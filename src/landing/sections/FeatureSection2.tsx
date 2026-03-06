import FeatureRow from './FeatureRow';
import MusicListIcon from '../assets/icons/music-list.svg';
import ShareNodesIcon from '../assets/icons/share-nodes.svg';
import image from '../assets/images/feature2-relations.png';

export default function FeatureSection2() {
  return (
    <FeatureRow
      title="Добавьте последовательные взаимосвязи между задачами"
      items={[
        {
          icon: <MusicListIcon className="size-[34px]" />,
          text: 'Установите четкий порядок выполнения задач',
        },
        {
          icon: <ShareNodesIcon className="size-[34px]" />,
          text: 'Соедините зависящие друг от друга действия в проекте',
        },
      ]}
      image={image}
      bgColor="gray"
    />
  );
}
