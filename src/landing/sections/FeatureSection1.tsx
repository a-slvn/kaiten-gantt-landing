import FeatureRow from './FeatureRow';
import UserIcon from '../assets/icons/user-1.svg';
import ClockIcon from '../assets/icons/clock-2.svg';
import image from '../assets/images/feature1-build.png';
import SectionTitle from './SectionTitle';

export default function FeatureSection1() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-8 pt-24 pb-20">
        <SectionTitle title="Как построить Диаграмму Ганта онлайн" />
      </div>
      <FeatureRow
        title="Создайте проект и запланируйте задачи на временной шкале"
        items={[
          {
            icon: <UserIcon className="size-[34px]" />,
            text: 'Добавьте ответственных и участников проекта в задачи',
          },
          {
            icon: <ClockIcon className="size-[34px]" />,
            text: 'Разделите рабочие часы отдельно на каждую задачу',
          },
        ]}
        image={image}
        bgColor="white"
        className="pt-0"
      />
    </section>
  );
}
