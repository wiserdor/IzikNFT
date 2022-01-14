import React from "react";

const About = () => {
  return (
    <section id="about" className="container flex mx-auto flex-col bg-white">
      <div className="container flex flex-col lg:flex-row mx-auto lg:divide-x-2">
        <div className="flex justify-center lg:w-1/3 lg:pr-6">
          <div className=" text-6xl font-mono text-center md:text-left">
            Our goal
          </div>
        </div>
        <div className="rounded p-14 font-medium">
          We are Izik friends and we want to bring you the ultimate experience
          of Izik. Our community will be built to become the one place you can
          find comfort surrounded by the best people exists. You are never
          alone, walk with us, together we are strong.
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-16 items-baseline">
        <div className=" text-3xl font-mono md:text-left">
          What are the benefits?
        </div>
        <div className="font-medium ml-4">
          You will be Izik friend, Izik friend will always benefit! it's not a question.
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-16 items-baseline">
        <div className=" text-3xl font-mono md:text-left">
          What is the price?
        </div>
        <div className="font-medium ml-4">
          The price is <b>0.01 Ethereum</b> for 1 Izik NFT.
        </div>
      </div>
    </section>
  );
};

export default About;
