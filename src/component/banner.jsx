import React from "react";
import wave from "assest/wave.png";
import man from "assest/man.png";
import community from "assest/community.png";

const Banner = () => {
  return (
    <div className="relative lg:absolute top-0 left-0 h-full w-full overflow-hidden z-0">
      <img
        src={wave}
        alt=""
        className="absolute top-auto bottom-0 h-full hidden lg:block w-full"
      />
      <img
        src={man}
        alt=""
        className="lg:absolute bottom-[-90px] ml-[-80px] xl:max-w-[auto] xl:ml-[-1030px] left-0 xl:left-1/2 block xl:block lg:hidden lg:w-[689px] w-full h-fit max-h-[352px]"
      />
      <img
        src={community}
        alt="discord"
        className="absolute hidden lg:block bottom-0 left-1/2 xl:ml-[370px] lg:ml-[-70px]"
      />
    </div>
  );
};

export default Banner;
