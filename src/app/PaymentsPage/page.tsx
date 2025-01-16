"use client";

import TableRow from "@/components/PaymentsPage/TableRow";
import { CardProps } from "@/interfaces/interfaces";

const Card: React.FC<CardProps> = ({
  title,
  value,
  buttonText,
  onButtonClick,
}) => (
  <div className="bg-white flex flex-col rounded-[20px] shadow-custom p-5 w-[330px] h-min gap-5">
    <div className="flex justify-between gap-5">
      <h4>{title}</h4>
      <button className="text-[#7C3FF9]" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
    <p className="text-2xl">{value}</p>
  </div>
);

export default function Payments() {
  const amount = -640;
  const amount2 = 1230;

  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex gap-10">
        <Card
          title="Текущий тариф"
          value="Бесплатный"
          buttonText="Изменить"
          onButtonClick={() => console.log("Изменить тариф")}
        />
        <Card
          title="Баланс"
          value="0 руб"
          buttonText="Пополнить"
          onButtonClick={() => console.log("Пополнить баланс")}
        />
        <Card
          title="Количество токенов"
          value="1924 шт"
          buttonText="Изменить"
          onButtonClick={() => console.log("Изменить количество токенов")}
        />
      </div>
      <div className="bg-white flex flex-col rounded-[20px] shadow-custom p-5 gap-5 min-h-[400px]">
        <h4 className="text-lg">История операций</h4>
        <div>
          <div className="grid grid-cols-[0.7fr,0.7fr,0.6fr,0.8fr] border-y py-3">
            <p>Тип</p>
            <p>Описание</p>
            <p className="text-center">Сумма (руб)</p>
            <p className="text-center">Дата</p>
          </div>
          <TableRow
            type="Списание"
            description="Оплата работы AI"
            amount={amount}
            date="16.01.2025"
          />
          <TableRow
            type="Пополнение"
            description="Пополнение баланса"
            amount={amount2}
            date="16.01.2025"
          />
        </div>
      </div>
    </div>
  );
}
