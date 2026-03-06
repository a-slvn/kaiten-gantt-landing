import heroImage from '../assets/images/gantt-overview.png';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-14">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(125,76,207,0.08) 0%, rgba(125,76,207,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-[1520px] flex-col items-center gap-16 px-[200px]">
        {/* Title block */}
        <div className="flex max-w-[809px] flex-col items-center gap-4 text-center">
          <h1 className="text-[60px] leading-[64px] font-semibold text-[#1f2937]">
            Модуль ГАНТ и&nbsp;Ресурсное планирование
          </h1>
          <p className="max-w-[592px] text-[18px] leading-[28px] tracking-[-0.2px] text-[#374151]">
            Детально планируйте крупные проекты на Диаграмме Ганта. Управляйте
            ресурсами и&nbsp;трудозатратами сотрудников
          </p>
        </div>

        {/* Screenshot */}
        <div className="w-[1008px] rounded-t-[20px] bg-white pt-3.5 px-3.5 shadow-[0px_-4px_24px_rgba(16,24,40,0.06)]">
          <img
            src={heroImage}
            alt="Диаграмма Ганта в Kaiten"
            className="w-full rounded-t-lg"
          />
        </div>
      </div>
    </section>
  );
}
