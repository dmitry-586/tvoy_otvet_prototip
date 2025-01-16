import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import React from "react";
import { LegendItem } from "./LegendItem";
import { PieChartItemProps } from "@/interfaces/interfaces";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PieChartItem({ title, data }: PieChartItemProps) {
  return (
    <div className="w-[591px] h-[322px] bg-white rounded-[20px] p-5">
      <div className="select-wrapper flex items-center justify-between border-b border-[#F5F6F7] py-4">
        <h3>{title} отзывов</h3>
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
      <div className="flex mt-5 gap-10 items-center">
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
        <div className="flex-1">
          <LegendItem title={title} data={data} colors={COLORS} />
        </div>
      </div>
    </div>
  );
}
