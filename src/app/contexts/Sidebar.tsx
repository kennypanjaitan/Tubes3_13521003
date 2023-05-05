'use client'
import { useState } from "react";
import HistoryList from "./HistoryList";

const Sidebar = (): JSX.Element => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("kmp");

  const handleAlgorithmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAlgorithm(event.target.value);
  };

  const handleNewChatClick = () => {

  };

  const handleDeleteClick = () => {
    // logic to delete the chat
  };

  return (
    <div className="absolute w-sidebar h-full bg-sidebar-bg left-0">
      {/* Title */}
      <div className="flex items-center justify-center h-20">
        <div className="mt-20 text-text-color text-[64px] font-day ">BKE</div>
      </div>

      <div className="absolute top-[650px] h-2.5 bg-primary-bg"></div>

      {/* Algorithm selection */}
      <div className="absolute top-[650px] h-2.5 bg-primary-bg"></div>      {/* Algorithm selection */}
      <div className="absolute mt-8 ml-6 top-[700px] left-[41px] font-day text-text-color text-[28px]">
        <div className="text-text-color  mb-2">Select Algorithm:</div>
        <div className="flex items-center">
          <input
            type="radio"
            id="kmp"
            name="algorithm"
            value="kmp"
            checked={selectedAlgorithm === "kmp"}
            onChange={handleAlgorithmChange}
          />
          <label htmlFor="kmp" className="ml-2">
            KMP
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="bm"
            name="algorithm"
            value="bm"
            checked={selectedAlgorithm === "bm"}
            onChange={handleAlgorithmChange}
          />
          <label htmlFor="bm" className="ml-2">
            BM
          </label>
        </div>
      </div>

      {/* New Chat button */}
      <div className="my-20 mx-10 ">
        <div className="rounded-md border-primary-color inline-block">
          <button className=" text-[#4D4C47] px-4 py-2 rounded-md text-[24px] font-day bg-[#E3DED5] hover:text-[#BD7637] " onClick={handleNewChatClick}>
            + New Chat
          </button>
        </div>
      </div>

      {/* History Button */}
     <HistoryList/>
    </div>
  );
};

export default Sidebar;
