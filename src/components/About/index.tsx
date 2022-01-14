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
    </section>
  );
};

export default About;
