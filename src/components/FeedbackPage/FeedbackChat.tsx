import Image from "next/image";
import React, { useState } from "react";
import FeedbackMessage from "@/components/FeedbackPage/FeedbackMessage";
import { FeedbackChatProps } from "@/interfaces/interfaces";
import styles from "../../styles/Feedback/Feedback.module.scss";
import { motion } from "framer-motion";
import { ConfigProvider, Switch } from "antd";

const FeedbackChat: React.FC<FeedbackChatProps> = ({
  handleClick,
  handleLayoutClick,
}) => {
  // Массив для хранения расположения сообщений
  const messages = [
    { right: false },
    { right: true },
    { right: false },
    { right: true },
    { right: false },
    { right: true },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.feedbackChatWrapper}>
      <header className="h-20 py-5 w-full bg-inherit border-b border-[#C0C0CF] flex items-center px-10 max-[1000px]:px-5 max-[550px]:h-auto max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-3 max-[550px]:py-[10px]">
        <div className="flex justify-between items-center w-full">
          <button
            onClick={handleLayoutClick}
            className="text-xs hidden gap-2 items-center mr-5 max-[750px]:flex max-[550px]:hidden"
          >
            <Image
              src="/feedback/ArrowLeft.svg"
              alt="arrow"
              width={10}
              height={10}
            />
            Назад
          </button>
          <button
            onClick={handleClick}
            className="flex-1 flex gap-2 items-center"
          >
            <Image
              className="cursor-pointer max-[500px]:w-8 max-[500px]:h-8"
              src="/ServicesPage/yandex.svg"
              alt="yandex"
              width={40}
              height={40}
            />
            <div className="flex flex-col gap-1 items-start leading-none max-[500px]:text-sm max-[500px]:gap-0">
              <p>Fedor Bodrov</p>
              <p className={styles.feedbackChatWrapper_headerAddress}>
                Яндекс.Карты &gt; HELPER (Большая Покровская ул., 58, Нижний
                Новгород)
              </p>
            </div>
          </button>
          <button
            onClick={handleClick}
            className="hidden rounded-full border border-[#666687] size-7 items-center justify-center ml-auto text-[#666687] text-lg font-serif max-[550px]:flex"
          >
            i
          </button>
        </div>
        <div className="flex w-full gap-5 items-center max-w-[205px] max-[550px]:justify-between max-[550px]:max-w-none">
          <button
            onClick={handleLayoutClick}
            className="text-sm hidden gap-2 items-center mr-5 max-[550px]:flex"
          >
            <Image
              src="/feedback/ArrowLeft.svg"
              alt="arrow"
              width={12}
              height={12}
            />
            Назад
          </button>
          <div className="flex gap-3 items-center">
            <p>AI-помощник</p>
            <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    colorPrimary: "#7C3FF9",
                    colorPrimaryHover: "#915DFA",
                  },
                },
              }}
            >
              <Switch />
            </ConfigProvider>
          </div>
          <button
            onClick={handleClick}
            className="flex rounded-full border border-[#666687] size-7 items-center justify-center text-[#666687] text-lg font-serif max-[550px]:hidden"
          >
            i
          </button>
        </div>
      </header>
      <div className="flex-1 flex flex-col overflow-auto">
        <section className="px-10 py-5 w-full flex flex-col gap-8 mt-auto max-[1000px]:px-5 max-[750px]:gap-5">
          {messages.map((item, index) => (
            <FeedbackMessage key={index} right={item.right} />
          ))}
        </section>
      </div>
      <footer className="w-full px-10 pb-5 max-[1000px]:px-5 max-[550px]:pb-[10px]">
        <div className="bg-[#FFFFFF4D] w-full h-[50px] rounded-lg flex items-center gap-[6px] px-[14px] border border-[#0000001A] relative">
          {/* <button>
            <Image
              src="feedback/Attach.svg"
              alt="attach"
              width={24}
              height={24}
            />
          </button> */}
          {/* <button onClick={handleSettingsClick}>
            <Image
              src="/ServicesPage/settingsServices.svg"
              alt="settings"
              width={24}
              height={24}
            />
          </button> */}
          <Menu isOpen={isOpen} handleClose={handleSettingsClick} />
          <input
            type="text"
            className="w-full h-full bg-transparent pl-[10px] text-[#181826] caret-[#181826] focus:outline-none"
            placeholder="Написать сообщение..."
          />
          {/* <button>
            <Image
              src="/feedback/happy.svg"
              alt="settings"
              width={24}
              height={24}
            />
          </button> */}
        </div>
      </footer>
    </div>
  );
};

export default FeedbackChat;

interface IMenu {
  handleClose: () => void;
  isOpen: boolean;
}

const Menu: React.FC<IMenu> = ({ isOpen }) => {
  const [isSecond, setIsSecond] = useState(10);
  return (
    <motion.div
      initial={{ bottom: 52, left: 30, display: "none", opacity: 0 }}
      animate={{
        left: isOpen ? 40 : 30,
        bottom: isOpen ? 42 : 52,
        opacity: isOpen ? 1 : 0,
        display: isOpen ? "flex" : "none",
      }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 23,
      }}
      className="absolute flex flex-col z-20 gap-5 rounded-[20px] p-3 bg-white shadow-custom text-[#666687]"
    >
      <div className="flex gap-2 items-center">
        <Image src="/settingsPage/edit.svg" alt="edit" width={14} height={14} />
        <p>Время ответа</p>
        <div className="flex">
          <input
            type="number"
            min="1"
            max="600"
            value={isSecond}
            onChange={(e) =>
              setIsSecond(Math.min(Math.max(parseInt(e.target.value), 1), 600))
            }
            className="border-b border-[#7C3FF9] text-[#7C3FF9] w-10 outline-none text-center"
          />
          <p>сек</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <p>AI-помощник</p>
        <ConfigProvider
          theme={{
            components: {
              Switch: {
                colorPrimary: "#7C3FF9",
                colorPrimaryHover: "#915DFA",
              },
            },
          }}
        >
          <Switch />
        </ConfigProvider>
      </div>
    </motion.div>
  );
};
