"use client";

import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { salesData } from "../../../public/data";
import { CustomTooltip } from "@/utils/utils";
import { GridItemProps } from "@/interfaces/interfaces";

function GridItem({ title, children }: GridItemProps) {
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-6 bg-white rounded-[20px] h-[272px] w-[359px]">
      <h3 className="text-2xl font-semibold text-black">{title}</h3>
      {children}
    </div>
  );
}

const BarChartComponent = () => {
  return (
    <GridItem title="Bar">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={359}
          height={272}
          data={salesData}
          barSize={10}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 20 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="money"
            fill="#9D9D9D"
            background={{
              fill: "#F0F6FF",
              radius: 20,
              width: 10,
              stroke: "#F0F6FF",
              strokeWidth: 5,
            }}
            stroke="#F0F6FF"
            strokeWidth={5}
            radius={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </GridItem>
  );
};

export default BarChartComponent;
