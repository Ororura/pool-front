import { Container } from "../../hoc/container/Container";
import { useContext } from "react";
import { Context } from "../../../core/Context";
import { Button, Form } from "react-bootstrap";

const Stake = () => {
  const { stake } = useContext(Context);
  const handlerStoke = async (e) => {
    e.preventDefault();
    const { target } = e;
    await stake(target.amount.value);
  };
  return (
    <Container>
      <Form onSubmit={handlerStoke}>
        <Form.Label>Отправить в стэйкинг</Form.Label>
        <Form.Control type="text" name="amount" placeholder="Кол-во токенов" />
        <Button variant="primary" type="submit">
          Отправить
        </Button>
      </Form>
    </Container>
  );
};

export { Stake };
