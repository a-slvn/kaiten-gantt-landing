import examplesImage from '../assets/images/examples-tab.png';

export default function CtaSection() {
  return (
    <section className="bg-white px-28 py-20">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="relative flex items-center overflow-hidden rounded-3xl bg-[#f3f4f6]">
          {/* Left: text */}
          <div className="relative z-10 flex flex-col gap-8 py-16 pl-16 pr-8">
            <h2 className="text-[40px] leading-[44px] font-semibold text-[#1f2937]">
              Планируйте проекты
              <br />
              на Диаграмме Ганта{' '}
              <span className="text-[#7d4ccf]">бесплатно</span>
            </h2>
            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#7d4ccf] px-8 py-4 text-[16px] leading-[24px] font-medium text-white hover:bg-[#6a3db5] transition-colors"
            >
              Попробовать Kaiten
            </a>
          </div>

          {/* Right: screenshot */}
          <div className="relative -mr-4 flex-1">
            <img
              src={examplesImage}
              alt="Диаграмма Ганта"
              className="w-full rounded-xl shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
