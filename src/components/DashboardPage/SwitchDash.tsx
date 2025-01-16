import { SwitchProps } from "@/interfaces/interfaces";

export const Switch: React.FC<SwitchProps> = ({
  isDistribution,
  setIsDistribution,
}) => (
  <div className="flex relative w-[260px] h-[40px] bg-[#C0C0CF] rounded-full shadow-custom max-[590px]:w-[250px]">
    <div
      className={`absolute w-[130px] max-[590px]:w-[125px] h-[40px] bg-[#915DFA] rounded-full transition-transform duration-300 ${
        isDistribution
          ? "transform translate-x-0"
          : "transform translate-x-[130px] max-[590px]:translate-x-[125px]"
      }`}
    />
    <button
      onClick={() => setIsDistribution(true)}
      className="flex-1 h-full rounded-full text-sm text-white relative z-10"
    >
      Обращения
    </button>
    <button
      onClick={() => setIsDistribution(false)}
      className="flex-1 h-full rounded-full text-sm text-white relative z-10 right-0"
    >
      Рейтинг
    </button>
  </div>
);
