import React from "react";

const Client = () => {
  const logos = [
    "/assets/image/partner/logo1.png",
    "/assets/image/partner/logo2.png",
    "/assets/image/partner/logo3.png",
    "/assets/image/partner/logo4.png",
    "/assets/image/partner/logo5.png",
    "/assets/image/partner/logo6.png",
  ];

  return (
    <div className="max-w-[69.063rem] sm:pb-24 pb-14 mx-auto px-4 overflow-hidden">
      <div className="flex gap-6 animate-scroll">
        {[...logos, ...logos].map((ele, index) => (
          <div key={index} className="h-16 w-32 flex-shrink-0">
            <img
              src={ele}
              alt="partner_logo"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
