import FeatureRow from './FeatureRow';
import MilestoneIcon from '../assets/icons/milestone.svg';
import image from '../assets/images/feature3-milestones.png';

export default function FeatureSection3() {
  return (
    <FeatureRow
      title="Обозначьте важные стадии проекта"
      items={[
        {
          icon: <MilestoneIcon className="size-[34px]" />,
          text: 'Добавьте на диаграмму вехи — значимые события, которые нужно пройти для завершения проекта.',
          description:
            'Они служат ориентирами для измерения прогресса по проекту.',
        },
      ]}
      image={image}
      bgColor="white"
    />
  );
}
