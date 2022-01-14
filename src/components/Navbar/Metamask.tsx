import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../../Injectors";
import { ReactComponent as MetaIcon } from "../../res/metamask.svg";

const Metamask = () => {
  const { active, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <div
        onClick={active ? disconnect : connect}
        className="bg-white hover:bg-gray-50 text-black font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer"
      >
        <MetaIcon className="h-3 w-5" />
        {active ? <span>Connected</span> : <span>Connect to MetaMask</span>}
      </div>
    </>
  );
};

export default Metamask;
