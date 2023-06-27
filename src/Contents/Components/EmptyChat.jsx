import React from 'react';
import EmptyChatSVG from "../../assets/SVGs/empty-selection.svg"

function EmptyChat() {
  return (
    <div className="flex flex-row items-center justify-center grow h-full">
      <div className="flex flex-col justify-center items-center rounded-2xl px-56 py-28">
        <img src={EmptyChatSVG} alt="empty-chat"></img>
        <h1 className="text-lg">Please select person to see conversation</h1>
      </div>
    </div>
  )
}

export default EmptyChat