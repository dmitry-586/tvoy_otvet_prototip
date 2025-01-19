"use client";

import { useLoader } from "@/utils/utils";
import { ConfigProvider, Select, Spin } from "antd";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ServicesAddProps } from "@/interfaces/interfaces";
import React from "react";
import ServicesForm from "./ServicesForm";

const ServicesAdd: React.FC<ServicesAddProps> = ({ services, setServices }) => {
  const { spinning, percent, showLoader } = useLoader();

  const [selectedService, setSelectedService] = useState("Wildberries");
  const [serviceImage, setServiceImage] = useState("/ServicesPage/wb.svg");
  const [name, setName] = useState("");

  useEffect(() => {
    if (services.length > 0) {
      const initialServiceData = services.find(
        (service) => service.selectedService === selectedService
      );

      if (initialServiceData) {
        setName(initialServiceData.name);
        setServiceImage(`/ServicesPage/wb.svg`);
      }
    }
  }, [services, selectedService]);

  const handleServiceChange = (value: string) => {
    setSelectedService(value);

    const serviceImages: { [key: string]: string } = {
      Wildberries: "/ServicesPage/wb.svg",
      Ozon: "/ServicesPage/ozon.svg",
      YandexMaps: "/ServicesPage/yandex.svg",
      GoogleMaps: "/ServicesPage/googleMaps.svg",
      VK: "/ServicesPage/vk.svg",
    };

    setServiceImage(serviceImages[value] || "/ServicesPage/wb.svg");

    const selectedServiceData = services.find(
      (service) => service.selectedService === value
    );

    if (selectedServiceData) {
      setName(selectedServiceData.name);
    } else {
      setName("");
    }
  };

  // const renderLoadingOrError = () => {
  //   if (loading) {
  //     return <p>Загрузка...</p>;
  //   }
  //   if (error) {
  //     return <p>{error}</p>;
  //   }
  //   if (!services || services.length === 0) {
  //     return <p>Данные сервисов не загружены</p>;
  //   }
  //   return null;
  // };

  // const loadingOrErrorContent = renderLoadingOrError();
  // if (loadingOrErrorContent) {
  //   return (
  //     <div className="w-[420px] flex p-5 min-h-[480px] bg-white rounded-[20px] justify-center text-[#32324D] max-[1000px]:hidden">
  //       {loadingOrErrorContent}
  //     </div>
  //   );
  // }

  return (
    <>
      <Spin spinning={spinning} percent={percent} fullscreen />
      <div className="w-[420px] flex flex-col gap-[14px] max-[1000px]:hidden">
        <div className="flex items-center bg-white rounded-[20px] w-full h-[50px] pl-4 pr-3 relative">
          <Image
            src={serviceImage}
            alt={selectedService}
            width={30}
            height={30}
            className="w-auto h-auto absolute left-4"
          />
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  optionSelectedColor: "white",
                  optionSelectedBg: "#7C3FF9",
                  optionActiveBg: "#DCDCE4",
                  optionSelectedFontWeight: 500,
                },
              },
            }}
          >
            <Select
              value={selectedService}
              className="w-full h-full bg-transparent pl-7 text-base"
              placeholder="Borderless"
              variant="borderless"
              onChange={handleServiceChange}
              options={[
                { value: "Wildberries", label: "Wildberries" },
                { value: "Ozon", label: "Ozon" },
                { value: "YandexMaps", label: "YandexMaps" },
                { value: "GoogleMaps", label: "GoogleMaps" },
                { value: "VK", label: " VK" },
              ]}
            />
          </ConfigProvider>
        </div>
        <ServicesForm
          name={name}
          showLoader={showLoader}
          selectedService={selectedService}
          serviceImage={serviceImage}
          services={services}
          setServices={setServices}
        />
      </div>
    </>
  );
};

export default ServicesAdd;
