import React from "react";
import "../../style/App.css";
import "../../style/Messaging.css";
import Photo from "../../assets/photo.png";
import SendIcon from "../../assets/sendicon.png"
import { useState } from "react";

import { Dispatch, SetStateAction } from "react";


export function MessageRegistry(){
  return (
    <div className="elms">
      <span
        contentEditable={true}
        className="messageBox"
        data-placeholder="Type your message here..."
      >
      </span>
      <img className="photoIcon" src={Photo} />
      <img className="sendIcon" src={SendIcon} />
    </div>
  );
}
