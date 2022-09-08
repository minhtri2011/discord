import React from "react";
import reliable from "assest/reliable.png";
import star from "assest/star.png";
import { BrowserView, MobileView } from "react-device-detect";

const Reliable = () => {
  return (
    <div className="bg-discord_gray">
      <div className="containerCustom lg:pt-[120px] pt-10 pb-20 grid xl:grid-cols-12 lg:grid-cols-8 grid-cols-4 gap-5">
        <div className="xl:col-start-3 xl:col-end-11 lg:col-span-8 col-span-4 lg:text-center text-left">
          <h2 className="text-[clamp(20px,4vw,40px)] font-extrabold uppercase">
            Reliable tech for staying close
          </h2>
          <p className="mt-6 text-[clamp(16px,2vw,20px)] ">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <img src={reliable} alt="discord" className="w-full col-span-full" />
      </div>
      <div className="containerCustom flex justify-center flex-col items-center xl:pb-[120px] pb-10">
        <img src={star} alt="discord" />
        <h4 className="font-bold text-[32px] mt-[-30px]">
          Ready to start your journey?
        </h4>
        <BrowserView>
          <button className="text-left w-fit h-fit text-xl rounded-[28px] px-[32px] py-[16px] items-center text-white mt-10 bg-discord_blue flex mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download for Windows
          </button>
        </BrowserView>
        <MobileView>
        <button className="text-left w-fit h-fit text-xl rounded-[28px] px-[32px] py-[16px] items-center text-white mt-10 bg-discord_blue flex mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          Download from Google play
          </button>
        </MobileView>
      </div>
    </div>
  );
};

export default Reliable;
