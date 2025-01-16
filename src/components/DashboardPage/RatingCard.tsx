import { InfoCardProps } from "@/interfaces/interfaces";
import Image from "next/image";

const RatingCard: React.FC<InfoCardProps> = ({ title, value }) => (
  <div className="flex flex-col max-[500px]:items-center">
    <p className="text-[14px] text-[#000000B2]">{title}</p>
    <div className="flex items-center gap-1">
      <p className="font-bold text-2xl">{value}</p>
      <Image
        src="/feedback/star.svg"
        alt="filled star"
        width={18}
        height={18}
        className="mb-0.5"
      />
    </div>
  </div>
);

export default RatingCard;
