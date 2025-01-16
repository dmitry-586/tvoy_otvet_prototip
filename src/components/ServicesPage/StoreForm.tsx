import React from "react";

interface StoreFormProps {
  selectedService: string;
  firstInput: string;
  secondInput: string;
  setFirstInput: (value: string) => void;
  setSecondInput: (value: string) => void;
}

const StoreForm: React.FC<StoreFormProps> = ({
  selectedService,
  firstInput,
  secondInput,
  setFirstInput,
  setSecondInput,
}) => {
  const renderInputs = () => {
    switch (selectedService) {
      case "Ozon":
        return (
          <div className="flex flex-col gap-[6px]">
            <label className="text-xs text-[#00000080]">Номер телефона</label>
            <input
              type="text"
              name="Номер телефона"
              className="border w-full h-[50px] rounded-full pl-3 text-sm outline-[#915DFA]"
              value={firstInput}
              onChange={(e) => setFirstInput(e.target.value)}
            />
          </div>
        );
      case "Wildberries":
        return (
          <div className="flex flex-col gap-[6px]">
            <label className="text-xs text-[#00000080]">Токен</label>
            <input
              type="text"
              name="Токен"
              className="border w-full h-[50px] rounded-full pl-3 text-sm outline-[#915DFA]"
              value={firstInput}
              onChange={(e) => setFirstInput(e.target.value)}
            />
          </div>
        );
      case "YandexMaps":
        return (
          <>
            <div className="flex flex-col gap-[6px]">
              <label className="text-xs text-[#00000080]">Логин</label>
              <input
                type="text"
                name="Логин"
                className="border w-full h-[50px] rounded-full pl-3 text-sm outline-[#915DFA]"
                value={firstInput}
                onChange={(e) => setFirstInput(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-xs text-[#00000080]">Пароль</label>
              <input
                type="password"
                name="Пароль"
                className="border w-full h-[50px] rounded-full pl-3 text-sm outline-[#915DFA]"
                value={secondInput}
                onChange={(e) => setSecondInput(e.target.value)}
              />
            </div>
          </>
        );
      case "GoogleMaps":
        return (
          <input
            type="text"
            name="Токен GoogleMaps"
            className="border w-full h-[50px] rounded-full pl-3 text-sm outline-[#915DFA]"
            value={firstInput}
            onChange={(e) => setFirstInput(e.target.value)}
          />
        );
      case "VK":
        return (
          <input
            type="text"
            name="Токен VK"
            className="border w-full h-[50px] rounded-full pl-3 text-sm outline-[#915DFA]"
            value={firstInput}
            onChange={(e) => setFirstInput(e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderInputs()}</>;
};

export default StoreForm;
