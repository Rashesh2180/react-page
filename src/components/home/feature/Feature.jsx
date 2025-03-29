import React from "react";
import Button from "../../button/Button";

const Feature = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 md:gap-7 gap-4 sm:pb-24 pb-14">
      {[
        {
          desc: "Not knowing the difference between a divorce attorney-mediator and a non-attorney mediator will cost you.",
          btn: "Click here to learn more...",
        },
        {
          desc: "Is your mediator qualified? Discover the critical differences between attorney-mediators and non-attorney mediators.",
          btn: "Find out now...",
        },
        {
          desc: "Don't risk your future—learn why an attorney-mediator is the smarter choice than a non-attorney mediator for your divorce.",
          btn: "Explore the fact here...",
        },
        {
          desc: "Ensure a fair process: Discover the unique advantages of working with an attorney-mediator.",
          btn: "Colick to learn more...",
        },
      ].map((ele) => (
        <div className="bg-white  shadow-md gap-5 flex flex-col  rounded-2xl py-9 lg:px-14 px-5 text-center">
          <p className="text-black text-xl leading-8 font-medium">
            {ele?.desc}
          </p>
          <div className="mt-auto">
            <Button
              text={ele?.btn}
              bgColor="primary"
              textColor="white"
              borderWidth="2"
              borderColor="#4A90E2"
              hoverBgColor="white"
              hoverTextColor="primary"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
