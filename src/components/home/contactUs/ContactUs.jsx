import React from "react";
import Button from "../../button/Button";

const ContactUs = () => {
  return (
    <section className=" sm:pb-36 pb-24">
      <div className="max-w-[64.375rem] bg-[#FFF5F5] mx-auto px-4  sm:pb-28 pb-20 relative sm:pt-20 pt-10">
       <div className="z-10">
       <div className="w-full shadow-md px-11 bg-[#FEF8F8] text-center text-xl font-semibold text-black py-9 relative">
          <img
            src="/assets/svg/in-quate.svg"
            className="h-6 w-7 absolute top-9 left-10"
            alt=""
          />
          <img
            src="/assets/svg/out-quate.svg"
            className="h-6 w-7 absolute bottom-24 right-10"
            alt=""
          />

          <div className="mb-8 max-w-[52.68rem] mx-auto">
            <p className="mb-2">
              I cannot recommend Julie and her team highly enough. This has been
              the toughest year of my life only softened by how well I was taken
              care of by Mediation Northwest.
            </p>
            <p className="">
              Divorce is awful no matter who is going through it, Julie made it
              a little more bearable.
            </p>
          </div>
          <h6 className="text-primary font-black">Alaina M.</h6>
        </div>
        <div className="pt-8 mb-6">
          <h6 className="section-heading text-center !font-black mb-8">
            Contact Us
          </h6>
          <div className="flex flex-wrap max-sm:flex-col gap-6 items-center">
            <div className="flex-1 w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-secondary text-xs font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name here..."
                className="p-6 w-full border-[0.6px] border-secondary text-xs font-semibold outline-none bg-transparent rounded-lg"
              />
            </div>
            <div className="flex-1 w-full">
              <label
                htmlFor="Email"
                className="block mb-2 text-secondary text-xs font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                placeholder="Enter your Email here..."
                className="p-6 w-full border-[0.6px] border-secondary text-xs font-semibold outline-none bg-transparent rounded-lg"
              />
            </div>
          </div>
        </div>
        <textarea
          className="p-6 w-full border-[0.6px] border-secondary mb-6 text-xs font-semibold outline-none bg-transparent rounded-lg"
          placeholder="enter your message"
          rows={10}
        ></textarea>
        <Button
          text="Submit"
          bgColor="green-200"
          textColor="white"
          hoverBgColor="white"
          hoverTextColor="green-200"
          borderColor="green-200"
          borderWidth="2"
        />
       </div>

        
      </div>
    </section>
  );
};

export default ContactUs;
