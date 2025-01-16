import React from 'react';
import Image from 'next/image';

interface FilterBadgeProps {
  label: string;
  value: string;
  onClear: () => void;
}

const FilterBadge: React.FC<FilterBadgeProps> = ({ label, value, onClear }) => {
  if (value === "Все" || value === "") {
    return null;
  }

  return (
    <div className="h-8 border rounded-[20px] flex items-center text-[#666687] text-xs gap-2 pr-2 pl-3 mt-[5px]">
      <p>{label}: {value}</p>
      <button onClick={onClear}>
        <Image
          src="/feedback/closeFilter.svg"
          alt="close"
          width={18}
          height={18}
        />
      </button>
    </div>
  );
};

export default FilterBadge;