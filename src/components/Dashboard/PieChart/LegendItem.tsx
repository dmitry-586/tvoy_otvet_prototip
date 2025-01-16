import { LegendProps } from "@/interfaces/interfaces";

export const LegendItem: React.FC<LegendProps> = ({ data, colors, title }) => {
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="grid grid-cols-[3fr,2fr,2fr] bg-[#F5F6F7] py-2 px-4 text-[#4A5154]">
        <p>{title}</p>
        <p>Процент</p>
        <p>Количество</p>
      </div>
      <div className="grid grid-cols-[3fr,2fr,2fr] px-4">
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex mt-4 items-center">
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: colors[index % colors.length],
                  display: "inline-block",
                  marginRight: "5px",
                }}
              />
              <p className="text-sm">{item.ton}</p>
            </div>
          ))}
        </div>
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex mt-4">
              <p className="text-[#4A5154] text-sm">
                {((item.value / totalValue) * 100).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex mt-4">
              <p className="text-[#4A5154] text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
