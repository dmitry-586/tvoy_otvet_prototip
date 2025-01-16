import { SwitchProps } from "@/interfaces/interfaces";
import styles from "../../styles/Dashboard/Dashboard.module.scss";
import InfoCard from "./InfoCard";
import { Switch } from "./SwitchDash";
import AreaDiagram from "../graphs/AreaChart/AreaDiagram";
import RatingCard from "./RatingCard";
import PieChartItem from "../graphs/PieChart/PieChart";
import { data } from "../../../public/data";

export const MoreInfoSection: React.FC<SwitchProps> = ({
  isDistribution,
  setIsDistribution,
}) => (
  <div className={styles.chartSectionWrapper}>
    <div className="flex flex-1 max-[1020px]:max-w-[312px] flex-col gap-3 max-[590px]:max-w-[590px] max-[590px]:flex-row max-[500px]:flex-col">
      <div className="hidden flex-1 flex-col gap-3 max-[1020px]:flex max-[730px]:hidden max-[590px]:flex max-[590px]:min-w-[270px]">
        <div
          className={`${styles.valueWrapper} ${styles.chartSectionAverageWrapper}`}
        >
          <InfoCard title="Среднее время ответа" value="52 сек" />
          <div className="flex flex-col">
            <p className="text-sm text-[#000000B2]">Уровень автоматизации</p>
            <p className="font-bold text-2xl">88%</p>
          </div>
        </div>
        <div className="hidden flex-1 flex-col gap-6 bg-white items-center justify-center p-5 rounded-[20px] max-w-[330px] h-[155px] max-[590px]:flex max-[500px]:hidden">
          <p>Переключить график</p>
          <Switch
            isDistribution={isDistribution}
            setIsDistribution={setIsDistribution}
          />
        </div>
      </div>
      <div className="flex gap-3 max-[590px]:flex-col max-[590px]:flex-1 max-[590px]:max-w-[200px] max-[500px]:flex-row max-[500px]:max-w-[342px]">
        <AreaDiagram title="Положительных" dataKey="money" />
        <AreaDiagram title="Отрицательных" dataKey="money2" />
      </div>
    </div>
    <div
      className={`${styles.valueWrapper} ${styles.chartSectionRatingWrapper}`}
    >
      <RatingCard title="Общий рейтинг" value="4.6" />
      <RatingCard title="Рейтинг клиентов" value="4.8" />
    </div>
    <PieChartItem
      title={
        isDistribution ? "Распределение обращений" : "Распределение рейтинга"
      }
      data={data}
      className="flex-col max-[1020px]:flex-row max-[1020px]:gap-3 max-[560px]:flex-col max-[560px]:gap-6"
      wrapperStyles={styles.pieChartItemWrapperStyles}
    />
  </div>
);
