import React from "react";
const HomeHero = () => {
  return (
    <section>
      <div className="pt-12 pb-24  max-w-[79.188rem] mx-auto px-4 flex xl:gap-10 max-sm:gap-10 max-lg:flex-col">
        <div className="flex-1">
          <img
            src="/assets/svg/hero-sticker.svg"
            className="h-[3.813rem] w-[4.62rem]"
            alt=""
          />
          <div className="sm:pt-14 pt-6">
            <h2 className="md:text-6xl text-4xl font-black text-secondary mb-5">
              Divorce without drama
            </h2>

            <p className=" leading-7 sm:text-xl text-sm text-secondary mb-12">
              Divorce Without Drama provides a stress-free, fair, and efficient
              approach to separation. We help you navigate the process with
              clarity, dignity, and peace of mind—ensuring a smooth transition
              into your next chapter.
            </p>
            <div className="flex items-center gap-4 max-sm:flex-col">
              <button className="px-5 py-[1.12rem] max-sm:w-full rounded-full xl:text-sm text-xs bg-green-200 text-white text-center border border-green-200 hover:bg-white hover:border-green-200 hover:text-green-200">
                Schedule a Consult with Julie
              </button>
              <button className="px-5 py-[1.12rem] max-sm:w-full rounded-full  xl:text-sm text-xs bg-primary text-white text-center border border-green-200 hover:bg-white hover:border-primary hover:text-primary">
                Quick Question? Call The Office Now!
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="xl:max-w-[39.56rem] max-w-[32rem] sm:h-[39.56rem] h-96 max-lg:mx-auto">
            <img
              src="assets/image/hero-right.png"
              className="h-full w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        src="/assets/image/hero-tag.png"
        className="h-36 rotate-[17.49deg] -left-10 top-1/2 absolute w-full "
        alt=""
      />
    </section>
  );
};

export default HomeHero;
