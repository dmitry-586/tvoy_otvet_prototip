import { EmployeeItemProps } from "@/interfaces/interfaces";
import Image from "next/image";
import styles from "../../styles/SettingsPage/Settings.module.scss";

export const MobileEmployeeItem: React.FC<EmployeeItemProps> = ({
  email,
  imageSrc,
  name,
  role,
}) => {
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="flex min-w-[165px] h-[125px] bg-white rounded-[20px] p-[14px] flex-col gap-[10px]">
      <div className="flex gap-2">
        <Image src={imageSrc} alt="user" width={32} height={32} />
        <div className="flex flex-col leading-none gap-1 text-sm text-[#212134]">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <button className="h-[18px] ml-auto">
          <span className={styles.dotsButton} />
        </button>
      </div>
      <div className="flex gap-1 text-[12px] text-[#8E8EA9]">
        <p>Роль:</p>
        <p>{role}</p>
      </div>
      <p className="text-[10px] text-[#4A4A6A]">{email}</p>
    </div>
  );
};
