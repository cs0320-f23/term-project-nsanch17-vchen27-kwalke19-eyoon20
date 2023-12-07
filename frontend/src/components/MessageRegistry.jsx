import React from "react";
import "../style/App.css";
import "../style/Messaging.css";
import Photo from "../assets/photo.png";

import { Dispatch, SetStateAction } from "react";

// interface SearchBarProps {

//   setValue: Dispatch<SetStateAction<string>>;
//   ariaLabel: string;
// }

export function MessageRegistry() {
  // (
  //   {
  // //   value,
  //   setValue,
  //   ariaLabel,
  // }: SearchBarProps) {
  return (
    <div className="elms">
      <span
        contentEditable="true"
        type="text"
        className="messageBox"
        //   value={value}
        data-placeholder="Type your message here..."

        // onChange={(ev) => setValue(ev.target.value)}
        // aria-label={ariaLabel}
      ></span>
      <img className="photoIcon" src={Photo} />
    </div>
  );
}
