import React from "react";
import Button from "../../button/Button";

const ImageBanner = () => {
  return (
    <div className=" py-24 sm:h-[38.125rem] w-full relative">
      <img
        src="/assets/image/banner-bg.png"
        className="h-full w-full object-cover absolute left-0 top-0"
        alt="banner-bg"
      />
      <div className="max-w-[82.5rem] mx-auto px-5">
        <div className="max-w-3xl bg-gradient-to-r from-[#FFFFFF63] to-[#FFFFFF1A] backdrop-blur-[20px] py-8 px-6 rounded-2xl">
          <p className=" text-white text-xl leading-7 font-bold mb-5">
            Divorce is one of the most gut-wrenching experiences anyone can
            endure. How do I know that? I’ve been in your shoes.
          </p>
          <p className="text-[1.125rem] leading-7 text-white mb-5">
            If you can save your marriage… do it! But if your circumstances
            require a divorce, then choose a divorce process that will respect
            you, respect your spouse, and protect your family. Divorce mediation
            is that process.
          </p>
          <p className="text-[1.125rem] leading-7 text-white mb-5">
            Because I’ve been through it myself, I know you need to be heard, I
            know you need to think, I know you need guidance, and I know (at
            times) you need to be pushed.
          </p>
          <p className="text-[1.125rem] leading-7 text-white mb-7">Here’s my truth…</p>
          <Button bgColor="primary" text="Click to Read more..." borderColor="primary" textColor="white" hoverBgColor="white" hoverTextColor="primary" />
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
