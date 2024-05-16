import Web3 from "web3";
import abi from "./abi.json";

class Services {
  web3 = new Web3(window.ethereum);
  contractAddress = "0x0D7B77145b6C5258D0CD7F788BB903dAF5189DDA";
  contract = new this.web3.eth.Contract(abi, this.contractAddress);

  async getPools() {
    try {
      return await this.contract.methods.getPoolData().call();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Services();
