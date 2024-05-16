import { CreatePool } from "../../components/createPool/CreatePool";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { useHistory } from "react-router-dom";
import { SwapTokens } from "../../components/swapTokens/SwapTokens";
import { Stake } from "../../components/stake/Stake";
import { Withdraw } from "../../components/withdraw/Withdraw";
import { ClaimReward } from "../../components/claimReward/ClaimReward";

const Personal = () => {
  const { wallet } = useContext(Context);
  const nav = useHistory();
  useEffect(() => {
    if (wallet === "") {
      nav.push("/");
    }
  }, [wallet]);
  return (
    <div>
      <CreatePool></CreatePool>
      <SwapTokens></SwapTokens>
      <Stake></Stake>
      <Withdraw></Withdraw>
      <ClaimReward></ClaimReward>
    </div>
  );
};

export { Personal };
