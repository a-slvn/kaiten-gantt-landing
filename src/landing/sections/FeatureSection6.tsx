import FeatureRow from './FeatureRow';
import PencilIcon from '../assets/icons/pencil.svg';
import ClockIcon from '../assets/icons/clock-3.svg';
import ChartIcon from '../assets/icons/chart-2.svg';
import image from '../assets/images/feature6-actualize.png';

export default function FeatureSection6() {
  return (
    <FeatureRow
      title="Актуализируйте план проекта с учетом новых данных"
      items={[
        {
          icon: <PencilIcon className="size-[34px]" />,
          text: 'Вносите изменения в проект на любом этапе',
        },
        {
          icon: <ClockIcon className="size-[34px]" />,
          text: 'Корректируйте сроки',
        },
        {
          icon: <ChartIcon className="size-[34px]" />,
          text: 'Подстраивайте длительность задач под возможности вашей команды',
        },
      ]}
      image={image}
      bgColor="gray"
    />
  );
}
