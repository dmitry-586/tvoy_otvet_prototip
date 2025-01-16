import React from "react";
import { salesData } from "../../public/data";
import {
  CustomTooltipProps,
  ServicesProps,
  UtilsProps,
} from "@/interfaces/interfaces";

// Функция для вычисления изменения денег в процентах
type MoneyKey = "money" | "money2";

export const ChangeMoney = ({ moneyKey }: { moneyKey: MoneyKey }) => {
  if (salesData.length === 0) return 0;

  const initialValue = salesData[0][moneyKey];
  const currentValue = salesData[salesData.length - 1][moneyKey];
  const change = ((currentValue - initialValue) / initialValue) * 100;

  return change.toFixed(2);
};

// Функция для суммирования всех денег
export const SumMoney = ({ moneyKey }: { moneyKey: MoneyKey }) => {
  let res = 0;
  salesData.map((el) => {
    res += el[moneyKey]; // Use the moneyKey to access the correct property
  });
  return res;
};

// Компонент для отображения пользовательского tooltip
export const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded flex items-center">
        <p className="text-sm text-black">
          <span className="font-medium text-[#273B4A]">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};

// Функция для обработки изменения выбора в селекте
export const handleSelectChange = (
  value: string,
  setSelectedService: React.Dispatch<React.SetStateAction<string>>,
  setServiceImage: React.Dispatch<React.SetStateAction<string>>
) => {
  setSelectedService(value);

  // Устанавливаем изображение в зависимости от выбранного сервиса
  switch (value) {
    case "Wildberries":
      setServiceImage("/ServicesPage/wb.svg");
      break;
    case "Ozon":
      setServiceImage("/ServicesPage/ozon.svg");
      break;
    case "YandexMaps":
      setServiceImage("/ServicesPage/yandex.svg");
      break;
    case "GoogleMaps":
      setServiceImage("/ServicesPage/googleMaps.svg");
      break;
    case "VK":
      setServiceImage("/ServicesPage/vk.svg");
      break;
    default:
      setServiceImage("/ServicesPage/wb.svg");
  }
};

// Функция для добавления нового сервиса
export const handleAddService = async ({
  services,
  selectedService,
  serviceImage,
  name,
  value1,
  value2,
  setServices,
  setName,
  setValue1,
  setValue2,
}: UtilsProps) => {
  let newService: ServicesProps | undefined;

  // Создаем новый объект сервиса
  const serviceConfig: {
    [key: string]: {
      properties: {
        [key: string]: string;
      };
    };
  } = {
    Wildberries: {
      properties: {
        token: value1,
      },
    },
    Ozon: {
      properties: {
        phoneNumber: value1,
      },
    },
    YandexMaps: {
      properties: {
        login: value1,
        password: value2,
      },
    },
  };

  if (serviceConfig[selectedService]) {
    newService = {
      selectedService: selectedService,
      serviceImage: serviceImage,
      status: true,
      name: name,
      ...serviceConfig[selectedService].properties,
    };
  }

  if (newService) {
    const updatedServices = [...services, newService];
    setServices(updatedServices);

    const response = await fetch("/api/addService", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error("Не удалось обновить данные сервисов:", errorMessage);
    } else {
      console.log("Данные успешно обновлены");

      // Обнуляем значения input после успешного запроса
      setName("");
      setValue1("");
      setValue2("");

      setTimeout(() => {
        setServices((prevServices) => prevServices.map((service) => service));
      }, 500);
    }
  } else {
    console.warn(
      "No new service was created because the selected service is not 'Wildberries'."
    );
  }
};

//кастомный хук для лоадинга
export const useLoader = () => {
  const [spinning, setSpinning] = React.useState(false);
  const [percent, setPercent] = React.useState(0);

  const showLoader = () => {
    setSpinning(true);
    let ptg = -10;

    const interval = setInterval(() => {
      ptg += 4;
      setPercent(ptg);

      if (ptg > 120) {
        clearInterval(interval);
        setSpinning(false);
        setPercent(0);
      }
    }, 100);
  };

  return { spinning, percent, showLoader };
};
