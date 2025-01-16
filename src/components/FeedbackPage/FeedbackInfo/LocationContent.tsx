import { useState } from "react";
import Image from "next/image";

const LocationContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full h-full flex flex-col gap-[10px] px-5">
      <div className="w-full h-auto bg-white rounded-[20px] flex flex-col gap-[10px] p-5">
        <h4 className="text-[#7C3FF9]">Информация</h4>
        <div
          className={`${isExpanded ? "h-auto" : ""} overflow-hidden`}
        >
          <p className={`text-[#666687] ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
            Lorem ipsum dolor sit amet consectetur. Dictumst proin quam mi
            ullamcorper turpis. Nunc dictumst blandit quam viverra neque
            porttitor congue. Tortor nisl egestas rhoncus dapibus sit fermentum
            volutpat curabitur. Aliquam lacus morbi tincidunt porttitor
            vestibulum rutrum auctor. Lorem ipsum dolor sit amet consectetur.
            Dictumst proin quam mi ullamcorper turpis. Nunc dictumst blandit
            quam viverra neque porttitor congue. Tortor nisl egestas rhoncus
            dapibus sit fermentum volutpat curabitur. Aliquam lacus morbi
            tincidunt porttitor vestibulum rutrum auctor. Lorem ipsum dolor sit
            amet consectetur. Dictumst proin quam mi ullamcorper turpis. Nunc
            dictumst blandit quam viverra neque porttitor congue. Tortor nisl
            egestas rhoncus dapibus sit fermentum volutpat curabitur. Aliquam
            lacus morbi tincidunt porttitor vestibulum rutrum auctor.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <button className="text-[#7C3FF9]" onClick={toggleExpand}>
            {isExpanded ? "свернуть" : "еще"}
          </button>
        </div>
      </div>
      <div className="w-full h-auto bg-white rounded-[20px] flex flex-col gap-[10px] p-5">
        <h4 className="text-[#7C3FF9]">Информация</h4>
        <p className="text-[#666687]">Большая Покровская ул., 58, Нижний Новгород</p>
        <div className="w-full flex justify-end">
          <button className="text-[#7C3FF9] flex gap-[6px] items-center">
            <Image
              src="/feedback/forLink.svg"
              alt="forLink"
              width={12}
              height={12}
            />
            <p>Карта</p>
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-1/3 h-[107px] bg-white rounded-[20px] p-5 flex flex-col gap-[10px] justify-center text-[#666687]">
          <h4 className="text-[#7C3FF9]">График работы</h4>
          <p className="leading-tight">
            пн-пт 08:00–20:00; <br />
            сб,вс 10:00–20:00
          </p>
        </div>
        <div className="w-1/3 h-[107px] bg-white rounded-[20px] p-5 flex flex-col gap-[10px] justify-center text-[#666687]">
          <h4 className="text-[#7C3FF9]">Телефон</h4>
          <p className="leading-tight">
            +7 (831) 266-75-07 <br />
            +7 (831) 266-66-10
          </p>
        </div>
        <div className="w-1/3 h-[107px] bg-white rounded-[20px] p-5 flex flex-col gap-[10px] justify-center text-[#666687]">
          <h4 className="text-[#7C3FF9]">Сайт</h4>
          <p>helper-remont.ru</p>
        </div>
      </div>
    </div>
  );
};

export default LocationContent;
