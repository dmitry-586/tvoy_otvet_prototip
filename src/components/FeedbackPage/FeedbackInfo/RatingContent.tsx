import { data } from "../../../../public/data";
import PieChartItem from "../../graphs/PieChart/PieChart";
import FeedbackRating from "../FeedbackRating";

const RatingContent = () => {
  return (
    <div className="w-full flex px-5 justify-center max-[400px]:px-[10px]">
      <div className="flex gap-2 max-[1430px]:flex-col">
        <PieChartItem
          title="Темы негатива"
          data={data}
          className="flex-col max-[1430px]:flex-row max-[1150px]:flex-col"
          wrapperStyles="max-w-[420px] max-h-none min-w-[310px]"
          headerStyles="py-0 pb-4 text-xl"
        />
        <div className="flex flex-col gap-2 max-[1430px]:flex-row max-[870px]:flex-col max-[750px]:flex-row max-[600px]:flex-col">
          <FeedbackRating ratingCount="5" recallCount="30" className="min-w-[284px] max-[870px]:flex-1 max-[870px]:w-auto" />
          <div className="bg-white min-w-[214px] rounded-[20px] p-5 flex flex-col gap-3 flex-1 max-[1430px]:h-min">
            <p className="text-xl">Процент негатива</p>
            <p className="text-3xl font-semibold">6.2 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingContent;
