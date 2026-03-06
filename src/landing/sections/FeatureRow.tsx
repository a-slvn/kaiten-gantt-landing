import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface FeatureItem {
  icon: ReactNode;
  text: string;
  description?: string;
}

interface FeatureRowProps {
  title?: string;
  items: FeatureItem[];
  image: string;
  bgColor?: 'white' | 'gray';
  className?: string;
}

export default function FeatureRow({
  title,
  items,
  image,
  bgColor = 'white',
  className,
}: FeatureRowProps) {
  return (
    <section
      className={cn(
        'px-28 py-24',
        bgColor === 'gray' ? 'bg-[#f3f4f6]' : 'bg-white',
        className,
      )}
    >
      <div className="mx-auto flex max-w-[1216px] items-start gap-8">
        {/* Left: text content */}
        <div className="flex flex-1 flex-col justify-center gap-12">
          {title && (
            <h3 className="text-[30px] leading-[36px] font-semibold text-[#1f2937]">
              {title}
            </h3>
          )}

          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#efe9f9] p-[7px]">
                {item.icon}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[20px] leading-[28px] font-medium tracking-[-0.2px] text-[#1f2937]">
                  {item.text}
                </p>
                {item.description && (
                  <p className="text-[16px] leading-[24px] tracking-[-0.2px] text-[#6b7280]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right: screenshot */}
        <div className="w-[800px] shrink-0">
          <img
            src={image}
            alt={title || 'Feature screenshot'}
            className="w-full rounded shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]"
          />
        </div>
      </div>
    </section>
  );
}
