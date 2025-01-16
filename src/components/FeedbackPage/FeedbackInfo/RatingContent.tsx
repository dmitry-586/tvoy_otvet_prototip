import { data } from "../../../../public/data";
import PieChartItem from "../../graphs/PieChart/PieChart";
import FeedbackRating from "../FeedbackRating";

const RatingContent = () => {
  return (
    <div className="w-full flex px-5 justify-center">
      <div className="flex gap-2 max-[1430px]:flex-col">
        <PieChartItem
          title="Темы негатива"
          data={data}
          className="flex-col max-[1430px]:flex-row max-[1150px]:flex-col"
          wrapperStyles="max-w-[420px] max-h-none"
          headerStyles="py-0 pb-4 text-xl"
        />
        <div className="flex flex-col gap-3">
          <FeedbackRating ratingCount="5" recallCount="30" />
          <div className="bg-white rounded-[20px] p-5 flex flex-col gap-3 flex-1">
            <p className="text-xl">Процент негатива</p>
            <p className="text-3xl font-semibold">6.2 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingContent;
