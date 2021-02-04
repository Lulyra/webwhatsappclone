import React from "react";
import "../styles/Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";

function Sidebar() {

  

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars0.githubusercontent.com/u/43993541?s=400&u=41ccbc998e0655b642a5efcdc4d6e55479fe4863&v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat name="Bernardo" latestMessage="Lek eu sou gay" />
      </div>
    </div>
  );
}

export default Sidebar;
