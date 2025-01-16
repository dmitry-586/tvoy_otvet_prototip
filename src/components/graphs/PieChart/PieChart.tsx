import { Pie, ResponsiveContainer, Cell, PieChart } from "recharts";
import React from "react";
import { LegendItem } from "./LegendItem";
import { PieChartItemProps } from "@/interfaces/interfaces";

const COLORS = ["#5A3D82", "#F2B9FD", "#B251CC", "#3A008B"];

export default function PieChartItem({
  title,
  data,
  className,
  headerStyles,
  wrapperStyles,
}: PieChartItemProps) {
  return (
    <div
      className={`max-w-[650px] min-w-[350px] h-full max-h-[323px] bg-white shadow-custom rounded-[20px] p-5 ${wrapperStyles}`}
    >
      <div
        className={`select-wrapper flex items-center justify-between border-b border-[#F5F6F7] pb-4 ${headerStyles}`}
      >
        <h3>{title}</h3>
      </div>
      <div className={`flex mt-5 gap-10 items-center ${className}`}>
        <div style={{ width: "155px", height: "155px" }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={55}
                outerRadius={75}
                paddingAngle={5}
                dataKey="value"
                pointerEvents="none"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 w-full">
          <LegendItem data={data} colors={COLORS} />
        </div>
      </div>
    </div>
  );
}
