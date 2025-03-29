import React from "react";
import Button from "../../button/Button";

const TestiMonial = () => {
  return (
    <section className="max-w-[90rem] mx-auto relative sm:pb-24 pb-14">
      <div className="max-w-4xl px-4 mx-auto relative sm:mb-16 mb-8">
        <div className="review-bg sm:py-16 py-8 sm:px-14 px-7 lg:h-[25.813rem]">
          <p className="sm:text-xl text-sm font-semibold mb-2 text-black sm:leading-9">
            Divorce is anxiety, sadness and frustration. It can feel as if
            everyone is against you. As a man, even thinking about going to a
            female divorce mediator wasn’t the plan. But I had information that
            Julie would be professional, skilled, non-judgmental and fair.
          </p>
          <p className="sm:text-xl tex-sm sm:mb-11 mb-5 font-semibold text-black sm:leading-9">
            My experience with her was confirmed 110%. Her demeanor toward both
            of us made the difficult process far easier, less stressful and
            extremely efficient.
          </p>
          <span className="text-primary font-black text-3xl leading-9">Jim W.</span>
        </div>

        <img
          src="/assets/svg/review-quat.svg"
          className="h-8 w-10 absolute sm:left-[41%] left-[36%] -top-3.5"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center">
        <Button
          text="Schedule a Consult with Julie"
          hoverBgColor="white"
          hoverTextColor="green-200"
          borderColor="green-200"
          borderWidth="2"
          bgColor="green-200"
          textColor="white"
        />
      </div>
    </section>
  );
};

export default TestiMonial;
