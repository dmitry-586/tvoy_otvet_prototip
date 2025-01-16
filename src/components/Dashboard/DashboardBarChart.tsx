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

function DashboardBarChart({ title }: GridItemProps) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-6 bg-white rounded-[20px] mt-2 h-[322px] w-full">
      <div className="w-full select-wrapper flex items-center justify-between border-b border-[#F5F6F7] py-4">
        <h3 className="text-sm">{title}</h3>
        <select
          name="date"
          id={title}
          className="bg-[#F5F6F7] w-[114px] h-[32px] rounded pl-[10px] text-[#4A5154] text-sm"
        >
          <option value="day">За день</option>
          <option value="week">За неделю</option>
          <option value="month">За месяц</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={359}
          height={272}
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
            dataKey="money"
            fill="#0088FE"
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
          <Bar
            stackId="a"
            dataKey="money2"
            fill="#00C49F"
            stroke="#F0F6FF"
            strokeWidth={0}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardBarChart;
