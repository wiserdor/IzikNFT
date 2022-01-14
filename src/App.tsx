import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import "./App.css";
import Main from "./components/Main";

function getLibrary(provider: any) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Main />
    </Web3ReactProvider>
  );
}

export default App;
