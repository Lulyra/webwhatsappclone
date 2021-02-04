import React from "react";
import "../styles/SidebarChat.scss";
import { Avatar } from "@material-ui/core";

function SidebarChat(props) {
  return (
    <div className="sidebarChat">
      <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQEXNiWjsuRf8w/profile-displayphoto-shrink_400_400/0?e=1608768000&v=beta&t=LZxVT6wPtnGFp7VhurysyrjHz1sDekYRFvY_c4EDTRM" />
      <div className="sidebarChat__info">
        <h2>{props.name}</h2>
        <p>{props.latestMessage}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
