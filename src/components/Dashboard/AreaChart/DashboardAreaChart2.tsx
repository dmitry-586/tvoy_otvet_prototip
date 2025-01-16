"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { salesData } from "../../../../public/data";
import { GridItemProps } from "@/interfaces/interfaces";
import { ChangeMoney, CustomTooltip } from "@/utils/utils";

function DashboardAreaChart2({ title }: GridItemProps) {
  return (
    <div className="flex flex-col gap-2 p-5 bg-white rounded-[20px] h-[155px] w-[261px] relative">
      <h3 className="text-sm text-[#000000B2]">{title}</h3>
      <ResponsiveContainer width="100%" height={48}>
        <AreaChart width={261} height={155} data={salesData}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="-20%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(131,131,131)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0001)" />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} />
          <Area
            dataKey="money2"
            fill="url(#gradient)"
            type={"monotone"}
            stroke="white"
            strokeWidth={8}
            strokeLinecap="round"
            filter="url(#shadow)"
          />
          <Area
            dataKey="money2"
            fill="none"
            type={"monotone"}
            stroke="#9D9D9D"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-5xl font-bold absolute right-5 bottom-5">
        {ChangeMoney()}
      </p>
    </div>
  );
}

export default DashboardAreaChart2;
