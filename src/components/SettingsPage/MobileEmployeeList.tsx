"use client";

import { ConfigProvider, Select } from "antd";
import { MobileEmployeeItem } from "./MobileEmployeeItem";
import Image from "next/image";
import { useState } from "react";

export default function MobileEmployeeList() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDivClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mt-5 hidden flex-col gap-5 max-[540px]:flex">
      <div className="flex justify-between items-center px-5 py-4 bg-white rounded-[20px]">
        <h3 className="text-[#212134">Сотрудники</h3>
        <button className="text-sm text-[#4A5154] flex gap-[15px] items-center bg-[#F9FBFF] rounded-[20px] pr-3 max-[400px]:text-xs max-[400px]:gap-2">
          <div className="rounded-[20px] shadow-custom">
            <Image
              src="/settingsPage/PlusCircle.svg"
              alt="add"
              width={28}
              height={28}
            />
          </div>
          <p>Добавить сотрудника</p>
        </button>
      </div>
      <div className="flex gap-[10px]">
        <Image src="/feedback/filter.svg" alt="filter" width={20} height={20} />
        <div className="h-10 bg-[#7C3FF9] flex text-white justify-center items-center rounded-[20px] px-5 text-sm gap-[10px]">
          <Image
            src="/settingsPage/Users.svg"
            alt="users"
            width={24}
            height={24}
          />
          <p>Все</p>
        </div>
        <button
          className="flex items-center bg-white rounded-[20px] border h-[40px] pl-4 pr-3 relative cursor-pointer w-[155px]"
          onClick={handleDivClick}
        >
          <Image
            src="/Header/User_fill.svg"
            alt="user"
            width={20}
            height={20}
          />
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  activeBorderColor: "#7C3FF9",
                  hoverBorderColor: "#7C3FF9",
                  activeOutlineColor: "transparent",
                  optionSelectedColor: "white",
                  optionSelectedBg: "#7C3FF9",
                  optionActiveBg: "#DCDCE4",
                },
              },
            }}
          >
            <Select
              placeholder="Роль"
              variant="borderless"
              className="w-full h-[40px] bg-transparent text-base text-start"
              options={[
                { value: "Админ", label: "Админ" },
                { value: "Менеджер", label: "Менеджер" },
              ]}
              suffixIcon={
                <Image
                  src="/feedback/arrowDown.svg"
                  alt="arrowDown"
                  width={16}
                  height={16}
                />
              }
              open={isOpen}
              onChange={setIsOpen}
            />
          </ConfigProvider>
        </button>
      </div>
      <div className="flex gap-[10px] flex-wrap">
        <MobileEmployeeItem
          name="Darrell Steward"
          email="tanya.hill@example.com"
          role="Менеджер"
          imageSrc="/settingsPage/ProfilePhoto.svg"
        />
        <MobileEmployeeItem
          name="Cody Fisher"
          email="tim.jennings@example.com"
          role="Админ"
          imageSrc="/settingsPage/ProfilePhoto2.svg"
        />
      </div>
    </div>
  );
}
