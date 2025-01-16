"use client";

import Dashboard from "@/components/DashboardPage/Dashboard";
import { ConfigProvider, DatePicker } from "antd";
import locale from "antd/locale/ru_RU";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const { RangePicker } = DatePicker;

  return (
    <section className="flex flex-col w-full h-full px-8 py-6 max-[1000px]:px-6 max-[1000px]:py-4 max-[730px]:w-auto max-[500px]:w-full max-[500px]:max-w-[390px]">
      <div className="flex flex-col gap-1 max-w-[270px]">
        <div className="flex gap-1">
          <Image
            src="/dashboard/Date_range_fill.svg"
            alt="date"
            width={16}
            height={16}
          />
          <p>Дата</p>
        </div>
        <ConfigProvider
          locale={locale}
          theme={{
            token: {
              borderRadius: 20,
            },
            components: {
              DatePicker: {
                activeBorderColor: "#7C3FF9",
                hoverBorderColor: "#7C3FF9",
                colorPrimary: "#7C3FF9",
                activeShadow: "transparent",
              },
            },
          }}
        >
          <RangePicker
            open={open}
            onOpenChange={handleOpenChange}
            suffixIcon={false}
            className="px-4"
            style={{ height: "40px" }}
            placeholder={["ДД.ММ.ГГГГ", "ДД.ММ.ГГГГ"]}
            format="DD.MM.YYYY"
          />
        </ConfigProvider>
      </div>
      <Dashboard />
    </section>
  );
}
