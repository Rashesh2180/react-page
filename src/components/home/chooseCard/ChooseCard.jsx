import React from "react";

const data = [
  {
    id: 1,
    name: "Reduce Drama",
    img: "/assets/svg/choose-card/card1.svg",
    desc: "Mediation cuts through the nonsense. We will handle everything from beginning to end. We will even go to court for you! Mediation cuts through the nonsense. We will handle everything from beginning to end. We will even go to court for you!",
    bg: "#A234FD",
    cardbg: "#F6EAFF",
  },
  {
    id: 2,
    name: "Get Control Get Control",
    img: "/assets/svg/choose-card/card2.svg",
    desc: "In mediation, you control your custody arrangements and support obligations – not the courts.",
    bg: "#00BD39",
    cardbg: "#E5F8EB",
  },
  {
    id: 3,
    name: "Save Time",
    img: "/assets/svg/choose-card/card3.svg",
    desc: "Court divorces usually take between 9-18 months. Mediation usually takes between 1-3 months.",
    bg: "#FCB300",
    cardbg: "#FFF7E5",
  },
  {
    id: 4,
    name: "Save Money",
    img: "/assets/svg/choose-card/card4.svg",
    desc: "Court proceedings, on average, are 4-5 times more expensive than mediation.",
    cardbg: "#FFECEC",
    bg: "#FE4040",
  },
];

const ChooseCard = () => {
  return (
    <div className="max-w-[82.5rem] mx-auto px-4 sm:pb-24 pb-14">
      <h6 className="text-center text-secondary text-3xl font-bold mb-7">
        Why Choose a Mediated Divorce?
      </h6>
      <div className="sm:mb-14 mb-8">
        {data?.length > 0 ? (
          <div className="grid lg:grid-cols-4 md;grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {data.map((ele) => (
              <div
                key={ele.id}
                style={{ backgroundColor: ele?.cardbg }}
                className="xl:p-8 p-4 rounded-2xl"
              >
                <div className="flex xl:gap-6 gap-4 items-center mb-5">
                  <div
                    className="h-14 w-14 rounded-full flex justify-center shrink-0 items-center custom-shadow"
                    style={{ backgroundColor: ele?.bg }}
                  >
                    <img src={ele?.img} className="h-6 w-6" alt={ele.name} />
                  </div>
                  <h3 className="text-secondary text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                    {ele?.name}
                  </h3>
                </div>
                <p className="text-secondary text-sm leading-5">
                  {ele.desc.length > 130
                    ? `${ele.desc.slice(0, 130)}...`
                    : ele.desc}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-red-600 p-5">No data found</p>
        )}
       
      </div>
      <button className="px-6 mx-auto flex py-2 max-sm:w-full rounded-full relative sm:text-base text-sm bg-green-200 text-white text-center border border-green-200 hover:bg-white hover:border-green-200 hover:text-green-200">
      Click here for an Overview of costs
        </button>
    </div>
  );
};

export default ChooseCard;
