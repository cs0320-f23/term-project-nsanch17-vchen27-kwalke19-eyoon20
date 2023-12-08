import React from "react";
import "../../style/App.css";
import "../../style/Messaging.css";
import Photo from "../../assets/photo.png";
import SendIcon from "../../assets/sendicon.png"
import { useState } from "react";

import { Dispatch, SetStateAction } from "react";

// interface MsgBarProps {
//   value: string;
//   setValue: Dispatch<SetStateAction<string>>;
//   ariaLabel: string;
// }
export function MessageRegistry(){
  // export function MessageRegistry({ value, setValue, ariaLabel }: MsgBarProps) {
  // const [editableContent, setEditableContent] = useState(value);

  // const handleBlur = () => {
  //   setValue(editableContent);
  // };

  return (
    <div className="elms">
      <span
        contentEditable={true}
        className="messageBox"
        // onBlur={handleBlur}
        data-placeholder="Type your message here..."
        // onInput={(ev) => setEditableContent(ev.currentTarget.textContent || "")}
        // aria-label={ariaLabel}
      >
        {/* {editableContent} */}
      </span>
      <img className="photoIcon" src={Photo} />
      <img className="sendIcon" src={SendIcon} />
    </div>
  );
}
