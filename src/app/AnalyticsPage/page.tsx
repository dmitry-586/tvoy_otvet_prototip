"use client";

import React from "react";
import Image from "next/image";
import { ConfigProvider, DatePicker } from "antd";
import locale from "antd/locale/ru_RU";
import PieChartItem from "@/components/graphs/PieChart/PieChart";
import DashboardBarChart from "@/components/DashboardPage/DashboardBarChart";
import InfoCard from "@/components/DashboardPage/InfoCard";
import RatingCard from "@/components/DashboardPage/RatingCard";
import { data } from "../../../public/data";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
  Font,
} from "@react-pdf/renderer";
import SecondAreaDiagram from "@/components/graphs/AreaChart/SecondAreaDiagram";

Font.register({
  family: "OpenSans_Condensed",
  src: "/OpenSans_Condensed-Regular.ttf",
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    fontFamily: "OpenSans_Condensed",
  },
  section: {
    flexGrow: 1,
  },
});
const MyDocument = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Привет, мир!</Text>
      </View>
    </Page>
  </Document>
);

const { RangePicker } = DatePicker;

const Analytics = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const renderInfoCard = (title: string, value: string) => (
    <InfoCard title={title} value={value} />
  );

  const handleDownload = async () => {
    const blob = await pdf(MyDocument).toBlob(); // Генерируем blob PDF
    const url = URL.createObjectURL(blob); // Создаем URL для blob

    const link = document.createElement("a"); // Создаем элемент ссылки
    link.href = url; // Устанавливаем href на blob URL
    link.download = "report.pdf"; // Устанавливаем желаемое имя файла
    document.body.appendChild(link); // Добавляем ссылку в документ
    link.click(); // Программно кликаем по ссылке, чтобы инициировать скачивание
    document.body.removeChild(link); // Удаляем ссылку из документа
  };

  return (
    <section className="p-10 bg-[#f2f4f6]">
      <div className="flex flex-col gap-1">
        <h2 className="text-[22px] font-semibold mb-5">Аналитика</h2>
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
            token: { borderRadius: 20 },
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
          <div className="flex gap-5">
            <RangePicker
              open={open}
              onOpenChange={handleOpenChange}
              suffixIcon={false}
              className="px-4"
              style={{ height: "40px" }}
              placeholder={["ДД.ММ.ГГГГ", "ДД.ММ.ГГГГ"]}
              format="DD.MM.YYYY"
            />
            <button
              onClick={handleDownload}
              className="flex gap-2 px-4 h-10 border rounded-[20px] justify-center items-center text-sm bg-[#915DFA] text-white"
            >
              <Image src="/download.svg" alt="upload" width={20} height={20} />
              Загрузить отчет
            </button>
          </div>
        </ConfigProvider>
      </div>
      <div className="flex gap-3 py-4">
        <div className="inline-flex flex-col gap-3 max-w-[650px]">
          <div className="flex flex-col gap-5 p-5 bg-white rounded-[20px] max-w-[700px]">
            <h3 className="text-[#212134] text-lg border-b border-[#F5F6F7] pb-4">
              Основные показатели
            </h3>
            <div className="flex justify-between gap-10">
              {[
                { label: "Общее количество обращений", value: "123456" },
                { label: "Новых обращений", value: "41%", isCenter: true },
                { label: "Повторных обращений", value: "68%", isCenter: true },
              ].map(({ label, value, isCenter }) => (
                <div className="flex flex-col gap-[10px]" key={label}>
                  <p className="text-[#838383] text-sm">{label}</p>
                  <p
                    className={`text-[#181826] text-2xl font-bold ${
                      isCenter ? "text-center" : ""
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <PieChartItem title="Распределение обращений" data={data} />
          <DashboardBarChart
            title="Динамика обращений во времени"
            dataKey="money"
            className="h-full max-w-none"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 max-w-[650px]">
          <SecondAreaDiagram
            title="Пик активности клиентов"
            dataKey="value"
          />
          <div className="flex flex-col gap-5 p-5 bg-white rounded-[20px] max-w-[700px]">
            <h3 className="text-[#212134] text-lg border-b border-[#F5F6F F7] pb-4">
              Дополнительные средние показатели
            </h3>
            <div className="flex justify-around gap-10">
              {[
                { label: "Время первого ответа", value: "34 сек" },
                {
                  label: "Время разрешения обращения",
                  value: "57 сек",
                },
              ].map(({ label, value }) => (
                <div className="flex flex-col gap-[10px]" key={label}>
                  <p className="text-[#838383] text-sm">{label}</p>
                  <p className="text-[#181826] text-2xl font-bold text-center">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col justify-between p-5 bg-white rounded-[20px] gap-5">
                {renderInfoCard("Обращений, обработанных ИИ", "968715")}
                {renderInfoCard("Процент от общего числа", "81%")}
              </div>
              <div className="flex flex-col p-5 bg-white rounded-[20px] gap-5 max-w-[330px]">
                {renderInfoCard("Среднее время ответа ИИ", "62 сек")}
                {renderInfoCard("Среднее время ответа оператора", "25 сек")}
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 bg-white rounded-[20px]">
              {renderInfoCard("Обращений, переданных операторам", "12632")}
              {renderInfoCard(
                "Среднее время полного разрешения обращения",
                "91 сек"
              )}
              {renderInfoCard("Решено без участия оператора", "82%")}
              <RatingCard title="Оценка работы ИИ" value="4.8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
