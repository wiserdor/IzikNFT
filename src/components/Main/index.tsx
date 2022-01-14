import React, { useState } from "react";
import About from "../About";
import Navbar from "../Navbar";
import BG from "../../res/izik.jpeg";
import Roadmap from "../Roadmap";

const Main = () => {
  const [amount, setAmount] = useState("1");
  return (
    <div
      className="bg-fixed bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <Navbar />
      <div className="bg-quote container flex items-center justify-center h-screen mx-auto">
        <blockquote className="bg-black font-serif mx-4 p-4 text-center text-white md:p-8">
          <p className="font-bold italic text-3xl">
            &ldquo;I am a unicorn🦄. Izik R.&rdquo;
          </p>
        </blockquote>
      </div>
      <div className="bg-white pb-8">
        <div className=" md:px-52 md:mt-14 pt-8">
          <About />
        </div>
        <div
          id="mint"
          className="rounded justify-center items-center flex flex-col bg-white mt-12"
        >
          <div className="text-5xl tracking-widest divide-y-2">Mint Now</div>
          <div className="justify-center items-center mt-8  flex">
            <label htmlFor="mintNum">How many? (10 Maximum)</label>
            <input
              id="mintNum"
              placeholder="How many?"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              defaultValue={1}
              min={1}
              max={10}
              className="ml-4 w-11 border text-center transition duration-500 rounded-md "
            ></input>
          </div>
          <div className="mt-4 bg-white border hover:bg-gray-50 text-black font-bold py-4 px-8 rounded inline-flex items-center cursor-pointer">
            <span>Mint</span>
          </div>
          <div className="ml-2 font-mono">
            you will pay: {parseInt(amount) * 0.01} +Gas
          </div>
        </div>
        <Roadmap />
      </div>
    </div>
  );
};

export default Main;
