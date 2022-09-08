import React from "react";
import usflag from "assest/usFlag.png";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import DiscordIcon from "./svg/discord";

const Footer = () => {
  return (
    <div className="bg-discord_black_text pt-20 pb-[64px] text-white">
      <div className="containerCustom">
        <div className="grid gap-5 xl:grid-cols-12 lg:grid-cols-8 grid-cols-4">
          <div className=" col-span-4 xl:col-span-3 lg:row-span-2 mb-[56px]">
            <h4 className="text-discord_purple uppercase font-extrabold leading-[95%] text-[32px]">
              Imagine a place
            </h4>
            <div className="flex items-center mt-6">
              <img src={usflag} alt="discord" className="w-6 h-4" />
              <span className="ml-2">English, USA</span>
            </div>
            <div className="flex items-center mt-6 space-x-6 [&>svg]:w-6 [&>svg]:h-6">
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <AiFillFacebook />
              <AiFillYoutube />
            </div>
          </div>
          <div className="mb-[56px] lg:col-span-1 lg:row-span-2 xl:row-span-1 hidden lg:block"></div>
          <div className="mb-[56px] col-span-2">
            <h5 className="text-discord_blue">Product</h5>
            <p className="mt-2">Download</p>
            <p className="mt-2">Nitro</p>
            <p className="mt-2">Status</p>
          </div>
          <div className="mb-[56px] col-span-2">
            <h5 className="text-discord_blue">Company</h5>
            <p className="mt-2">About</p>
            <p className="mt-2">Jobs</p>
            <p className="mt-2">Branding</p>
            <p className="mt-2">Newsroom</p>
          </div>
          <div className="mb-[56px] col-span-2">
            <h5 className="text-discord_blue">Resources</h5>
            <p className="mt-2">College</p>
            <p className="mt-2">Support</p>
            <p className="mt-2">Safety</p>
            <p className="mt-2">Blog</p>
            <p className="mt-2">Feedback</p>
            <p className="mt-2">Developers</p>
            <p className="mt-2">StremKit</p>
          </div>
          <div className="mb-[56px] col-span-2">
            <h5 className="text-discord_blue">Policies</h5>
            <p className="mt-2">Terms</p>
            <p className="mt-2">Privacy</p>
            <p className="mt-2">Cookie Settings</p>
            <p className="mt-2">Guidelines</p>
            <p className="mt-2">Acknowledgements</p>
            <p className="mt-2">Lines</p>
            <p className="mt-2">Moderation</p>
          </div>
        </div>
        <hr className="border-discord_blue mb-8" />
        <div className="flex justify-between">
          <DiscordIcon />
          <button className="bg-discord_purple text-[14px] leading-6 font-medium rounded-[40px] py-[7px] px-[16px]">
            Open Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
