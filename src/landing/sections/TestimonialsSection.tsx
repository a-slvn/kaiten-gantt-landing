import logoExpress42 from '../assets/images/logo-express42.png';
import logoSamolet from '../assets/images/logo-samolet.png';
import logoNhtk from '../assets/images/logo-nhtk.png';
import avatarPlaceholder from '../assets/images/avatar-placeholder.png';
import QuoteIcon from '../assets/icons/quote.svg';

const testimonials = [
  {
    logo: logoExpress42,
    quote:
      'Использование Диаграммы Ганта в проекте помогает всем сотрудникам понимать, как мы ведем работу, и увеличивает вовлеченность. На временной шкале у нас получается распределять ресурсы и смотреть, чтобы их было достаточно для выполнения проекта в срок',
    name: 'Юлия Фатеева',
    role: 'руководитель проектного офиса\nЭкспресс 42',
  },
  {
    logo: logoSamolet,
    quote:
      'График Ганта помогает отследить временной прогресс по выполнению проектов. На диаграмме показаны все временные промежутки и отмечается прогресс в процентах.',
    name: 'Мирослава Аристова',
    role: 'эксперт по Agile-трансформации\n«Самолет»',
  },
  {
    logo: logoNhtk,
    quote:
      'Есть крупный проект с фиксированными сроками работы. Команда в целом работает по Agile, но в то же время есть четкие этапы. Визуализировать сроки, эпики и задачи помогают не только доски, но и диаграмма Ганта.',
    name: 'Антон Мартынов',
    role: 'руководитель по цифровизации\nв НХТК',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f3f4f6] px-28 py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-8">
        {/* Title */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="text-[48px] leading-[52px] font-semibold text-[#1f2937]">
            Делимся опытом
          </h2>
          <p className="text-[16px] leading-[24px] tracking-[-0.2px] text-[#374151]">
            что говорят клиенты про управление проектами в Kaiten
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-full gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-1 flex-col gap-6 rounded-2xl bg-white p-6"
            >
              {/* Logo + quote icon */}
              <div className="flex h-[60px] items-start justify-between gap-6 overflow-hidden">
                <img
                  src={t.logo}
                  alt=""
                  className="h-[60px] w-auto object-contain object-left"
                />
                <QuoteIcon className="h-[60px] w-[79px] shrink-0 rotate-180" />
              </div>

              {/* Quote text */}
              <p className="flex-1 text-[16px] leading-[24px] tracking-[-0.2px] text-[#6b7280]">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={avatarPlaceholder}
                  alt={t.name}
                  className="size-14 rounded-full"
                />
                <div>
                  <p className="text-[16px] leading-[24px] font-medium tracking-[-0.2px] text-[#374151]">
                    {t.name}
                  </p>
                  <p className="whitespace-pre-line text-[16px] leading-[24px] tracking-[-0.2px] text-[#6b7280]">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* CTA button */}
              <button className="self-start rounded-lg border border-[#d1d5db] bg-white px-3.5 py-2.5 text-[14px] leading-[20px] font-medium tracking-[-0.2px] text-[#7d4ccf] hover:bg-gray-50 transition-colors">
                Читать кейс
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
