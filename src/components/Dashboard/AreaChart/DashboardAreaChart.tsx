"use client";

import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import Image from "next/image";
import { salesData } from "../../../../public/data";
import { SumMoney, ChangeMoney, CustomTooltip } from "../../../utils/utils";

function DashboardAreaChart({ title }: { title: string }) {
  return (
    <div className="flex flex-col p-5 bg-white rounded-[20px] h-[155px] w-[170px] relative">
      <h3 className="text-sm text-[#000000B2]">{title}</h3>
      <p className="mt-3 font-bold text-2xl">{SumMoney()}</p>
      <div className="absolute right-[10px] bottom-12 flex items-center">
        {Number(ChangeMoney()) > 0 ? (
          <Image
            src="/navMenu/arrowTop.svg"
            alt="arrow"
            width={12}
            height={12}
          />
        ) : (
          <Image
            src="/navMenu/arrowTop.svg"
            alt="arrow"
            width={12}
            height={12}
            style={{ transform: "rotate(180deg)" }}
          />
        )}

        <p className="text-xs text-[#9D9D9D]">% {ChangeMoney()}</p>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        style={{ marginTop: "20px" }}
      >
        <AreaChart width={170} height={155} data={salesData}>
          <Tooltip content={<CustomTooltip />} />
          <Area
            dataKey="money2"
            fill="none"
            type={"monotone"}
            stroke="#9D9D9D"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardAreaChart;
