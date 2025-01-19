"use client";

import { TableRowProps } from "@/interfaces/interfaces";

const TableRow: React.FC<TableRowProps> = ({ type, amount, date }) => (
  <div className="grid grid-cols-[0.5fr,0.8fr,1fr] py-3 text-[#4A4A6A] max-[900px]:grid-cols-[0.6fr,1fr,0.8fr] max-[500px]:grid-cols-[1fr,0.9fr,1fr] max-[500px]:text-sm max-[400px]:max-[500px]:text-xs">
    <p>{type}</p>
    <Amount amount={amount} />
    <p className="text-center">{date}</p>
  </div>
);

export default TableRow;

interface AmountProps {
  amount: number;
}
const Amount: React.FC<AmountProps> = ({ amount }) => (
  <p
    className={`text-center ${amount < 0 ? "text-red-700" : "text-green-700"}`}
  >
    {amount > 0 ? `+${amount}` : amount}
  </p>
);
