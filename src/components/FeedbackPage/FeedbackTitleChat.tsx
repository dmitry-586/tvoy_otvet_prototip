import Image from "next/image";

interface IFeedbackLayoutLeft {
  handleCLick: () => void;
}

const FeedbackTitleChat: React.FC<IFeedbackLayoutLeft> = ({ handleCLick }) => {
  return (
    <section
      onClick={handleCLick}
      className="flex gap-[10px] px-5 py-[10px] border-l-2 border-transparent cursor-pointer border-left-half hover:bg-[#9747FF1A]"
    >
      <Image
        src="/feedback/CardAvatar.svg"
        alt="avatar"
        width={50}
        height={50}
      />
      <div className="flex-1 overflow-hidden flex flex-col justify-center">
        <p className="text-[#212134]">Fedor Bodrov</p>
        <p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#4A4A6A] text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur. Consectetur enim amet dolor
          blandit proin venenatis mi in. Venenatis massa blandit diam tortor
          mattis consequat. Senectus neque vel fames et et. Вenenatis duис quis
          congue enim.
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-[#4A4A6A]">12:22</p>
        <Image
          className="mt-[17px]"
          src="/feedback/doubleTick.svg"
          alt="tick"
          width={16}
          height={8}
        />
      </div>
    </section>
  );
};

export default FeedbackTitleChat;
