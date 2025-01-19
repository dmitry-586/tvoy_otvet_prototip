"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { salesData } from "../../../public/data";
import { CustomTooltip } from "@/utils/utils";
import { GridItemProps } from "@/interfaces/interfaces";

function DashboardBarChart({ title, dataKey, className }: GridItemProps) {
  return (
    <div
      className={`flex flex-col gap-6 items-center max-w-[532px] justify-center shadow-custom p-6 bg-white rounded-[20px] min-w-[455px] h-[322px] w-full ${className}`}
    >
      <div className="w-full select-wrapper flex items-center justify-between border-b border-[#F5F6F7] pb-4">
        <h3>{title}</h3>
      </div>
      <ResponsiveContainer width="100%" height={209}>
        <BarChart
          width={484}
          height={209}
          data={salesData}
          barSize={10}
          margin={{
            top: 5,
            right: 10,
            left: -25,
            bottom: 5,
          }}
        >
          <YAxis axisLine={false} tickLine={false} fontSize={9} />
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10 }}
            axisLine={false}
            tickLine={false}
            fontSize={9}
            angle={-40}
            textAnchor="end"
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            stackId="a"
            dataKey={dataKey}
            fill="#AC23D1"
            background={{
              fill: "#F0F6FF",
              radius: 20,
              width: 10,
              stroke: "#F0F6FF",
              strokeWidth: 0,
            }}
            stroke="#F0F6FF"
            strokeWidth={0}
            radius={[0, 0, 20, 20]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardBarChart;
