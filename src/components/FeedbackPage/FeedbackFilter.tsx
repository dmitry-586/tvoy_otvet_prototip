import { ConfigProvider, DatePicker, Select } from "antd";
import Image from "next/image";
import locale from "antd/locale/ru_RU";
import React, { useState } from "react";
import { m } from "framer-motion";
import styles from "../../styles/Feedback/Feedback.module.scss";
import FilterBadge from "./FilterBadge";

const { RangePicker } = DatePicker;
type FilterKey = "status" | "rating" | "service";

const selectOptions: Record<FilterKey, { value: string; label: string }[]> = {
  status: [
    { value: "Все", label: "Все" },
    { value: "Статус 1", label: "Статус 1" },
    { value: "Статус 2", label: "Статус 2" },
    { value: "Статус 3", label: "Статус 3" },
  ],
  rating: [
    { value: "Все", label: "Все" },
    { value: "1", label: "1-2" },
    { value: "2", label: "2-3" },
    { value: "3", label: "3-4" },
    { value: "4", label: "4-5" },
    { value: "от 4.7", label: "от 4.7" },
  ],
  service: [
    { value: "Все", label: "Все" },
    { value: "Wildberries", label: "Wildberries" },
    { value: "Ozon", label: "Ozon" },
    { value: "YandexMaps", label: "YandexMaps" },
  ],
};

const FeedbackFilter = () => {
  const [open, setOpen] = React.useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [filters, setFilters] = useState({
    status: "Все",
    rating: "Все",
    service: "Все",
  });

  const handleSelectChange = (filter: FilterKey) => (value: string) => {
    setFilters((prev) => ({ ...prev, [filter]: value }));
  };

  const renderSelect = (filterKey: FilterKey, prefix: string) => (
    <Select
      className="w-full h-[50px] bg-transparent text-base"
      variant="outlined"
      prefix={prefix}
      options={selectOptions[filterKey]}
      suffixIcon={
        <Image
          src="/feedback/arrowDown.svg"
          alt="arrow down"
          width={16}
          height={16}
        />
      }
      onChange={handleSelectChange(filterKey)}
      value={filters[filterKey]}
    />
  );

  const handleImageClick = () => {
    setOpen(!open);
  };

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <div className="z-20 border-b py-[10px] px-5 bg-[#F6F6F9] flex flex-col">
        <button
          onClick={toggleModal}
          className="inline-flex gap-2 items-center border-[#C0C0CF] w-full"
        >
          <Image
            src="/feedback/filter.svg"
            alt="filter"
            width={20}
            height={20}
          />
          <p className="text-[#181826] text-[13px]">Настроить фильтры</p>
          <Image
            src="/feedback/arrowDown.svg"
            alt="arrow"
            width={16}
            height={16}
            className={`transition-transform duration-300 ${
              isModalVisible ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="flex gap-[5px] flex-wrap relative">
          <FilterBadge
            label="Статус"
            value={filters.status}
            onClear={() => handleSelectChange("status")("Все")}
          />
          <FilterBadge
            label="Рейтинг"
            value={filters.rating}
            onClear={() => handleSelectChange("rating")("Все")}
          />
          <FilterBadge
            label="Сервис"
            value={filters.service}
            onClear={() => handleSelectChange("service")("Все")}
          />
        </div>
      </div>
      <m.div
        initial={{ bottom: 0, left: 0, display: "none" }}
        animate={{
          bottom: isModalVisible ? -300 : 0,
          display: isModalVisible ? "block" : "none",
        }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 200,
          damping: 23,
        }}
        className="absolute w-full bg-white z-10 rounded-[20px] max-[750px]:w-[400px] max-[450px]:w-full"
      >
        <div className={styles.FeedbackFilterWrapper}>
          <div className="w-full flex flex-col gap-[10px]">
            <ConfigProvider
              theme={{
                token: { fontSize: 16 },
                components: {
                  Select: {
                    activeBorderColor: "#7C3FF9",
                    hoverBorderColor: "#7C3FF9",
                    activeOutlineColor: "transparent",
                    optionSelectedColor: "white",
                    optionSelectedBg: "#7C3FF9",
                    optionActiveBg: "#DCDCE4",
                    borderRadius: 20,
                    controlPaddingHorizontal: 10,
                  },
                },
              }}
            >
              {renderSelect("status", "Статус: ")}
              {renderSelect("rating", "Рейтинг: ")}
              {renderSelect("service", "Сервис: ")}
            </ConfigProvider>
          </div>
          <ConfigProvider
            locale={locale}
            theme={{
              components: {
                DatePicker: {
                  colorPrimary: "#7C3FF9",
                },
              },
            }}
          >
            <div className={styles.RangePickerWrapper}>
              <button
                className={styles.RangePickerImage}
                onClick={handleImageClick}
              >
                <Image
                  src="/dashboard/Date_range_fill.svg"
                  alt="dateRange"
                  width={34}
                  height={34}
                />
              </button>
              <div className="flex flex-col">
                <p>Период</p>
                <RangePicker
                  open={open}
                  onOpenChange={handleOpenChange}
                  variant="borderless"
                  suffixIcon={false}
                  className="p-0"
                />
              </div>
            </div>
          </ConfigProvider>
        </div>
      </m.div>
    </>
  );
};

export default FeedbackFilter;
