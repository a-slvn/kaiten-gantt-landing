import { useState } from 'react';

const faqs = [
  {
    question:
      'Можно ли использовать Kaiten для работы с документами бесплатно?',
    answer:
      'Да, в Kaiten есть бесплатный тариф с неограниченным количеством пользователей. По сроку он тоже не ограничен. На нем доступны основные функции таск-трекера, а также все функции для работы с документами.',
  },
  {
    question: 'Kaiten — это прямой аналог Google Docs',
    answer:
      'Kaiten — это не просто аналог Google Docs, а комплексное решение для управления проектами и задачами, которое включает в себя функционал для работы с документами.',
  },
  {
    question: 'Какие еще функции есть в Kaiten?',
    answer:
      'Kaiten предлагает доски Kanban, диаграммы Ганта, ресурсное планирование, таск-трекер, документы, отчеты и многое другое.',
  },
  {
    question: 'Какие еще тарифы можно попробовать?',
    answer:
      'Помимо бесплатного тарифа, Kaiten предлагает тарифы Standard, Professional и Enterprise с расширенным функционалом.',
  },
  {
    question: 'Как начать пользоваться Kaiten?',
    answer:
      'Зарегистрируйтесь на сайте Kaiten, создайте рабочее пространство и пригласите коллег. Базовый функционал доступен бесплатно.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f3f4f6] px-28 py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-8">
        <h2 className="text-[48px] leading-[52px] font-semibold text-[#1f2937]">
          Нас часто спрашивают
        </h2>

        <div className="flex w-full flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white px-8 py-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span
                  className={`text-[18px] leading-[28px] font-medium tracking-[-0.2px] ${
                    openIndex === i ? 'text-[#7d4ccf]' : 'text-[#1f2937]'
                  }`}
                >
                  {faq.question}
                </span>
                <span className="ml-4 shrink-0 text-[24px] leading-none text-[#6b7280]">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <p className="mt-4 text-[16px] leading-[24px] tracking-[-0.2px] text-[#6b7280]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
