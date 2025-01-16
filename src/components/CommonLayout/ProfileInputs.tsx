"use client";

import React, { useState, useCallback, useMemo } from "react";
import "../../app/globals.css";
import { ProfileFormData } from "@/interfaces/interfaces";
import Image from "next/image";

const HeaderInputs: React.FC<ProfileFormData> = ({
  titles,
  placeholders,
  placeholdersImage,
  className,
  prefix,
  classNameWrapper,
  onClicks,
  type,
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(
    Array(titles.length).fill(false)
  );

  const inputData = useMemo(() => {
    return titles.map((title, index) => ({
      title,
      placeholder: placeholders[index],
      name: `${prefix}_input${index + 1}`,
      placeholderImage: placeholdersImage[index],
      onClick: onClicks && onClicks[index] ? onClicks[index] : () => {},
    }));
  }, [titles, placeholders, placeholdersImage, prefix, onClicks]);

  const handlePasswordVisibility = useCallback((index: number) => {
    setPasswordVisibility((prevVisibility) =>
      prevVisibility.map((visibility, i) =>
        i === index ? !visibility : visibility
      )
    );
  }, []);

  return (
    <div className={`flex flex-col gap-[14px] w-[360px] ${classNameWrapper}`}>
      {inputData.map((input, index) => (
        <div key={index} className="input-container flex flex-col gap-2">
          <p>{input.title}:</p>
          <label className="flex gap-3 text-sm items-center">
            <input
              type={passwordVisibility[index] ? "text" : type}
              name={input.name}
              placeholder={input.placeholder}
              className={`border w-full h-10 rounded-full pl-12 pr-3 text-sm image-placeholder bg-[position:15px_center] ${className}`}
              style={{ backgroundImage: `url(${input.placeholderImage})` }}
            />
            <button
              className="flex gap-3 h-full items-center"
              onClick={
                type === "password"
                  ? () => handlePasswordVisibility(index)
                  : input.onClick
              }
            >
              <Image
                src={
                  type === "password"
                    ? "/Header/Eye.svg"
                    : "/settingsPage/edit.svg"
                }
                alt={type === "password" ? "eye" : "edit"}
                width={type === "password" ? 26 : 18}
                height={type === "password" ? 26 : 18}
              />
            </button>
          </label>
        </div>
      ))}
    </div>
  );
};

export default HeaderInputs;
