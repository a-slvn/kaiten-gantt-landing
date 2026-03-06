const features = [
  { name: 'Создание документов', kaiten: true, google: true },
  { name: 'Редактирование документов', kaiten: true, google: true },
  { name: 'Форматирование текста, добавление заголовков,\nподзаголовков, списков, цитат', kaiten: true, google: true },
  { name: 'Совместное редактирование документов', kaiten: true, google: true },
  { name: 'Комментирование документов', kaiten: false, google: true },
  { name: 'Добавление таблиц', kaiten: true, google: true },
  { name: 'Добавление изображений, видео, частей кода, ссылок', kaiten: true, google: true },
  { name: 'Вложение файлов в документы', kaiten: false, google: true },
  { name: 'Объединение документов в папки', kaiten: true, google: true },
  { name: 'Публикация документов для внешних пользователей', kaiten: true, google: true },
  { name: 'Редактирование документов внешними пользователями', kaiten: false, google: true },
  { name: 'Публикация папок с документами', kaiten: true, google: true },
  { name: 'Регулирование доступов к документам\n(комментатор, редактор, администратор)', kaiten: true, google: true },
  { name: 'Регулирование доступов к папкам с документами\n(комментатор, редактор, администратор)', kaiten: true, google: true },
  { name: 'Расширения', kaiten: false, google: true },
  { name: 'Веб-версия', kaiten: true, google: true },
  { name: 'Мобильное приложение', kaiten: true, google: true },
];

