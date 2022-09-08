import React from "react";
import hanging from "assest/hanging.png";

const Hanging = () => {
  return (
    <div className="bg-discord_gray">
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="2000"
        className="containerCustom grid lg:grid-cols-8 xl:grid-cols-12 py-20 xl:py-[120px] gap-x-5"
      >
        <img
          src={hanging}
          alt="discord"
          className="xl:col-start-7 xl:col-end-13 lg:col-span-4 w-full lg:order-2"
        />
        <div className="xl:col-span-4 mt-5 lg:order-1 lg:col-span-4">
          <h2 className="text-[clamp(20px,4vw,40px)] lg:text-[48px] font-bold leading-[120%] lg:whitespace-pre-wrap">
            Where hanging out is easy
          </h2>
          <p className="text-[clamp(16px,2vw,20px)] leading-[1.625] mt-6 ">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hanging;
