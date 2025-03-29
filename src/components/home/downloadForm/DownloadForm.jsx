import React from "react";

const DownloadForm = () => {
  return (
    <div className="sm:pt-20 pt-10 sm:pb-24 pb-14 max-w-[63.063rem] mx-auto px-4 flex justify-between max-md:flex-col gap-10 ">
      <div className="max-w-72 h-[26.188rem] shrink-0 max-md:mx-auto">
        <img src="/assets/image/book-image.png" className=" h-full w-full" alt="" />
      </div>
      <div className="">
        <h5 className="leading-7 text-xl text-secondary font-bold mb-5">
          Divorce without Drama is the perfect guide for anyone facing a divorce
          and the roller-coaster “year of chaos” that follows.
        </h5>
        <p className="text-sm text-secondary leading-5 mb-5">
          In Divorce without Drama, you’ll be shown step-by-step methods for
          valuing and dividing of assets/liabilities, tips on retirement
          accounts, how to handle child and spousal support, and suggestions for
          custody and parenting time schedules for children. Julie’s direct
          approach is a quick read that tells you what you need to know to take
          care of yourself and your family in this difficult time.
        </p>
        <div className="mb-8">
          <h6 className="text-xl leading-7 font-black mb-3.5">
            Download "Divorce without Drama," for free:
          </h6>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullname"
                className=" text-secondary text-xs leading-5"
              >
                First Name
              </label>
              <input
                type="text"
                id="fullname"
                className=" border-[0.4px] h-11 p-3 border-secondary rounded-lg outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastname"
                className=" text-secondary text-xs leading-5"
              >
                Last Name
              </label>
              <input
              id="lastname"
                type="text"
                className=" border-[0.4px] h-11 p-3 border-secondary rounded-lg outline-none"
              />
            </div> <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className=" text-secondary text-xs leading-5"
              >
                Email
              </label>
              <input
              id="email"
                type="email"
                className=" border-[0.4px] h-11 p-3 border-secondary rounded-lg outline-none"
              />
            </div>
          </div>
        </div>
        <button className="px-6 py-2 max-sm:w-full rounded-full sm:text-base text-sm bg-green-200 text-white text-center border border-green-200 hover:bg-white hover:border-green-200 hover:text-green-200">
        Submit
            </button>
      </div>
    </div>
  );
};

export default DownloadForm;
