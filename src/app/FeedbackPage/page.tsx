"use client";

import React, { useState } from "react";
import FeedbackChat from "../../components/FeedbackPage/FeedbackChat";
import FeedbackInfo from "../../components/FeedbackPage/FeedbackInfo/FeedbackInfo";
import FeedbackLayoutLeft from "@/components/FeedbackPage/FeedbackLayoutLeft";

const FeedbackPage = () => {
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [isCommunication, setIsCommunication] = useState(false);

  const handleClickTrue = () => {
    setIsCommunication(true);
  };

  const handleClickFalse = () => {
    setIsCommunication(false);
  };

  const toggleView = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <>
      <FeedbackLayoutLeft
        isCommunication={isCommunication}
        handleClick={handleClickTrue}
      />
      {!isCommunication ? (
        <>
          <div className="flex-1 flex h-screen-minus-72 justify-center items-center ml-[--feedback-layout-left-width] bg-[#EAEAEF]">
            <p className="text-[#4A4A6A] bg-white rounded-full px-3 py-[10px] text-sm">
              Выберите чат, чтобы начать диалог
            </p>
          </div>
        </>
      ) : isChatVisible ? (
        <FeedbackChat
          handleClick={toggleView}
          handleLayoutClick={handleClickFalse}
        />
      ) : (
        <FeedbackInfo handleClick={toggleView} />
      )}
    </>
  );
};

export default FeedbackPage;
