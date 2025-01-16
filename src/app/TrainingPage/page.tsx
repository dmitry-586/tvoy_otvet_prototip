import React from "react";
import Image from "next/image";

export default function Training() {
  return (
    <div className="p-10">
      <h2 className="text-2xl">Обучение</h2>
      <div className="flex flex-col gap-5 mt-5">
        <input
          type="text"
          className="w-[300px] h-[40px] shadow-custom rounded-[20px] outline-none px-5 border border-[#7C3FF9] hover:scale-[1.02] transition-all duration-300"
          placeholder="Введите данные"
        />
        <button
          type="submit"
          className="flex gap-2 w-[225px] h-[40px] bg-[#915DFA] rounded-[20px] justify-center items-center text-white text-sm hover:scale-[1.02] transition-all duration-300"
        >
          <Image
            src="/Header/Subtract.svg"
            alt="button"
            width={15}
            height={15}
          />
          Сохранить
        </button>
      </div>
    </div>
  );
}
