import { IFeedbackMessage } from "@/interfaces/interfaces";
import Image from "next/image";
import styles from "../../styles/Feedback/Feedback.module.scss";

const FeedbackMessage: React.FC<IFeedbackMessage> = ({ right }) => {
  return (
    <div
      className={`${styles.feedbackMessageWrapper} ${right ? "ml-auto" : ""}`}
    >
      <div
        className={`max-w-[395px] bg-white rounded-[20px] p-3 pl-4 flex flex-col items-end gap-2 relative ${
          right ? "" : "order-1"
        }`}
      >
        <p
          className={`pb-[6px] ${styles.feedbackMessageText} ${
            right ? "" : "order-0"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur. Ante arcu et ultrices faucibus
          suspendisse vulputate amet facilisis.
        </p>
        <div className="items-end flex absolute right-[10px] bottom-[5px] gap-1">
          <p className="text-[#838383] text-[10px]">13:02</p>
          <Image
            src="/feedback/DoubleTickForMessage.svg"
            alt="tick"
            width={15}
            height={15}
            className={`mt-auto ${right ? "" : "hidden"}`}
          />
        </div>
      </div>
      <Image
        src="/feedback/messageAvatar.svg"
        alt="avatar"
        width={48}
        height={48}
        className="max-[800px]:hidden"
      />
    </div>
  );
};

export default FeedbackMessage;
