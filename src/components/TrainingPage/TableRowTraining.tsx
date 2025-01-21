import { TableRowTrainingProps } from "@/interfaces/interfaces";
import React from "react";

const TableRowTraining: React.FC<TableRowTrainingProps> = ({
  date,
  description,
  title,
}) => {
  return (
    <div className="border-b grid items-center grid-cols-[0.5fr,1fr,0.8fr] py-3 text-[#4A4A6A] max-[860px]:grid-cols-[0.5fr,1.2fr,0.5fr] max-[700px]:text-sm max-[600px]:grid-cols-[1fr,2.2fr] max-[500px]:text-xs">
      <p>{title}</p>
      <div className="text-center flex flex-col gap-3">
        <p>{description}</p>
        <p className="hidden max-[600px]:block">{date}</p>
      </div>
      <p className="text-center max-[600px]:hidden">{date}</p>
    </div>
  );
};

export default TableRowTraining;
