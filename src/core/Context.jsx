import { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState("");

  const connectMetaMask = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" }).then((response) => {
      setWallet(response[0]);
    });
  };

  const values = { connectMetaMask, wallet };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
