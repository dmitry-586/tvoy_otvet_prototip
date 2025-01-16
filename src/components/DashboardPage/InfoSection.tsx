import { SwitchProps } from "@/interfaces/interfaces";
import RatingCard from "./RatingCard";
import InfoCard from "./InfoCard";
import styles from "../../styles/Dashboard/Dashboard.module.scss";
import { Switch } from "./SwitchDash";

export const InfoSection: React.FC<SwitchProps> = ({
  isDistribution,
  setIsDistribution,
}) => (
  <div className={styles.infoSectionWrapper}>
    <div className={`${styles.valueWrapper} ${styles.quantityWrapper}`}>
      <InfoCard title="Общее количество обращений" value="968715" />
      <InfoCard title="Число обращений к операторам" value="1271" />
    </div>
    <div className={styles.switchGraph}>
      <p>Переключить график</p>
      <Switch
        isDistribution={isDistribution}
        setIsDistribution={setIsDistribution}
      />
    </div>
    <div
      className={`${styles.valueWrapper} ${styles.infoSectionAverageWrapper}`}
    >
      <InfoCard title="Среднее время ответа" value="52 сек" />
      <div className="flex flex-col">
        <p className="text-sm text-[#000000B2]">Уровень автоматизации</p>
        <p className="font-bold text-2xl">88%</p>
      </div>
    </div>
    <div
      className={`${styles.valueWrapper} ${styles.infoSectionRatingWrapper}`}
    >
      <RatingCard title="Общий рейтинг" value="4.6" />
      <RatingCard title="Рейтинг клиентов" value="4.8" />
    </div>
  </div>
);
