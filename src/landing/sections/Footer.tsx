export default function Footer() {
  return (
    <footer className="bg-white px-28 pt-16 pb-8">
      <div className="mx-auto max-w-[1280px] px-8">
        {/* Top section: nav columns + telegram + subscribe */}
        <div className="flex gap-8 border-b border-[#e5e7eb] pb-12">
          {/* Nav columns */}
          <div className="flex flex-1 gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="text-[16px] leading-[24px] font-semibold text-[#1f2937]">
                Компания
              </h4>
              {['Тарифы', 'Контакты', 'Лицензии', 'Скачать презентацию'].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[14px] leading-[20px] text-[#6b7280] hover:text-[#7d4ccf] transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[16px] leading-[24px] font-semibold text-[#1f2937]">
                Ресурсы
              </h4>
              {['База знаний', 'Кейсы', 'Блог', 'API', 'Комьюнити'].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[14px] leading-[20px] text-[#6b7280] hover:text-[#7d4ccf] transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[16px] leading-[24px] font-semibold text-[#1f2937]">
                Возможности
              </h4>
              {[
                'Партнерская программа',
                'Дополнения',
                'On-premise',
                'Внедрение',
                'Kaiten AI',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[14px] leading-[20px] text-[#6b7280] hover:text-[#7d4ccf] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Telegram */}
          <div className="flex w-[240px] flex-col gap-4 rounded-2xl border border-[#e5e7eb] p-5">
            <h4 className="text-[16px] leading-[24px] font-semibold text-[#1f2937]">
              Мы в Telegram
            </h4>
            <p className="text-[14px] leading-[20px] text-[#6b7280]">
              <span className="font-medium text-[#7d4ccf]">Канал Kaiten</span>{' '}
              — будьте в курсе обновлений и новых фичей
            </p>
            <p className="text-[14px] leading-[20px] text-[#6b7280]">
              <span className="font-medium text-[#7d4ccf]">
                Канал Бэклогово
              </span>{' '}
              — всё про эффективное управление
            </p>
          </div>

          {/* Subscribe */}
          <div className="flex w-[280px] flex-col gap-4">
            <h4 className="text-[16px] leading-[24px] font-semibold text-[#1f2937]">
              Подписаться на рассылку
            </h4>
            <p className="text-[14px] leading-[20px] text-[#6b7280]">
              Получайте кейсы пользователей, статьи и обновления.
            </p>
            <input
              type="email"
              placeholder="Ваш e-mail"
              className="rounded-lg border border-[#d1d5db] px-4 py-2.5 text-[14px] outline-none focus:border-[#7d4ccf]"
            />
            <button className="rounded-lg bg-[#7d4ccf] px-6 py-2.5 text-[14px] font-medium text-white hover:bg-[#6a3db5] transition-colors">
              Подписаться
            </button>
          </div>
        </div>

        {/* Legal info */}
        <div className="flex gap-8 border-b border-[#e5e7eb] py-8">
          <div className="flex-1">
            <p className="text-[14px] leading-[20px] font-semibold text-[#1f2937]">
              Официальный статус российского IT-разработчика
            </p>
            <p className="mt-2 text-[13px] leading-[18px] text-[#6b7280]">
              Kaiten внесен в реестр отечественного ПО №14347, а компания
              аккредитована как IT-организация
            </p>
            <a
              href="#"
              className="mt-2 inline-block text-[13px] leading-[18px] font-medium text-[#7d4ccf]"
            >
              Подробнее →
            </a>
          </div>
          <div className="flex-1">
            <p className="text-[14px] leading-[20px] font-semibold text-[#1f2937]">
              Общество с ограниченной ответственностью «Кайтен Софтвер»
            </p>
            <div className="mt-2 flex gap-8 text-[13px] leading-[18px] text-[#6b7280]">
              <div>
                <span className="font-medium">ИНН</span> 7714426252
              </div>
              <div>
                <span className="font-medium">КПП</span> 771401001
              </div>
            </div>
            <p className="mt-1 text-[13px] leading-[18px] text-[#6b7280]">
              <span className="font-medium">Юридический адрес</span> 125252, г.
              Москва, проезд Берёзовой рощи, дом 12, этаж 2, комната 55
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-6">
          <div className="flex items-center gap-6">
            <svg width="120" height="36" viewBox="0 0 148 44" fill="none">
              <path d="M32.497 0H11.503C5.15 0 0 5.147 0 11.497v21.006C0 38.853 5.15 44 11.503 44h20.994C38.85 44 44 38.853 44 32.503V11.497C44 5.147 38.85 0 32.497 0Z" fill="#F11F24"/>
              <path d="M17.522 4.796 4.796 17.522a6.25 6.25 0 0 0 0 8.858l12.726 12.725a6.25 6.25 0 0 0 8.858 0l12.726-12.725a6.25 6.25 0 0 0 0-8.858L26.38 4.796a6.25 6.25 0 0 0-8.858 0Z" fill="#78FFC7"/>
              <path d="M21.879 32.758a10.879 10.879 0 1 0 0-21.758 10.879 10.879 0 0 0 0 21.758Z" fill="#7D4CCF"/>
              <path d="M68.712 21.423l6.081 8.156h-3.786l-5.279-7.122h-4.016v7.122h-3.328V13.496h3.328v7.237h3.787l5.278-7.237h3.672l-5.737 7.927Zm10.106 4.365c0 1.455.88 2.183 2.64 2.183h3.212v-4.365h-3.213c-1.759 0-2.639.727-2.639 2.182Zm5.852-3.791c0-1.103-.29-1.915-.872-2.435-.566-.521-1.308-.781-2.226-.781-.688 0-1.362.107-2.02.322-.657.199-1.246.475-1.766.827l-.804-1.378c.337-.23.704-.43 1.102-.598.413-.168.834-.306 1.262-.414.429-.122.849-.214 1.263-.275.428-.061.826-.092 1.193-.092.98 0 1.844.115 2.594.345.75.23 1.385.559 1.905.988.52.429.91.942 1.17 1.54.276.581.414 1.232.414 1.952v7.582h-6.426c-2.08 0-3.618-.314-4.613-.942-.979-.628-1.469-1.578-1.469-2.849s.49-2.221 1.47-2.849c.994-.628 2.532-.942 4.612-.942h3.213Zm12.496-5.744c-1.438 0-2.524-.33-3.259-.988-.734-.674-1.1-1.532-1.1-2.573h2.638c0 .582.169 1.057.505 1.425.352.352.758.528 1.217.528.459 0 .857-.176 1.193-.528.352-.368.528-.843.528-1.425h2.639c0 1.042-.367 1.9-1.101 2.573-.735.66-1.821.988-3.26.988Zm6.656 1.379V29.58h-3.213v-8.96h-.23l-5.278 8.96h-4.131V17.632h3.213v8.96h.23l5.278-8.96h4.131Zm14.692 1.608h-4.819v10.34h-3.213V19.24h-4.82v-1.608h12.852v1.608Zm8.028 9.19c.75 0 1.447-.13 2.089-.39.658-.261 1.3-.629 1.928-1.104l.917 1.379c-.29.26-.635.497-1.033.712a6.46 6.46 0 0 1-1.262.551 8.29 8.29 0 0 1-1.4.322c-.49.092-.98.138-1.469.138-1.086 0-2.08-.146-2.984-.437-.887-.276-1.644-.682-2.272-1.218-.627-.551-1.117-1.225-1.469-2.022-.336-.796-.504-1.715-.504-2.757 0-1.026.16-1.937.482-2.734.336-.812.795-1.486 1.377-2.022.596-.551 1.3-.965 2.111-1.24.811-.292 1.706-.437 2.685-.437.918 0 1.782.138 2.593.414a5.51 5.51 0 0 1 2.111 1.218 5.43 5.43 0 0 1 1.423 1.907c.352.75.528 1.6.528 2.55v1.608h-9.799c.184 1.272.62 2.183 1.308 2.734.705.552 1.585.827 2.64.827Zm-.804-9.764c-.443 0-.856.084-1.239.253-.382.168-.718.436-1.01.804-.275.368-.504.842-.688 1.424-.168.582-.26 1.287-.275 2.114h6.426c0-.796-.092-1.486-.276-2.067-.183-.583-.428-1.057-.734-1.425-.29-.383-.635-.659-1.032-.827-.383-.184-.774-.276-1.172-.276Zm21.915-1.034V29.58h-3.213v-5.284h-6.196v5.284h-3.213V17.632h3.213v5.054h6.196v-5.054h3.213Z" fill="black"/>
            </svg>
            <span className="text-[14px] text-[#6b7280]">
              +7 (499) 490-64-99
            </span>
            <span className="text-[14px] text-[#6b7280]">
              sales@kaiten.ru
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px] text-[#6b7280]">
            <a href="#" className="hover:text-[#7d4ccf]">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[#7d4ccf]">Пользовательское соглашение</a>
            <a href="#" className="hover:text-[#7d4ccf]">Техническая поддержка</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
