import Image from "next/image";
import { m } from "framer-motion";
import { IProfilePages } from "@/interfaces/interfaces";

const TwoFactorAuthentication: React.FC<IProfilePages> = ({
  activeTab,
  toggleSidebar,
  setActiveTab,
}) => {
  return (
    <m.div
      initial={{ right: -565 }}
      animate={{
        right: activeTab ? 0 : -565,
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 23,
      }}
      className="w-[565px] h-screen z-40 bg-white absolute top-0 overflow-auto"
    >
      <div className="flex justify-between h-[72px] items-center py-6 px-5 border-b sticky top-0 bg-white">
        <button
          onClick={() => setActiveTab("")}
          className="flex gap-2 items-center"
        >
          <Image
            src="/feedback/ArrowLeft.svg"
            alt="arrow"
            width={10}
            height={10}
          />
          <p className="text-[#212134] text-xs">Назад</p>
        </button>
        <p className="flex-grow text-center text-sm">
          Двухфакторная аутентификация
        </p>
        <div className="flex justify-end w-[54px]">
          <Image
            src="/Header/X.svg"
            alt="close"
            width={16}
            height={16}
            onClick={toggleSidebar}
            className="cursor-pointer "
          />
        </div>
      </div>
    </m.div>
  );
};

export default TwoFactorAuthentication;
