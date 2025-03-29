import React from "react";

const HowItWork = () => {
  return (
    <div className="sm:py-24 py-14 max-w-[62.125rem] px-4 mx-auto">
      <div className="flex sm:gap-10 justify-between max-md:flex-col max-sm:mb-10">
        <div className="flex-1">
          <img
            src="/assets/image/how-work2.png"
            alt=""
            className="h-[21.375rem] max-w-72  max-sm:mx-0 max-md:mx-auto w-full object-cover"
          />
          <img
            src="/assets/image/how-work1.png"
            alt=""
            className="h-64 relative bottom-28 right-16 max-w-60 ml-auto w-full object-cover"
          />
        </div>
        <div className="flex-1 md:pt-11">
          <h5 className="section-heading mb-8">How it Works?</h5>
         <div className="flex flex-col sm:gap-12 gap-5">
         {[
            {
              img: "/assets/svg/phone.svg",
              step: "1",
              desc: "Call us set-up an initial telephone consultation.",
            },
            {
              img: "/assets/svg/mail.svg",
              step: "2",
              desc: "Ask your spouse to contact us and consent to mediate with Mediation Northwest.",
            },
            {
              img: "/assets/svg/appointment.svg",
              step: "3",
              desc: "We will contact both parties to schedule a 2-hour mediation appointment (currently conducted via Zoom).",
            },
          ].map((ele) => (
            <div className="flex gap-7 items-center">
              <div className="custom-shadow shrink-0 rounded-full bg-white md:h-14 md:w-14 h-10 w-10 flex items-center justify-center">
                <img src={ele.img} alt={ele?.step} className="max-sm:h-4 max-sm:w-4" />
                
              </div>
              <div className="">
                <h3 className=" text-secondary mb-1.5 font-bold sm:text-xl text-base">Step {ele?.step}</h3>
                <p className="sm:text-sm text-xs sm:leading-6 text-secondary">{ele?.desc}</p>

              </div>
            </div>
          ))}
         </div>
        </div>
      </div>
      <p className="text-center sm:text-lg text-sm  text-secondary sm:leading-6">I will take you through a safe and secure process that is fair and respects both you and your spouse. I’ll educate, guide, and keep you on track: pulling you through the fiery pits of divorce hell until we get to the light on the other side.</p>
    </div>
  );
};

export default HowItWork;
