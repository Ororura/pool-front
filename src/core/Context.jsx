import { createContext, useState } from "react";
import Services from "../services/Services";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState("");
  const [dataPool, setDataPool] = useState([]);

  const connectMetaMask = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" }).then((response) => {
      setWallet(response[0]);
      Services.setWallet(response[0]);
    });
  };

  const unLogin = () => {
    setWallet("");
    Services.setWallet("");
  };

  const getPoolData = async () => {
    try {
      const data = await Services.getPools();
      if (data) {
        setDataPool(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createPool = async (_tokenA, _tokenB, _amountA, _amountB, _priceA, _priceB) => {
    try {
      await Services.createPool(wallet, _tokenA, _tokenB, _amountA, _amountB, _priceA, _priceB);
    } catch (e) {
      console.log(e);
    }
  };

  const values = { connectMetaMask, getPoolData, createPool, unLogin, dataPool, wallet };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
