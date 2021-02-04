import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import "../styles/Chat.scss";

function Chat() {
  function formatDate(date) {
    return `${date.getHours().toString()}:${date.getMinutes().toString()}`;
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerInfo">
          <Avatar />
          <h3>Name</h3>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span>
            Eu tenho uma coisa para compartilhar que está me matando.
          </span>
          <span className="chat__timestamp">{formatDate(new Date())}</span>
        </p>
        <p className="chat__message">
          <span>Lek eu sou gay</span>
          <span className="chat__timestamp">{formatDate(new Date())}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span>Eu já sabia lek.</span>
          <span className="chat__timestamp">{formatDate(new Date())}</span>
        </p>
      </div>
      <div className="chat__footer">
        <SentimentVerySatisfiedIcon
          className="chat__smileIcon"
          color="disabled"
        />
        <AttachFileIcon className="chat__footerAttachIcon" />
        <form>
          <input />
          <button></button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
