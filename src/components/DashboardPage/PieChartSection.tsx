import { SwitchProps } from "@/interfaces/interfaces";
import PieChartItem from "../graphs/PieChart/PieChart";
import { Switch } from "./SwitchDash";
import { data } from "../../../public/data";

export const PieChartSection: React.FC<SwitchProps> = ({
  isDistribution,
  setIsDistribution,
}) => (
  <div className="flex-1 flex flex-col gap-3 max-[1020px]:hidden max-[880px]:flex max-[590px]:hidden">
    <div className="hidden flex-1 min-[1401px]:flex flex-col gap-3 max-[730px]:flex">
      <PieChartItem title="Распределение обращений" data={data} />
      <PieChartItem title="Распределение рейтинга" data={data} />
    </div>
    <div className="hidden flex-1 max-w-[450px] rounded-[20px] flex-col h-full shadow-custom max-[1400px]:flex max-[730px]:hidden">
      <div className="flex flex-col gap-6 bg-white items-center justify-center p-5 rounded-t-[20px] max-w-[450px] h-[155px] max-[1020px]:hidden max-[880px]:flex max-[880px]:h-[135px] max-[730px]:h-[155px] max-[730px]:rounded-[20px] max-[730px]:min-w-[312px] max-[730px]:mr-auto max-[730px]:shadow-custom">
        <p>Переключить график</p>
        <Switch
          isDistribution={isDistribution}
          setIsDistribution={setIsDistribution}
        />
      </div>
      <PieChartItem
        title={
          isDistribution ? "Распределение обращений" : "Распределение рейтинга"
        }
        data={data}
        className="flex-col max-[730px]:flex-row max-[590px]:flex-col"
        wrapperStyles="rounded-t-[0] max-w-[450px] shadow-none max-[1440px]:flex-1 max-[1440px]:max-h-[600px] max-[1440px]:max-w-[450px] max-[880px]:pt-0 max-[730px]:max-w-[544px] max-[730px]:rounded-[20px] max-[730px]:p-5 max-[730px]:shadow-custom"
      />
    </div>
  </div>
);
