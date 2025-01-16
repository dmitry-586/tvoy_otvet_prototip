import Image from "next/image";
import React from "react";

interface IFeedbackRating {
  ratingCount: string;
  recallCount: string;
}

const FeedbackRating: React.FC<IFeedbackRating> = ({
  ratingCount,
  recallCount,
}) => {
  const stars = [5, 4, 3, 2, 1];
  const rating = 4.4;

  return (
    <div className="w-[284px] leading-none bg-white rounded-[20px] p-5 flex justify-center max-[1150px]:w-full">
      <div className="flex flex-col gap-5 w-full">
        <div className="border-b w-full pb-4 border-[#F5F6F7]">
          <h3 className="text-xl">Оценки</h3>
        </div>
        <div className="flex flex-col gap-3">
          <p>Средняя оценка</p>
          <div className="flex gap-2 items-center">
            <p className="text-2xl">{rating} из 5</p>
            <div className="flex gap-1">
              {Array.from({ length: Math.round(Number(rating)) }).map(
                (_, index) => (
                  <Image
                    key={`filled-${index}`}
                    src="/feedback/star.svg"
                    alt="filled star"
                    width={20}
                    height={20}
                  />
                )
              )}
              {Array.from({ length: 5 - Math.round(Number(rating)) }).map(
                (_, index) => (
                  <Image
                    key={`empty-${index}`}
                    src="/feedback/starEmpty.svg"
                    alt="empty star"
                    width={22}
                    height={22}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-5 text-[#00000061]">
          <p>Оценки: {ratingCount}</p>
          <p>Отзывов: {recallCount}</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          {stars.map((filledStars) => (
            <div key={filledStars} className="flex text-[#00000061] gap-2">
              <div className="flex gap-1">
                {Array.from({ length: filledStars }).map((_, index) => (
                  <Image
                    key={`filled-${filledStars}-${index}`}
                    src="/feedback/star.svg"
                    alt="filled star"
                    width={16}
                    height={16}
                  />
                ))}
                {Array.from({ length: 5 - filledStars }).map((_, index) => (
                  <Image
                    key={`empty-${filledStars}-${index}`}
                    src="/feedback/starEmpty.svg"
                    alt="empty star"
                    width={16}
                    height={16}
                  />
                ))}
              </div>
              <p>128 046</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackRating;
