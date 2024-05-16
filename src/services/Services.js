import Web3 from "web3";
import abi from "./abi.json";

class Services {
  web3 = new Web3(window.ethereum);
  contractAddress = "0x634599E8ced718c1660eF5eE95d3510C5C2AE44A";
  contract = new this.web3.eth.Contract(abi, this.contractAddress);
  wallet = "";

  setWallet(wallet) {
    this.wallet = wallet;
  }

  async getPools() {
    try {
      return await this.contract.methods.getPoolData().call();
    } catch (e) {
      console.log(e);
    }
  }
  async createPool(_owner, _tokenA, _tokenB, _amountA, _amountB, _priceA, _priceB) {
    try {
      return await this.contract.methods
        .createPool(_owner, _tokenA, _tokenB, _amountA, _amountB, _priceA, _priceB)
        .send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Services();
