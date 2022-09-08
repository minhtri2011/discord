import { ChannelsPanel, Chat, SideBar } from "component";
import React from "react";

const Channels = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex">
      <SideBar />
      <ChannelsPanel/>
      <Chat/>
    </div>
  );
};

export default Channels;
