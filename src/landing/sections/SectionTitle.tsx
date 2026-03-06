import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <h2 className="text-[48px] leading-[52px] font-semibold text-[#1f2937] tracking-0">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[16px] leading-[24px] text-[#374151] tracking-[-0.2px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
