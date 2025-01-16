import Image from "next/image";
import { Spin, Popover } from "antd";
import { useState } from "react";
import { m } from "framer-motion";
import { useLoader } from "@/utils/utils";
import { IServicesProps } from "@/interfaces/interfaces";
import ServicesForm from "./ServicesForm";

const ServicesBrick: React.FC<IServicesProps> = ({
  selectedService,
  serviceImage,
  name,
  status,
  className,
  services,
  setServices
}) => {
  const { spinning, percent, showLoader } = useLoader();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDesktop, setisVisibleDesktop] = useState(false);

  const toggleForm = () => setIsVisible(!isVisible);
  const toggleFormDesktop = () => setisVisibleDesktop(!isVisibleDesktop);

  const statusIcon = status ? (
    <Image
      src="/ServicesPage/statusTrue.svg"
      alt="statusTrue"
      width={36}
      height={36}
    />
  ) : (
    <Popover content={<StatusPopoverContent />} placement="bottomRight">
      <Image
        src="/ServicesPage/statusFalse.svg"
        alt="statusFalse"
        width={36}
        height={36}
      />
    </Popover>
  );

  return (
    <>
      <Spin spinning={spinning} percent={percent} fullscreen />
      <div className="overflow-hidden">
        <div
          className={`flex justify-between w-full h-[52px] px-5 items-center bg-white relative z-10 ${className}`}
        >
          <div className="flex items-center gap-5">
            <Image
              src={serviceImage}
              alt={selectedService}
              width={30}
              height={30}
            />
            <span>{selectedService}</span>
          </div>
          <div className="flex gap-[14px]">
            {statusIcon}
            <button
              onClick={toggleForm}
              className={`hidden max-[1000px]:block `}
            >
              <Image
                src="/ServicesPage/settingsServices.svg"
                alt="settings"
                width={24}
                height={24}
                className={`transition-transform duration-500 ${
                  isVisible ? "rotate-180" : "rotate-[-180deg]"
                }`}
              />
            </button>
            <button onClick={toggleFormDesktop} className="max-[1000px]:hidden">
              <Image
                src="/ServicesPage/settingsServices.svg"
                alt="settings"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <m.div
          initial={{ maxHeight: 0, display: "none", top: -500 }}
          animate={{
            maxHeight: isVisible
              ? selectedService === "YandexMaps"
                ? 600
                : 500
              : 0,
            display: isVisible ? "block" : "none",
            top: isVisible ? 0 : selectedService === "YandexMaps" ? -600 : -500,
          }}
          transition={{ duration: 0.9, type: "spring" }}
          className="bg-white relative px-5"
        >
          <ServicesForm
            name={name}
            showLoader={showLoader}
            selectedService={selectedService}
            serviceImage={serviceImage}
            services={services}
            setServices={setServices}
            className="shadow-custom mb-5"
          />
        </m.div>
      </div>
    </>
  );
};

const StatusPopoverContent = () => (
  <div className="flex gap-2 items-center w-[320px] max-[500px]:max-w-[230px]">
    <Image
      src="/ServicesPage/statusFalse.svg"
      alt="statusFalse"
      width={24}
      height={24}
    />
    <p className="leading-none text-sm">
      Lorem ipsum dolor sit amet consectetur. Sit augue ut in sit. Lorem ipsum
      dolor sit amet consectetur. Sit augue ut in sit.
    </p>
  </div>
);

export default ServicesBrick;
