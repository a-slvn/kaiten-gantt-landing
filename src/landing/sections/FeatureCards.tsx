import CalendarTimeIcon from '../assets/icons/calendar-time.svg';
import LinkIcon from '../assets/icons/link.svg';
import UserPencilIcon from '../assets/icons/user-pencil.svg';
import ChartIcon from '../assets/icons/chart.svg';

const cards = [
  { Icon: CalendarTimeIcon, title: 'Планируйте\nсроки задачи' },
  { Icon: LinkIcon, title: 'Стройте\nвзаимосвязи' },
  { Icon: UserPencilIcon, title: 'Назначайте\nответственных' },
  { Icon: ChartIcon, title: 'Распределяйте\nресурсы' },
];

export default function FeatureCards() {
  return (
    <section className="bg-white px-28 pt-28 pb-20">
      <div className="mx-auto flex max-w-[1280px] gap-8 px-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-1 items-center justify-center rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-7 pt-12 pb-6"
          >
            {/* Icon circle */}
            <div className="absolute -top-10 left-1/2 flex size-16 -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-[rgba(125,76,207,0.15)] bg-[#7d4ccf]">
              <card.Icon className="size-8" />
            </div>

            <p className="whitespace-pre-line text-center text-[20px] leading-[28px] font-medium tracking-[-0.2px] text-[#374151]">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
