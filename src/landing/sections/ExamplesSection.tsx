import { useState } from 'react';
import examplesImage from '../assets/images/examples-tab.png';

const tabs = [
  'Управление проектами',
  'Разработка',
  'Маркетинг',
  'Строительство',
];

export default function ExamplesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white px-28 pb-24">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="overflow-hidden rounded-3xl bg-[#f3f4f6] p-4">
          <div className="flex flex-col items-center gap-10 px-11 py-8">
            {/* Title */}
            <h2 className="text-center text-[30px] leading-[36px] font-semibold text-[#1f2937]">
              Примеры Диаграммы Ганта для вашей сферы
            </h2>

            {/* Tabs */}
            <div className="flex items-center gap-1 rounded-lg bg-white p-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`rounded-md px-6 py-2.5 text-[14px] leading-[20px] font-medium tracking-[-0.2px] transition-colors ${
                    activeTab === i
                      ? 'bg-[#7d4ccf] text-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'
                      : 'text-[#1f2937] hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Screenshot */}
            <img
              src={examplesImage}
              alt="Пример диаграммы Ганта"
              className="w-[800px] rounded shadow-[0px_10px_13px_rgba(16,24,40,0.08),0px_4px_4px_rgba(16,24,40,0.03)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
