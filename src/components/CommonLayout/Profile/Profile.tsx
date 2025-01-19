import ProfileInputs from "../ProfileInputs";
import Image from "next/image";
import { m } from "framer-motion";
import { NavMenuProps } from "@/interfaces/interfaces";
import { FormEvent, useState } from "react";
import ChangePassword from "./ChangePassword";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import styles from "../../../styles/GlobalLayout/Header.module.scss";
// import PersonalInformation from "./PersonalInformation";
import { useAuth } from "@/components/authPage/AuthProvider";

const Profile: React.FC<NavMenuProps> = ({ isCollapsed, toggleSidebar }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form data:", formValues);
  };

  const [activeTab, setActiveTab] = useState("");
  const { logout } = useAuth();

  return (
    <>
      {isCollapsed && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
      <m.div
        initial={{ right: -460, display: "none" }}
        animate={{
          right: isCollapsed ? 0 : -460,
          display: isCollapsed ? "block" : "none",
        }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 23,
        }}
        className="w-[460px] h-screen z-40 bg-white absolute top-0 overflow-auto max-[460px]:w-full"
      >
        {activeTab === "Двухфакторная аутентификация" ? (
          <TwoFactorAuthentication
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleSidebar={toggleSidebar}
          />
        ) : activeTab === "Смена пароля" ? (
          <ChangePassword
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            toggleSidebar={toggleSidebar}
          />
        ) : (
          <m.div
            initial={{ left: -460, display: "none" }}
            animate={{
              left: activeTab === "" ? 0 : -460,
              display: activeTab === "" ? "block" : "none",
            }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 23,
            }}
            className="w-full h-full z-40 bg-white absolute top-0 overflow-auto"
          >
            <div className="flex justify-between h-[72px] items-center py-6 px-5 border-b sticky top-0 bg-white">
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
            <form onSubmit={handleSubmit}>
              <div className="p-5">
                <div className="flex flex-col w-full border-b pb-[30px] gap-[30px]">
                  <ProfileInputs
                    prefix="personal"
                    type="text"
                    titles={["Email", "Телефон", "Пароль"]}
                    placeholders={["Email address", "Номер телефона", "Пароль"]}
                    placeholdersImage={[
                      "/Header/User_fill.svg",
                      "/Header/PhoneCall.svg",
                      "/Header/Unlock_fill.svg",
                    ]}
                    onClicks={[
                      () => {},
                      () => {},
                      () => setActiveTab("Смена пароля"),
                    ]}
                  />

                  <button
                    type="submit"
                    className="flex gap-2 w-[225px] h-[40px] bg-[#915DFA] rounded-[20px] justify-center items-center text-white text-sm"
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
            <section className="mt-5 flex flex-col gap-[14px] px-5 max-[460px]:mt-[14px]">
              <button onClick={logout} className={`${styles.profileLink} flex`}>
                <div className="flex gap-3">
                  <Image
                    src="/Header/UploadSimple.svg"
                    alt="upload"
                    className="rotate-[-90deg]"
                    width={24}
                    height={24}
                  />
                  <p>Выйти из аккаунта</p>
                </div>
              </button>
            </section>
          </m.div>
        )}
      </m.div>
    </>
  );
};

export default Profile;
