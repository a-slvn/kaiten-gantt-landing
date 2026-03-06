import FeatureRow from './FeatureRow';
import CalendarIcon from '../assets/icons/calendar-2.svg';
import BarIcon from '../assets/icons/bar.svg';
import image from '../assets/images/feature5-hours.png';

export default function FeatureSection5() {
  return (
    <FeatureRow
      title="Учитывайте рабочие часы"
      items={[
        {
          icon: <CalendarIcon className="size-[34px]" />,
          text: 'Учитывайте наличие свободных рабочих часов и календарь сотрудника',
        },
        {
          icon: <BarIcon className="size-[34px]" />,
          text: 'Планируйте кто, когда и сколько ресурсов потратит, чтобы выполнить проект',
        },
      ]}
      image={image}
      bgColor="white"
    />
  );
}
