import React from "react";
import fandom from "assest/fandom.png";

const Fandom = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="2000"
      className="containerCustom grid lg:grid-cols-8 xl:grid-cols-12 py-20 xl:py-[120px] gap-x-5"
    >
      <img
        src={fandom}
        alt="discord"
        className="xl:col-span-7 lg:col-span-4 w-full"
      />
      <div className="xl:col-start-9 lg:col-span-4 xl:col-end-13 mt-5">
        <h2 className="text-[clamp(20px,4vw,40px)] lg:text-[48px] font-bold leading-[120%] lg:whitespace-pre-wrap">
          From few to a fandom
        </h2>
        <p className="text-[clamp(16px,2vw,20px)] leading-[1.625] mt-6 ">
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </p>
      </div>
    </div>
  );
};

export default Fandom;
