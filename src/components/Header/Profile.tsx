import HeaderInputs from "./HeaderInputs";
import Image from "next/image";
import { m } from "framer-motion";
import { NavMenuProps } from "@/interfaces/interfaces";
import { FormEvent } from "react";

const Profile: React.FC<NavMenuProps> = ({ isCollapsed, toggleSidebar }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form data:", formValues);
  };

  return (
    <m.div
      initial={{ width: 565, right: 0, zIndex: 10, display: "none" }}
      animate={{
        right: isCollapsed ? 0 : -565,
        display: isCollapsed ? "block" : "none",
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 23,
      }}
      className="w-full h-screen z-10 bg-white absolute top-0"
    >
      <div className="flex justify-between h-[72px] items-center py-6 px-5 border-b">
        <p>Настройки профиля</p>
        <Image
          src="/Header/X.svg"
          alt="close"
          width={16}
          height={16}
          onClick={toggleSidebar}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[138px] h-[138px] flex justify-center items-center bg-[#D8D8D8] rounded-full mt-5">
          <Image src="/Header/User.svg" alt="User" width={115} height={115} />
        </div>
        <button className="flex gap-2 w-[182px] h-10 border rounded-[20px] justify-center items-center mt-[14px] text-[#404B52] text-sm">
          Загрузить фото
          <Image
            src="/Header/UploadSimple.svg"
            alt="upload"
            width={20}
            height={20}
          />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="px-5">
          <div className="flex justify-between w-full mt-[30px] border-b pb-[30px]">
            <HeaderInputs
              prefix="personal"
              titles={["Имя*", "Телефон*", "Компания"]}
              placeholders={["ФИО", "Номер телефона", "Название компании"]}
              placeholdersImage={[
                "/Header/User_fill.svg",
                "/Header/PhoneCall.svg",
                "/Header/Briefcase.svg",
              ]}
            />
            <HeaderInputs
              prefix="contact"
              titles={["Email*", "Адрес", "Должность"]}
              placeholders={[
                "Email address",
                "Текущее местоположение",
                "Название должности",
              ]}
              placeholdersImage={[
                "/Header/Envelope.svg",
                "/Header/MapPinLine.svg",
                "/Header/Flag_fill.svg",
              ]}
            />
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <p className="text-[#C0C0C0] text-sm">Изменить пароль</p>
            <HeaderInputs
              prefix="password"
              titles={[
                "Текущий пароль",
                "Новый пароль",
                "Повторите новый пароль",
              ]}
              placeholders={["Password", "Password", "Password"]}
              placeholdersImage={[
                "/Header/Eye.svg",
                "/Header/Eye.svg",
                "/Header/Eye.svg",
              ]}
              className="bg-[position:right_14px_center] pl-4"
            />
            <button
              type="submit"
              className="flex gap-2 w-[225px] h-[40px] bg-[#F2F4F6] rounded-[20px] justify-center items-center text-[#404B52] text-sm"
            >
              <Image
                src="/Header/Subtract.svg"
                alt="button"
                width={15}
                height={15}
              />
              Сохранить изменения
            </button>
          </div>
        </div>
      </form>
    </m.div>
  );
};

export default Profile;
