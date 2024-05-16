import { Container } from "../../hoc/container/Container";
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/Context";

const SwapTokens = () => {
  const { swapTokens } = useContext(Context);
  const handlerSwapTokens = async (e) => {
    e.preventDefault();
    const { target } = e;
    await swapTokens(target.amountIn.value, target.path.value.split(","), target.revertExchange.value);
  };
  return (
    <Container>
      <Form onSubmit={handlerSwapTokens}>
        <Form.Label>Обменять токены</Form.Label>
        <Form.Control type="text" name="amountIn" placeholder="Кол-во токенов" />
        <Form.Control type="text" name="path" placeholder="Адреса. Пример ввода (`address1,address2`) " />
        <Form.Select name="revertExchange">
          <option value="false">Обычный обмен</option>
          <option value="true">Обратный обмен</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Обменять
        </Button>
      </Form>
    </Container>
  );
};

export { SwapTokens };
