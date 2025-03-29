import React from "react";

const FeatureList = () => {
  return (
    <section className="max-w-[61.62rem] mx-auto px-4  sm:pb-24 pb-16">
      <h5 className="text-center mb-6 text-secondary text-3xl fw-bold">
        Divorce is intimidating and overwhelming.
      </h5>
      <h6 className="text-center mb-1 text-secondary text-3xl fw-bold">
        I understand.
      </h6>
      <div className="h-[2px] bg-green-200 w-36 mx-auto mb-7"></div>
      <div className="flex justify-between gap-8 mb-14 max-md:flex-col">
        <ul className="flex-1">
          {[
            "You will never be ready. You will never want a divorce.",
            "If you can save your marriage, do it!",
            "But if you are getting a divorce, feel overwhelmed, and don’t know where to start, give me a call.",
            "It’s all I do, and I do it really well.",
            "My motto is, “Divorce without drama,” because while divorce is painful  – it doesn’t have to get ugly.",
          ].map((ele) => (
            <li className="flex gap-5 items-center text-base">
              <img src="/assets/svg/checkmark.svg" alt="" className="h-3 w-3" />
              {ele}
            </li>
          ))}
        </ul>
        <ul className="flex-1">
          {[
            "This is about your retirement, your kids, and your life.",
            "You don’t want to “screw” your spouse, but you don’t want to be taken advantage of, either.",
            "You know you need an attorney, but you’ve heard the horror stories of attorneys billing outrageous fees and pitting one against the other. But how do you move forward?",
            "There’s a better way through divorce mediation.",
          ].map((ele) => (
            <li className="flex gap-5 items-center text-base">
              <img src="/assets/svg/checkmark.svg" alt="" className="h-3 w-3" />
              {ele}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-3xl mb-14 mx-auto border relative border-green-200 rounded-2xl pt-16 pb-14 w-full px-4">
        <p className="text-secondary text-xl leading-7 text-center max-w-[34.56rem] mx-auto">
          My ex-husband and I wanted someone that would fairly protect both of
          our interests. We didn’t want to argue, and we wanted things to go
          quickly and efficiently. Honestly, things couldn’t have gone better or
          faster.
        </p>

        <img
          src="/assets/svg/in-quate.svg"
          className="w-7 h-6 absolute sm:top-14 top-3 md:left-[84px] left-10"
          alt=""
        />
        <img
          src="/assets/svg/out-quate.svg"
          className="w-7 h-6 absolute sm:bottom-[76px] bottom-3 md:right-24 right-10"
          alt=""
        />
      </div>
      <button className="px-5 py-[1.12rem]  items-center justify-center mx-auto flex max-sm:w-full rounded-full xl:text-sm text-xs bg-green-200 text-white text-center border border-green-200 hover:bg-white hover:border-green-200 hover:text-green-200">
        Getting Divorced? Start Here
      </button>
    </section>
  );
};

export default FeatureList;
