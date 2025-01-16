"use client";

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { salesData } from "../../../public/data";
import { GridItemProps } from "@/interfaces/interfaces";
import { CustomTooltip } from "@/utils/utils";

function GridItem({ title, children }: GridItemProps) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-6 bg-white rounded-[20px] h-[272px] w-[359px]">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      {children}
    </div>
  );
}

const AreaChartComponent = () => {
  const ChangeMoney = () => {
    if (salesData.length === 0) return 0;
    const initialValue = salesData[0].money;
    const currentValue = salesData[salesData.length - 1].money;
    const change = ((currentValue - initialValue) / initialValue) * 100;
    return change.toFixed(2);
  };
  return (
    <GridItem title="Area">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={359} height={272} data={salesData}>
          <XAxis
            dataKey="name"
            scale="point"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "rgba(0, 0, 0, 0)",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="-20%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#838383" />
              <stop offset="80%" stopColor="rgba(255, 255, 255, 0.0001)" />
            </linearGradient>
          </defs>
          <Area
            dataKey="money"
            fill="none"
            type={"monotone"}
            stroke="#9D9D9D"
            strokeWidth={2}
          />
          <Area
            dataKey="money"
            fill="url(#gradient)"
            type={"monotone"}
            stroke="#9D9D9D"
            strokeWidth={0}
            transform={`translate(0, 5)`}
          />
          <g transform="translate(130, 130)">
            <text
              dy={15}
              fill="black"
              fontWeight="bold"
              className="text-[48px]"
            >
              {ChangeMoney()}
            </text>
            <image
              x={125}
              y={-25}
              href="/arrow-up-right.svg"
              width={48}
              height={48}
            />
          </g>
        </AreaChart>
      </ResponsiveContainer>
    </GridItem>
  );
};

export default AreaChartComponent;
