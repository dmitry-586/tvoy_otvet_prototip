import React from "react";
import Image from "next/image";
import TableRowTraining from "@/components/TrainingPage/TableRowTraining";

export default function Training() {
  return (
    <div className="flex flex-col gap-5 h-max p-10 w-full max-[500px]:p-5">
      <h2 className="text-2xl">База знаний</h2>
      <div className="bg-white max-w-[1070px] flex flex-col rounded-[20px] shadow-custom p-5 gap-5 min-h-[400px]">
        <h4 className="text-lg">Записанные данные</h4>
        <div>
          <div className="grid grid-cols-[0.5fr,1fr,0.8fr] border-y py-3 max-[860px]:grid-cols-[0.5fr,1.2fr,0.5fr] max-[600px]:grid-cols-[1fr,2.2fr] max-[450px]:text-sm">
            <p>Заголовок</p>
            <p className="text-center">Описание</p>
            <p className="text-center max-[600px]:hidden">Дата</p>
          </div>
          <TableRowTraining
            title="Заголовок 1"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga dolorum nam eum aperiam debitis alias"
            date="20.01.2025"
          />
          <TableRowTraining
            title="Заголовок 2"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga dolorum"
            date="19.01.2025"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <h4 className="text-lg">Добавить новые данные</h4>
        <div className="flex flex-col gap-3 text-[#212134]">
          <p>Заголовок</p>
          <input
            className="w-[440px] h-[40px] shadow-custom p-3 rounded-[20px] outline-none px-5 border border-[#7C3FF9] hover:scale-[1.02] transition-all duration-300 overflow-wrap break-word resize-y max-[500px]:w-full"
            placeholder="Придумайте название..."
          />
        </div>
        <div className="flex flex-col gap-3 text-[#212134]">
          <p>Описание</p>
          <textarea
            className="w-[440px] h-[140px] shadow-custom p-3 rounded-[20px] outline-none px-5 border border-[#7C3FF9] hover:scale-[1.02] transition-all duration-300 overflow-wrap break-word resize-y max-[500px]:w-full"
            placeholder="Введите данные..."
          />
        </div>
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
