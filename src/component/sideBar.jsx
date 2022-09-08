import { AiFillCompass, AiOutlineDownload } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import DiscordMiniIcon from "./svg/discordIcon";

const SideBar = () => {
  return (
    <div className="w-[72px] pt-3 bg-discord_back_gray h-full overflow-y-auto scrollbar-hide">
      <div className="w-full justify-center flex">
        <div className="cursor-pointer mb-3 w-12 h-12 rounded-2xl bg-discord_purple flex items-center justify-center">
          <DiscordMiniIcon white />
        </div>
      </div>
      <div className="mb-3 mx-auto bg-gray-700 h-[2px] w-2/5"></div>
      <div className="flex flex-col items-center">
        <div className="rounded-[50%] hover:rounded-2xl transition-all duration-200 w-12 h-12 bg-white mb-3 relative after:contents-['*'] after:absolute after:left-[-10px] after:top-[50%] after:translate-y-[-50%] after:bg-white after:h-4 after:w-1 after:rounded-r-md [&.active:after]:h-full "></div>
        <div className="rounded-[50%] hover:rounded-2xl transition-all duration-200 w-12 h-12 bg-white mb-3 relative after:contents-['*'] after:absolute after:left-[-10px] after:top-[50%] after:translate-y-[-50%] after:bg-white after:h-4 after:w-1 after:rounded-r-md [&.active:after]:h-full "></div>
        <div className="rounded-[50%] hover:rounded-2xl transition-all duration-200 w-12 h-12 bg-white mb-3 relative after:contents-['*'] after:absolute after:left-[-10px] after:top-[50%] after:translate-y-[-50%] after:bg-white after:h-4 after:w-1 after:rounded-r-md [&.active:after]:h-full "></div>
        <div className="rounded-[50%] hover:rounded-2xl transition-all duration-200 w-12 h-12 bg-white mb-3 relative after:contents-['*'] after:absolute after:left-[-10px] after:top-[50%] after:translate-y-[-50%] after:bg-white after:h-4 after:w-1 after:rounded-r-md [&.active:after]:h-full "></div>
        <div className="rounded-[50%] hover:rounded-2xl transition-all duration-200 w-12 h-12 bg-white mb-3 relative after:contents-['*'] after:absolute after:left-[-10px] after:top-[50%] after:translate-y-[-50%] after:bg-white after:h-4 after:w-1 after:rounded-r-md [&.active:after]:h-full "></div>
      </div>
      <div className="mb-3 mx-auto bg-gray-700 h-[2px] w-2/5"></div>
      <div className="flex flex-col items-center">
        <div className="cursor-pointer transition-all ease-in-out rounded-[50%] hover:rounded-2xl hover:bg-green-800  [&>svg]:hover:fill-white w-12 h-12 bg-white mb-3 flex items-center justify-center duration-200">
          <MdOutlineAdd className="w-6 h-6 [path]:w-full fill-green-800 transition-all ease-in-out duration-200" />
        </div>
        <div className="cursor-pointer transition-all ease-in-out rounded-[50%] hover:rounded-2xl hover:bg-green-800  [&>svg]:hover:fill-white w-12 h-12 bg-white mb-3 flex items-center justify-center duration-200">
          <AiFillCompass className="w-6 h-6 [path]:w-full fill-green-800 transition-all ease-in-out duration-200" />
        </div>
      </div>
      <div className="mb-3 mx-auto bg-gray-700 h-[2px] w-2/5"></div>
      <div className="flex flex-col items-center">
        <div className="cursor-pointer transition-all ease-in-out rounded-[50%] hover:rounded-2xl hover:bg-green-800  [&>svg]:hover:fill-white w-12 h-12 bg-white mb-3 flex items-center justify-center duration-200">
          <AiOutlineDownload className="w-6 h-6 [path]:w-full fill-green-800 transition-all ease-in-out duration-200" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
