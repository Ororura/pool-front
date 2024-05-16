import { CreatePool } from "../../components/createPool/CreatePool";
import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import { useHistory } from "react-router-dom";

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
    </div>
  );
};

export { Personal };
