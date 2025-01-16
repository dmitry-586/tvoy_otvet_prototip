"use client";

import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import Image from "next/image";
import { salesData } from "../../../../public/data";
import { SumMoney, ChangeMoney, CustomTooltip } from "../../../utils/utils";
import { GridItemProps } from "@/interfaces/interfaces";

type MoneyKey = "money" | "money2";

export default function AreaDiagram({ title, dataKey }: GridItemProps) {
  return (
    <div className="flex-1 flex flex-col p-5 bg-white rounded-[20px] min-w-[150px] min-h-[155px] h-[155px] relative shadow-custom">
      <h3 className="text-sm text-[#000000B2]">{title}</h3>
      <p className="mt-3 font-bold text-2xl">
        {SumMoney({ moneyKey: dataKey as MoneyKey })}
      </p>
      <div className="absolute right-[10px] bottom-12 flex items-center">
        {Number(ChangeMoney({ moneyKey: dataKey as MoneyKey })) > 0 ? (
          <>
            <Image src="/dashboard/up.svg" alt="arrow" width={12} height={12} />
          </>
        ) : (
          <>
            <Image
              src="/dashboard/down.svg"
              alt="arrow"
              width={12}
              height={12}
            />
          </>
        )}
        <p className="text-xs text-[#9D9D9D] ml-[2px]">
          {ChangeMoney({ moneyKey: dataKey as MoneyKey })}%
        </p>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        style={{ marginTop: "20px" }}
      >
        <AreaChart width={170} height={155} data={salesData}>
          <Tooltip content={<CustomTooltip />} />
          <Area
            dataKey={dataKey}
            fill="none"
            type={"monotone"}
            stroke={`${
              Number(ChangeMoney({ moneyKey: dataKey as MoneyKey })) > 0
                ? "#44AE5C"
                : "#E84646"
            }`}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}