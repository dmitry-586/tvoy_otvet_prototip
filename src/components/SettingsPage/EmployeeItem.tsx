"use client";

import styles from "../../styles/SettingsPage/Settings.module.scss";
import { EmployeeItemProps } from "@/interfaces/interfaces";
import Image from "next/image";
import { useState } from "react";

export const EmployeeItem: React.FC<EmployeeItemProps> = ({
  name,
  email,
  role,
  imageSrc,
}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <div className={styles.usersTable}>
      <div className="flex gap-3 items-center relative">
        <Image src={imageSrc} alt="ProfilePhoto" width={32} height={32} />
        <p>{name}</p>
        <div className="relative">
          <button
            onClick={() => {
              setIsTextVisible(!isTextVisible);
            }}
            className="hidden rounded-full border border-[#8E8EA9] size-6 items-center justify-center text-[#8E8EA9] font-serif max-[740px]:flex"
          >
            i
          </button>
          {isTextVisible ? (
            <p className="absolute left-1/2 -translate-x-1/2 top-[-30px]">
              {email}
            </p>
          ) : (
            <p className="hidden" />
          )}
        </div>
      </div>
      <p className="text-[#4A4A6A] max-[740px]:hidden">{email}</p>
      <p className="text-[#4A4A6A] text-center min-w-[185px]">{role}</p>
      <div className="flex gap-6">
        <button>
          <Image
            src="/settingsPage/edit.svg"
            alt="edit"
            width={12}
            height={12}
          />
        </button>
        <button>
          <Image
            src="/settingsPage/delete.svg"
            alt="delete"
            width={12}
            height={12}
          />
        </button>
      </div>
    </div>
  );
};
