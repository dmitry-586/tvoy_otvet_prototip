import { LegendProps } from "@/interfaces/interfaces";

export const LegendItem: React.FC<LegendProps> = ({ data, colors }) => {
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  return (
    <div className="flex flex-col justify-between w-auto">
      <div className="grid grid-cols-[1.3fr,1.1fr,0.8fr] bg-[#F5F6F7] py-2 px-4 text-[#4A5154] text-sm">
        <p>Название</p>
        <p className="flex justify-center">Значение</p>
        <p className="flex justify-center">Процент</p>
      </div>
      <div className="grid grid-cols-[1.3fr,1.1fr,0.8fr] px-4">
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
              <p className="text-sm max-[500px]:text-xs">{item.ton}</p>
            </div>
          ))}
        </div>
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex mt-4 justify-center">
              <p className="text-[#4A5154] text-sm max-[500px]:text-xs">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex mt-4 justify-center">
              <p className="text-[#4A5154] text-sm max-[500px]:text-xs">
                {((item.value / totalValue) * 100).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
