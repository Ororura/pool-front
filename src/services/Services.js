import Web3 from "web3";
import FactoryAbi from "./FactoryAbi.json";
import RouterAbi from "./RouterAbi.json";
import Staking from "./Staking.json";

class Services {
  web3 = new Web3(window.ethereum);
  contractAddress = "0x3ff4D6F92965A29E4df9d4d12A50f0a46b7F606A";
  routerContractAddress = "0x68842640bdD91fF3b032b35a3091610e8f7a068C";
  stakingAddress = "0xC0e360c47D621799Cd78D7533022D986FaD02C56";
  contractFactory = new this.web3.eth.Contract(FactoryAbi, this.contractAddress);
  contractRouter = new this.web3.eth.Contract(RouterAbi, this.routerContractAddress);
  contractStaking = new this.web3.eth.Contract(Staking, this.stakingAddress);
  wallet = "";

  setWallet(wallet) {
    this.wallet = wallet;
  }

  async getPools() {
    try {
      return await this.contractFactory.methods.getPoolData().call();
    } catch (e) {
      console.log(e);
    }
  }

  async createPool(_owner, _tokenA, _tokenB, _amountA, _amountB, _priceA, _priceB) {
    try {
      return await this.contractFactory.methods
        .createPool(_owner, _tokenA, _tokenB, _amountA, _amountB, _priceA, _priceB)
        .send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async swapTokens(amountIn, path, _revertExchange) {
    try {
      return await this.contractRouter.methods
        .swapExactTokens(amountIn, path, _revertExchange)
        .send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async stake(amount) {
    try {
      return await this.contractStaking.methods.stake(amount).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async withdraw(amount) {
    try {
      return await this.contractStaking.methods.withdraw(amount).send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async claimReward(amount) {
    try {
      return await this.contractStaking.methods.claimReward().send({ from: this.wallet });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Services();
