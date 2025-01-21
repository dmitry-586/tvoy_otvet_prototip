import FeedbackTitleChat from "./FeedbackTitleChat";
import FeedbackFilter from "./FeedbackFilter";
import styles from "../../styles/Feedback/Feedback.module.scss";
import { IFeedbackLayoutLeft } from "@/interfaces/interfaces";

const FeedbackLayoutLeft: React.FC<IFeedbackLayoutLeft> = ({
  handleClick,
  isCommunication,
}) => {
  const feedbackCount = 15;

  return (
    <div
      className={`${styles.FeedbackLayoutLeftWrapper} ${
        isCommunication ? styles.hidden : "flex flex-col"
      }`}
    >
      <div className="flex flex-col sticky top-0 z-10">
        <FeedbackFilter />
      </div>
      <section className="mt-[10px] flex-1 flex flex-col bg-[#F6F6F9]">
        {Array.from({ length: feedbackCount }, (_, index) => (
          <FeedbackTitleChat handleCLick={handleClick} key={index} />
        ))}
      </section>
    </div>
  );
};

export default FeedbackLayoutLeft;
