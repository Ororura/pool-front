import { Container } from "../../hoc/container/Container";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/Context";

const ClaimReward = () => {
  const { claimReward } = useContext(Context);
  return (
    <Container>
      <Button
        onClick={async (e) => {
          e.preventDefault();
          await claimReward();
        }}
      >
        Забрать награду
      </Button>
    </Container>
  );
};

export { ClaimReward };
