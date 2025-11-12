import { cn } from '@/lib/utils';

const DemoCard = ({ title, description, children, className }: any) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white p-6 shadow-sm',
        className,
      )}
    >
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      {description && (
        <p className="mb-4 text-sm text-gray-600">{description}</p>
      )}
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
};

export default DemoCard;
