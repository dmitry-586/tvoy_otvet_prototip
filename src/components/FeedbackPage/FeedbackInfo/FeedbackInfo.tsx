import { FeedbackChatProps } from "@/interfaces/interfaces";
import Image from "next/image";
import { useState } from "react";
import LocationContent from "./LocationContent";
import RatingContent from "./RatingContent";
import styles from "../../../styles/Feedback/Feedback.module.scss";

const FeedbackInfo: React.FC<FeedbackChatProps> = ({ handleClick }) => {
  const [activeTab, setActiveTab] = useState("Статистика");

  const renderContent = () => {
    switch (activeTab) {
      case "Описание":
        return <LocationContent />;
      case "Статистика":
      default:
        return <RatingContent />;
    }
  };
  return (
    <div className={styles.FeedbackInfoWrapper}>
      <div className="h-20 py-5 w-full bg-inherit border-b border-[#C0C0CF] flex items-center px-10 max-[950px]:px-5 max-[400px]:px-[10px]">
        <button
          onClick={handleClick}
          className="text-[14px] flex gap-2 items-center"
        >
          <Image
            src="/feedback/ArrowLeft.svg"
            alt="arrow"
            width={12}
            height={12}
          />
          Назад
        </button>
        <p className="ml-auto mr-[50%] translate-x-[50%]">Информация</p>
      </div>
      <div className="flex-1 flex flex-col items-center w-full py-5 bg-[#EAEAEF] overflow-auto max-w-[930px]">
        <div className="flex gap-5 w-full px-10 max-[950px]:px-5 max-[400px]:px-[10px]">
          <Image
            src="/feedback/image.png"
            alt="image"
            width={106}
            height={106}
            style={{ width: "106px", height: "106px" }}
          />
          <div className="flex flex-col gap-3">
            <p className="leading-none max-[500px]:text-sm">HELPER (Большая Покровская ул., 58, Нижний Новгород)</p>
            <button className="flex-1 w-[200px] bg-white rounded-[20px] flex items-center justify-center gap-2">
              <Image
                src="/feedback/forLink.svg"
                alt="forLink"
                width={22}
                height={22}
                style={{ width: "auto", height: "auto" }}
              />
              <p>Перейти</p>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col mt-[34px] px-10 max-[950px]:px-5 max-[400px]:px-[10px]">
          <div className="w-full bg-white rounded-t-[20px] h-[50px] flex justify-center gap-[74px]">
            <button
              onClick={() => setActiveTab("Описание")}
              className={
                activeTab === "Описание"
                  ? "border-b-[3px] border-t-[3px] border-t-transparent border-[#7C3FF9] duration-300"
                  : "border-y-[3px] border-transparent"
              }
            >
              Описание
            </button>
            <button
              onClick={() => setActiveTab("Статистика")}
              className={
                activeTab === "Статистика"
                  ? "border-b-[3px] border-t-[3px] border-t-transparent border-[#7C3FF9] duration-300"
                  : "border-y-[3px] border-transparent"
              }
            >
              Статистика
            </button>
          </div>
          <div className="bg-white px-0.5 pb-0.5">
            <div className="bg-[#DCDCE4] w-full py-5 flex items-center justify-center">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackInfo;
