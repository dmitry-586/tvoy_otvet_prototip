import { InfoCardProps } from "@/interfaces/interfaces";

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => (
  <div className="flex flex-col">
    <p className="text-sm text-[#000000B2]">{title}</p>
    <p className="font-bold text-2xl">{value}</p>
  </div>
);

export default InfoCard;
