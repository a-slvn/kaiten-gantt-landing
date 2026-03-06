import ColumnIcon from '../assets/icons/column.svg';
import ClockIcon from '../assets/icons/clock.svg';
import RocketIcon from '../assets/icons/rocket.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import ganttImage from '../assets/images/gantt-overview.png';

const features = [
  {
    Icon: ColumnIcon,
    title: 'Посмотрите на проект со стороны',
    text: 'Получите полное представление о проекте на подробном графике:\nот идеи до реализации.',
  },
  {
    Icon: ClockIcon,
    title: 'Выполняйте проекты в срок',
    text: 'Обозначьте временные рамки для каждой задачи проекта и следите за их выполнением в реальном времени.',
  },
  {
    Icon: RocketIcon,
    title: 'Оптимизируйте ресурсы команды',
    text: 'Распределяйте нагрузку с точностью до часа, избегайте переработок и простоев в работе.',
  },
  {
    Icon: SettingsIcon,
    title: 'Управляйте задачами проекта',
    text: 'Планируйте и отслеживайте все действия по проекту, контролируйте последовательность выполнения задач.',
  },
];

export default function GanttOverview() {
  return (
    <section className="bg-[#f3f4f6] px-28 py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-8">
        {/* Section title */}
        <div className="flex max-w-[1008px] flex-col items-center gap-4 text-center">
          <h2 className="text-[48px] leading-[52px] font-semibold text-[#1f2937]">
            Диаграмма Ганта{' '}
          </h2>
          <p className="text-[16px] leading-[24px] tracking-[-0.2px] text-[#374151]">
            это наглядное отображение всех составляющих проекта на временной
            шкале.
            <br />
            Детально демонстрирует все этапы, задачи, вехи и ресурсы в
            распределении по срокам.
          </p>
        </div>

        {/* Cards + Screenshot */}
        <div className="flex w-full items-start gap-8">
          {/* Left: 4 feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-6 rounded-2xl bg-white p-7"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#efe9f9] p-2">
                  <f.Icon className="size-7" />
                </div>
                <div className="flex flex-col gap-3.5">
                  <p className="text-[20px] leading-[28px] font-semibold tracking-[-0.2px] text-[#1f2937]">
                    {f.title}
                  </p>
                  <p className="whitespace-pre-line text-[16px] leading-[24px] tracking-[-0.2px] text-[#6b7280]">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: screenshot */}
          <div className="relative w-[448px] shrink-0 self-stretch overflow-hidden rounded-2xl bg-[#efe9f9]">
            <img
              src={ganttImage}
              alt="Диаграмма Ганта"
              className="absolute left-10 top-1/2 w-[860px] max-w-none -translate-y-1/2 shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
