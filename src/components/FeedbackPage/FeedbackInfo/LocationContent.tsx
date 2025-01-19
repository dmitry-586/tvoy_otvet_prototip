import { useState, ReactNode } from "react";
import Image from "next/image";
import styles from "../../../styles/Feedback/Feedback.module.scss";

interface InfoBlockProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  children,
  className,
}) => (
  <div
    className={`w-full h-auto bg-white rounded-[20px] flex flex-col gap-[10px] p-5 ${className}`}
  >
    <h4 className="text-[#7C3FF9] text-base">{title}</h4>
    {children}
  </div>
);

const LocationContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full h-full flex flex-col gap-[10px] px-5">
      <InfoBlock title="Информация">
        <div className={`${isExpanded ? "h-auto" : "h-12 overflow-hidden"}`}>
          <p
            className={`text-[#666687] ${
              isExpanded ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur. Dictumst proin quam mi
            ullamcorper turpis. Nunc dictumst blandit quam viverra neque
            porttitor congue. Tortor nisl egestas rhoncus dapibus sit fermentum
            volutpat curabitur. Aliquam lacus morbi tincidunt porttitor
            vestibulum rutrum auctor. Lorem ipsum dolor sit amet consectetur.
            Dictumst proin quam mi ullamcorper turpis. Nunc dictumst blandit
            quam viverra neque porttitor congue. Tortор nisl egestas rhoncus
            dapibus sit fermentum volutpat curabitur. Aliquam lacus morbi
            tincidunt porttitor vestibulum rutrum auctor. Lorem ipsum dolor sit
            amet consectetur. Dictumst proin quam mi ullamcorper turpis. Nunc
            dictumst blandit quam viverra neque porttitor congue. Tortор nisl
            egestas rhoncus dapibus sit fermentum volutpat curabitur. Aliquam
            lacus morbi tincidunt porttitor vestibulum rutrum auctor.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <button className="text-[#7C3FF9]" onClick={toggleExpand}>
            {isExpanded ? "свернуть" : "еще"}
          </button>
        </div>
      </InfoBlock>

      <InfoBlock title="Адрес">
        <p className="text-[#666687]">
          Большая Покровская ул., 58, Нижний Новгород
        </p>
        <button className="text-[#7C3FF9] flex gap-[6px] items-center">
          <Image
            src="/feedback/forLink.svg"
            alt="forLink"
            width={12}
            height={12}
          />
          <p>Карта</p>
        </button>
      </InfoBlock>

      <div className="flex gap-3 max-[900px]:flex-wrap max-[750px]:flex-nowrap max-[610px]:flex-wrap">
        <InfoBlock
          title="График работы"
          className={styles.commonInfoBlockClass}
        >
          <p className="leading-tight text-[#666687]">
            пн-пт 08:00–20:00; <br /> сб,вс 10:00–20:00
          </p>
        </InfoBlock>
        <InfoBlock title="Телефон" className={styles.commonInfoBlockClass}>
          <p className="leading-tight text-[#666687]">
            +7 (831) 266-75-07 <br /> +7 (831) 266-66-10
          </p>
        </InfoBlock>
        <InfoBlock title="Сайт" className={styles.commonInfoBlockClass}>
          <p className="text-[#666687]">helper-remont.ru</p>
        </InfoBlock>
      </div>
    </div>
  );
};

export default LocationContent;
