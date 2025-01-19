"use client";

import TableRow from "@/components/PaymentsPage/TableRow";
import { CardProps } from "@/interfaces/interfaces";
import styles from "../../styles/PaymentsPage/PaymentsPage.module.scss";

const Card: React.FC<CardProps> = ({
  title,
  value,
  buttonText,
  onButtonClick,
}) => (
  <div className={styles.cardWrapper}>
    <div className="flex justify-between gap-5 max-[500px]:text-sm">
      <h4>{title}</h4>
      <button
        className="text-[#7C3FF9] max-[1290px]:hidden max-[700px]:flex"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
    <p className="text-2xl max-[500px]:text-xl">{value}</p>
    <button
      className="text-[#7C3FF9] text-start hidden max-[1290px]:flex max-[700px]:hidden"
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  </div>
);

export default function Payments() {
  const amount = -640;
  const amount2 = 1230;

  return (
    <div className="p-10 h-max flex flex-col gap-10 max-[900px]:gap-5 max-[730px]:p-5 max-[700px]:w-full">
      <div className="grid grid-cols-3 gap-10 max-[900px]:gap-5 max-[700px]:grid-cols-1">
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
      <div className="bg-white flex flex-col rounded-[20px] shadow-custom p-5 gap-5 min-h-[400px] min-w-[830px] max-[900px]:min-w-max">
        <h4 className="text-lg">История операций</h4>
        <div>
          <div className="grid grid-cols-[0.5fr,0.8fr,1fr] border-y py-3 max-[900px]:grid-cols-[0.6fr,1fr,0.8fr] max-[500px]:grid-cols-[1fr,0.9fr,1fr] max-[450px]:text-sm">
            <p>Тип</p>
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
