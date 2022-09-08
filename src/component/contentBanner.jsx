import { BrowserView, MobileView } from "react-device-detect";

const ContentBanner = () => {
  return (
    <div className="grid relative lg:grid-cols-8 xl:grid-cols-12 z-[1] containerCustom py-[40px] lg:py-[120px] xl:text-center lg:text-left">
      <div className="xl:col-start-3 xl:col-end-11 lg:col-start-1 lg:col-end-6">
        <h1 className="text-[clamp(24px,5vw,44px)] leading-8 lg:leading-[50px] alfaFont tracking-widest  font-bold uppercase lg:text-[50px] text-white">
          Imagine a place...
        </h1>
        <p className="mt-[40px] text-white text-[clamp(16px,2vw,20px)] ">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="flex justify-start lg:items-start xl:justify-center items-center">
          <BrowserView className="flex flex-wrap xl:flex-row lg:flex-col mt-6 justify-center">
            <button className="text-left w-fit h-fit text-xl rounded-[28px] px-[32px] py-[16px] mt-4 items-center bg-white flex mr-6">
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
            <button className="text-left w-fit h-fit text-xl inline-block rounded-[28px] px-[32px] mt-4 py-[16px] bg-black text-white">
              Open Discord in your Browser
            </button>
          </BrowserView>
          <MobileView className="mt-6">
            <button className="text-left w-fit h-fit text-xl rounded-[28px] px-[32px] py-[16px] items-center bg-white flex mr-6">
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
              Download from Google Play
            </button>
          </MobileView>
        </div>
      </div>
    </div>
  );
};

export default ContentBanner;
