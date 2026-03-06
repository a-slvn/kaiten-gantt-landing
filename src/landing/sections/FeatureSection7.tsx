import FeatureRow from './FeatureRow';
import Kt2Icon from '../assets/icons/kt2.svg';
import TargetIcon from '../assets/icons/target.svg';
import FileTextIcon from '../assets/icons/file-text.svg';
import image from '../assets/images/feature7-progress.png';

export default function FeatureSection7() {
  return (
    <FeatureRow
      title="Следите за прогрессом выполнения проекта"
      items={[
        {
          icon: <Kt2Icon className="size-[34px]" />,
          text: 'Оценивайте прогресс в процентах',
        },
        {
          icon: <TargetIcon className="size-[34px]" />,
          text: 'Сравнивайте текущее состояние проекта с базовым планом, установленным в самом начале',
        },
        {
          icon: <FileTextIcon className="size-[34px]" />,
          text: 'Выгружайте все данные о проекте в виде отчета',
        },
      ]}
      image={image}
      bgColor="white"
    />
  );
}
