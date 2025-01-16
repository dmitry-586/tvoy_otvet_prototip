"use client";

import Image from "next/image";
import { useState } from "react";
import { ConfigProvider, Select } from "antd";
import styles from "../../styles/SettingsPage/Settings.module.scss";
import { EmployeeItem } from "./EmployeeItem";

export const EmployeeList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDivClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-1 rounded-[20px] bg-white min-h-[500px] max-w-[900px] mt-5 p-5 min-w-[700px] max-[740px]:min-w-[500px] max-[540px]:hidden">
      <div className="pb-5 border-b flex justify-between">
        <h3 className="text-[#212134]">Сотрудники</h3>
        <button className="text-xs text-[#4A5154] flex gap-[15px] items-center bg-[#F9FBFF] rounded-[20px] pr-3">
          <div className="rounded-[20px] shadow-custom">
            <Image
              src="/settingsPage/PlusCircle.svg"
              alt="add"
              width={24}
              height={24}
            />
          </div>
          <p>Добавить сотрудника</p>
        </button>
      </div>
      <div className={styles.usersTableHeader}>
        <p>Имя</p>
        <p className="max-[740px]:hidden">Email</p>
        <button
          className="flex items-center bg-white rounded-[20px] border w-full h-[40px] pl-4 pr-3 relative cursor-pointer min-w-[185px] max-w-[220px] mx-auto"
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
              placeholder="Выберите роль"
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
      <div className="flex flex-col">
        <EmployeeItem
          name="Darrell Steward"
          email="tanya.hill@example.com"
          role="Менеджер"
          imageSrc="/settingsPage/ProfilePhoto.svg"
        />
        <EmployeeItem
          name="Cody Fisher"
          email="tim.jennings@example.com"
          role="Админ"
          imageSrc="/settingsPage/ProfilePhoto2.svg"
        />
      </div>
    </div>
  );
};
