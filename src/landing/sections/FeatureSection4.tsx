import FeatureRow from './FeatureRow';
import UserResponsibleIcon from '../assets/icons/user-responsible.svg';
import ChartResourceIcon from '../assets/icons/chart-resource.svg';
import image from '../assets/images/feature4-responsible.png';

export default function FeatureSection4() {
  return (
    <FeatureRow
      title="Назначьте ответственных на задачи и распределите их ресурсы"
      items={[
        {
          icon: <UserResponsibleIcon className="size-[34px]" />,
          text: 'Добавьте ответственных и участников проекта в задачи',
        },
        {
          icon: <ChartResourceIcon className="size-[34px]" />,
          text: 'Разделите рабочие часы отдельно на каждую задачу',
        },
      ]}
      image={image}
      bgColor="gray"
    />
  );
}
