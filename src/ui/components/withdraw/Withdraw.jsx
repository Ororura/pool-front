import { Button, Form } from "react-bootstrap";
import { Container } from "../../hoc/container/Container";
import { useContext } from "react";
import { Context } from "../../../core/Context";

const Withdraw = () => {
  const { withdraw } = useContext(Context);
  const handlerWithdraw = async (e) => {
    e.preventDefault();
    const { target } = e;
    await withdraw(target.amount.value);
  };
  return (
    <Container>
      <Form onSubmit={handlerWithdraw}>
        <Form.Label>Вывести токены</Form.Label>
        <Form.Control type="text" name="amount" placeholder="Кол-во токенов" />
        <Button variant="primary" type="submit">
          Вывести
        </Button>
      </Form>
    </Container>
  );
};

export { Withdraw };
