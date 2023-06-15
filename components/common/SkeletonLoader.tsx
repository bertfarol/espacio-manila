type Props = {
  className?: string;
  count: number;
};

export const SkeletonLoader = ({ className, count }: Props) => {
  const skeleton = Array(count).fill(null);
  return (
    <div className={`grid ${className}`}>
      {skeleton.map((_, index) => (
        <div key={index}>
          <div className="bg-[#f3f2f2] h-[200px] xl:h-[338px] w-full mb-3 animate-pulse"></div>
          <div className="bg-[#f3f2f2] w-28 h-[16px] mb-1 animate-pulse"></div>
          <span className="text-sm text-[#7d7d7d]">
            <div className="bg-[#f3f2f2] w-28 h-[10px] animate-pulse"></div>
          </span>
        </div>
      ))}
    </div>
  );
};


