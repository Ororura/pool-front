import Web3 from "web3";
import abi from "./abi.json";

class Services {
  web3 = new Web3(window.ethereum);
  contractAddress = "0xBB92b9b5Fa4AD36B80aD4933dD566C2A137ee9AC";
  contract = new this.web3.eth.Contract(abi, this.contractAddress);

  async getPools() {
    try {
      return await this.contract.methods.getPools().call();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Services();