function CheckIcon({ active }: { active: boolean }) {
  return (
    <div className="flex size-6 items-center justify-center rounded-full bg-white">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        {active ? (
          <path
            d="M11.667 3.5L5.25 9.917 2.333 7"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M10.5 3.5 3.5 10.5M3.5 3.5l7 7"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-white px-28 py-24">
      <div className="mx-auto flex max-w-[1216px] flex-col items-center gap-16">
        <h2 className="text-center text-[48px] leading-[52px] font-semibold text-[#1f2937]">
          Сравнение Google Docs и Kaiten для работы
          <br />с документами: обзор функций
        </h2>

        <div className="flex w-full">
          {/* Labels column */}
          <div className="w-[608px] shrink-0">
            <div className="h-[92px] border-b border-[#d1d5db]" />
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center border-b border-[#d1d5db] px-10 py-3"
              >
                <span className="whitespace-pre-line text-[18px] leading-[28px] tracking-[-0.2px] text-[#374151]">
                  {f.name}
                </span>
              </div>
            ))}
          </div>

          {/* Kaiten column */}
          <div className="flex flex-1 flex-col rounded-t-3xl bg-[#efe9f9]">
            <div className="flex h-[92px] items-center justify-center rounded-t-3xl border-b border-[#d1d5db]">
              <svg width="120" height="36" viewBox="0 0 148 44" fill="none">
                <path d="M32.497 0H11.503C5.15 0 0 5.147 0 11.497v21.006C0 38.853 5.15 44 11.503 44h20.994C38.85 44 44 38.853 44 32.503V11.497C44 5.147 38.85 0 32.497 0Z" fill="#F11F24"/>
                <path d="M17.522 4.796 4.796 17.522a6.25 6.25 0 0 0 0 8.858l12.726 12.725a6.25 6.25 0 0 0 8.858 0l12.726-12.725a6.25 6.25 0 0 0 0-8.858L26.38 4.796a6.25 6.25 0 0 0-8.858 0Z" fill="#78FFC7"/>
                <path d="M21.879 32.758a10.879 10.879 0 1 0 0-21.758 10.879 10.879 0 0 0 0 21.758Z" fill="#7D4CCF"/>
                <path d="M68.712 21.423l6.081 8.156h-3.786l-5.279-7.122h-4.016v7.122h-3.328V13.496h3.328v7.237h3.787l5.278-7.237h3.672l-5.737 7.927Zm10.106 4.365c0 1.455.88 2.183 2.64 2.183h3.212v-4.365h-3.213c-1.759 0-2.639.727-2.639 2.182Zm5.852-3.791c0-1.103-.29-1.915-.872-2.435-.566-.521-1.308-.781-2.226-.781-.688 0-1.362.107-2.02.322-.657.199-1.246.475-1.766.827l-.804-1.378c.337-.23.704-.43 1.102-.598.413-.168.834-.306 1.262-.414.429-.122.849-.214 1.263-.275.428-.061.826-.092 1.193-.092.98 0 1.844.115 2.594.345.75.23 1.385.559 1.905.988.52.429.91.942 1.17 1.54.276.581.414 1.232.414 1.952v7.582h-6.426c-2.08 0-3.618-.314-4.613-.942-.979-.628-1.469-1.578-1.469-2.849s.49-2.221 1.47-2.849c.994-.628 2.532-.942 4.612-.942h3.213Zm12.496-5.744c-1.438 0-2.524-.33-3.259-.988-.734-.674-1.1-1.532-1.1-2.573h2.638c0 .582.169 1.057.505 1.425.352.352.758.528 1.217.528.459 0 .857-.176 1.193-.528.352-.368.528-.843.528-1.425h2.639c0 1.042-.367 1.9-1.101 2.573-.735.66-1.821.988-3.26.988Zm6.656 1.379V29.58h-3.213v-8.96h-.23l-5.278 8.96h-4.131V17.632h3.213v8.96h.23l5.278-8.96h4.131Zm14.692 1.608h-4.819v10.34h-3.213V19.24h-4.82v-1.608h12.852v1.608Zm8.028 9.19c.75 0 1.447-.13 2.089-.39.658-.261 1.3-.629 1.928-1.104l.917 1.379c-.29.26-.635.497-1.033.712a6.46 6.46 0 0 1-1.262.551 8.29 8.29 0 0 1-1.4.322c-.49.092-.98.138-1.469.138-1.086 0-2.08-.146-2.984-.437-.887-.276-1.644-.682-2.272-1.218-.627-.551-1.117-1.225-1.469-2.022-.336-.796-.504-1.715-.504-2.757 0-1.026.16-1.937.482-2.734.336-.812.795-1.486 1.377-2.022.596-.551 1.3-.965 2.111-1.24.811-.292 1.706-.437 2.685-.437.918 0 1.782.138 2.593.414a5.51 5.51 0 0 1 2.111 1.218 5.43 5.43 0 0 1 1.423 1.907c.352.75.528 1.6.528 2.55v1.608h-9.799c.184 1.272.62 2.183 1.308 2.734.705.552 1.585.827 2.64.827Zm-.804-9.764c-.443 0-.856.084-1.239.253-.382.168-.718.436-1.01.804-.275.368-.504.842-.688 1.424-.168.582-.26 1.287-.275 2.114h6.426c0-.796-.092-1.486-.276-2.067-.183-.583-.428-1.057-.734-1.425-.29-.383-.635-.659-1.032-.827-.383-.184-.774-.276-1.172-.276Zm21.915-1.034V29.58h-3.213v-5.284h-6.196v5.284h-3.213V17.632h3.213v5.054h6.196v-5.054h3.213Z" fill="black"/>
              </svg>
            </div>
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center justify-center border-b border-[#d1d5db] px-10 py-3"
              >
                <CheckIcon active={f.kaiten} />
              </div>
            ))}
          </div>

          {/* Google Docs column */}
          <div className="flex flex-1 flex-col rounded-t-3xl bg-[#f3f4f6]">
            <div className="flex h-[92px] items-center justify-center rounded-t-3xl border-b border-[#d1d5db]">
              <span className="text-[18px] font-medium text-[#374151]">
                Google Docs
              </span>
            </div>
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center justify-center border-b border-[#d1d5db] px-10 py-3"
              >
                <CheckIcon active={f.google} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
