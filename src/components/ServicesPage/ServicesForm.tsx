import { useState } from "react";
import StoreForm from "./StoreForm";
import { handleAddService } from "@/utils/utils";
import { ServicesFormProps } from "@/interfaces/interfaces";

const ServicesForm: React.FC<ServicesFormProps> = ({
  services,
  setServices,
  selectedService,
  serviceImage,
  className,
  showLoader,
  name,
}) => {
  const [storeName, setStoreName] = useState(name);
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const handleAdd = async () => {
    showLoader();
    await new Promise<void>((resolve) => {
      setTimeout(async () => {
        await handleAddService({
          services,
          selectedService,
          serviceImage,
          name: storeName,
          value1: firstInput,
          value2: secondInput,
          setServices,
          setName: setStoreName,
          setValue1: setFirstInput,
          setValue2: setSecondInput,
        });
        resolve();
      }, 1500);
    });
  };

  return (
    <div
      className={`bg-white rounded-[20px] h-full p-5 flex flex-col gap-6 ${className}`}
    >
      <p className="w-full border-b pb-5 text-[#181826] font-semibold max-[700px]:text-sm">
        Добавление магазина {selectedService}
      </p>
      <div className="flex flex-col gap-[6px]">
        <label className="text-xs text-[#00000080]">Название магазина</label>
        <input
          type="text"
          name="Название магазина"
          className="border w-full h-[50px] rounded-full pl-3 text-sm outline-[#915DFA]"
          value={name}
          onChange={(e) => {
            setStoreName(e.target.value);
          }}
        />
      </div>
      <StoreForm
        selectedService={selectedService}
        firstInput={firstInput}
        secondInput={secondInput}
        setFirstInput={setFirstInput}
        setSecondInput={setSecondInput}
      />
      <p className="text-xs font-light text-[#636363]">
        Lorem ipsum dolor sit amet consectetur. Felis a dictum cursus ridiculus
        a vitae facilisis in. Velit scelerisque curabitur morbi ornare quisque.
        Mi lectus volutpat eu ipsum vel elementum gravida lacinia. Non et amet
        pharetra dolor volutpat eu ipsum vel elementum gravida lacinia. Non et
        amet pharetra.
      </p>
      <div className="w-full flex justify-center">
        <button
          onClick={handleAdd}
          className="bg-[#915DFA] rounded-[20px] w-[180px] h-10 text-white "
        >
          {selectedService == "Ozon" ? "Отправить код" : "Сохранить"}
        </button>
      </div>
    </div>
  );
};

export default ServicesForm;
