"use client";

import { TableRowProps } from "@/interfaces/interfaces";

const TableRow: React.FC<TableRowProps> = ({
  type,
  description,
  amount,
  date,
}) => (
  <div className="grid grid-cols-[0.7fr,0.7fr,0.6fr,0.8fr] py-3 text-[#4A4A6A]">
    <p>{type}</p>
    <p>{description}</p>
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
