import React, { useState } from "react";
import DashboardBarChart from "./DashboardBarChart";
import styles from "../../styles/Dashboard/Dashboard.module.scss";
import { InfoSection } from "./InfoSection";
import { MoreInfoSection } from "./MoreInfoSection";
import { PieChartSection } from "./PieChartSection";

export default function Dashboard() {
  const [isDistribution, setIsDistribution] = useState<boolean>(true);

  return (
    <div className="mt-4 flex gap-3">
      <section className={styles.requestsNumberWrapper}>
        <div className="flex flex-col max-w-[532px] gap-3 max-[1020px]:max-w-none max-[500px]:min-w-[312px] max-[500px]:w-full">
          <InfoSection
            isDistribution={isDistribution}
            setIsDistribution={setIsDistribution}
          />
          <MoreInfoSection
            isDistribution={isDistribution}
            setIsDistribution={setIsDistribution}
          />
          <DashboardBarChart
            title="Динамика обращений во времени"
            dataKey="money"
            className="max-[1020px]:hidden"
          />
        </div>
        <PieChartSection
          isDistribution={isDistribution}
          setIsDistribution={setIsDistribution}
        />
        <DashboardBarChart
          title="Динамика обращений во времени"
          dataKey="money"
          className="hidden max-[1020px]:flex max-[730px]:max-w-[544px] max-[500px]:min-w-[312px] max-[500px]:max-w-[342px]"
        />
      </section>
    </div>
  );
}
