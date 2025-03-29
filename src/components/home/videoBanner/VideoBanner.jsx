import React from "react";

const VideoBanner = () => {
  return (
  <section className="bg-[#FEF8F8]">
    <div className="max-w-4xl px-4 mx-auto py-14">
      <h6 className="text-3xl font-bold text-secondary mb-10 text-center">
        How can I help you?
      </h6>
      <div className="relative w-full h-[25.87rem] rounded-2xl overflow-hidden">
        <img
          src="/assets/image/video-img.png"
          className="w-full h-full absolute left-0 top-0"
          alt=""
        />

        <button className="rounded-full border-2 border-white flex items-center justify-center h-14 w-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent focus:outline-none z-10">
          <span className="h-11 w-11 rounded-full bg-white flex justify-center items-center">
            <img
              src="/assets/svg/play-btn.svg"
              alt="play-button"
              className="h-5 w-5"
            />
          </span>
        </button>

        <div className=" absolute right-[1.37rem] top-1/2  -translate-y-1/2 flex  flex-col gap-5">
          {[
            { list: "A", name: "Divorce or Separation" },
            { list: "B", name: "Post-Divorce Parenting Time" },
            { list: "C", name: "Post-Divoce Child Support" },
            { list: "D", name: "Parenting Time Co-ordination" },
          ].map((ele) => (
            <div
              className="relative py-2 px-3 flex gap-3 items-center 
                rounded-full 
                bg-white/20 backdrop-blur-[12.9px] 
                border border-green-200
                bg-clip-border 
                shadow-md"
            >
              <span className="bg-green-200 shrink-0 rounded-full h-5 w-5 flex items-center justify-center text-white text-[10px] font-black">
                {ele.list}
              </span>
              <p className="text-white text-sm font-semibold">{ele.name}</p>

              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-[#858D38] to-[#858D3814] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default VideoBanner;
