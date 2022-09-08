import { storage } from "firebase";
import { ref } from "firebase/storage";
import React from "react";
import { AiOutlineNumber } from "react-icons/ai";

const ChannelsPanel = () => {
  const handleAddChannels = () => {
    // Points to the root reference
    const storageRef = ref(storage);

    // Points to 'images'
    const imagesRef = ref(storageRef, "images");

    // Points to 'images/space.jpg'
    // Note that you can use variables to create child values
    const fileName =
      '      "https://ichef.bbci.co.uk/news/976/cpsprodpb/DD91/production/_125912765_nasas-webb-reveals-cosmic-cliffs-glittering-landscape-of-star-birth_52211883534_o.png"';
    const spaceRef = ref(imagesRef, fileName);

    // File path is 'images/space.jpg'
    const path = spaceRef.fullPath;

    // File name is 'space.jpg'
    const name = spaceRef.name;

    // Points to 'images'
    const imagesRefAgain = spaceRef.parent;
  };

  return (
    <div className="w-[240px] bg-discord__light_gray scrollbar-hide">
      <div className="px-3 py-4 shadow-md text-white font-bold truncate">
        Chanels
      </div>
      <div className="px-2">
        <div className="flex items-center justify-left hover:bg-zinc-700 py-[7px] rounded-md transition-all duration-100 cursor-pointer [&.active]:bg-zinc-700 px-2">
          <AiOutlineNumber className="fill-gray-500" />
          <span className="ml-2 text-gray-300">Name</span>
        </div>
        <div className="flex items-center justify-left hover:bg-zinc-700 py-[7px] rounded-md transition-all duration-100 cursor-pointer [&.active]:bg-zinc-700 px-2">
          <AiOutlineNumber className="fill-gray-500" />
          <span className="ml-2 text-gray-300">Name</span>
        </div>
        <div className="flex items-center justify-left hover:bg-zinc-700 py-[7px] rounded-md transition-all duration-100 cursor-pointer [&.active]:bg-zinc-700 px-2">
          <AiOutlineNumber className="fill-gray-500" />
          <span className="ml-2 text-gray-300" onClick={ChannelsPanel}>Click</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelsPanel;
