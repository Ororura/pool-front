import { Container } from "../../hoc/container/Container";
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/Context";

const CreatePool = () => {
  const { createPool } = useContext(Context);

  const createHandler = async (e) => {
    e.preventDefault();
    const { target } = e;
    await createPool(
      target.tokena.value,
      target.tokenb.value,
      target.amounta.value,
      target.amountb.value,
      target.pricea.value,
      target.priceb.value,
    );
  };

  return (
    <Container>
      <Form onSubmit={createHandler}>
        <Form.Label>Создать новый пул</Form.Label>
        <Form.Control type="text" name="tokena" placeholder="Адреса первого токена" />
        <Form.Control type="text" name="tokenb" placeholder="Адреса второго токена" />
        <Form.Control type="text" name="amounta" placeholder="Кол-во первого токена" />
        <Form.Control type="text" name="amountb" placeholder="Кол-во второго токена" />
        <Form.Control type="text" name="pricea" placeholder="Цена первого токена" />
        <Form.Control type="text" name="priceb" placeholder="Цена второго токена" />
        <Button variant="primary" type="submit">
          Создать
        </Button>
      </Form>
    </Container>
  );
};

export { CreatePool };
