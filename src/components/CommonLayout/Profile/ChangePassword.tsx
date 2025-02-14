import Image from "next/image";
import ProfileInputs from "../ProfileInputs";
import { m } from "framer-motion";
import { IProfilePages } from "@/interfaces/interfaces";

const ChangePassword: React.FC<IProfilePages> = ({
  activeTab,
  toggleSidebar,
  setActiveTab,
}) => {
  return (
    <m.div
      initial={{ right: -460 }}
      animate={{
        right: activeTab ? 0 : -460,
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 23,
      }}
      className="w-[460px] h-screen z-40 bg-white absolute top-0 overflow-auto max-[460px]:w-full"
    >
      <div className="flex justify-between h-[72px] items-center py-6 px-5 border-b sticky top-0 bg-white">
        <p className="text-sm">Смена пароля</p>
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
      <button
        onClick={() => setActiveTab("")}
        className="flex gap-2 items-center m-5 mb-[10px]"
      >
        <Image
          src="/feedback/ArrowLeft.svg"
          alt="arrow"
          width={10}
          height={10}
        />
        <p className="text-[#212134] text-xs">Назад</p>
      </button>
      <div className="flex flex-wrap p-5 gap-[14px] max-w-[400px]">
        <ProfileInputs
          prefix="password"
          type="password"
          titles={["Текущий пароль", "Новый пароль"]}
          placeholders={["Password", "Password"]}
          placeholdersImage={["/path/to/image.svg"]}
          className="pl-4"
        />
      </div>
      <div className="flex px-5">
        <button
          type="submit"
          className="flex gap-2 w-[187px] h-[40px] bg-[#915DFA] rounded-[20px] justify-center items-center text-white text-sm mt-[10px] mb-[30px]"
        >
          <Image
            src="/Header/Subtract.svg"
            alt="button"
            width={15}
            height={15}
          />
          Обновить пароль
        </button>
      </div>
    </m.div>
  );
};

export default ChangePassword;
