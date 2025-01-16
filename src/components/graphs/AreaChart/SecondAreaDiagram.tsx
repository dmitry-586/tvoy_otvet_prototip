"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { hours } from "../../../../public/data";
import { GridItemProps } from "@/interfaces/interfaces";
import { CustomTooltip } from "@/utils/utils";

export default function SecondAreaDiagram({ title, dataKey }: GridItemProps) {
  return (
    <div className="flex-col p-5 bg-white rounded-[20px] h-[323px] relative">
      <h3 className="text-sm text-[#000000B2] mb-5">{title}</h3>
      <ResponsiveContainer
        width="105%"
        height={250}
        style={{ left: -30, position: "relative" }}
      >
        <AreaChart width={0} height={0} data={hours}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="-20%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7C3FF9" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0001)" />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} />
          <Area
            dataKey={dataKey}
            fill="url(#gradient)"
            type={"monotone"}
            stroke="white"
            strokeWidth={8}
            strokeLinecap="round"
            filter="url(#shadow)"
          />
          <Area
            dataKey={dataKey}
            fill="none"
            type={"monotone"}
            stroke="#7C3FF9"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize={9}
            dataKey="value"
            padding={{ bottom: 10 }}
          />
          <XAxis
            dataKey="hour"
            scale="point"
            padding={{ left: 10 }}
            axisLine={false}
            tickLine={false}
            fontSize={9}
            angle={-40}
            textAnchor="end"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
