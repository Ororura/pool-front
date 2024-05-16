import { Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/Context";
import { useHistory } from "react-router-dom";

const Header = ({ children }) => {
  const { connectMetaMask } = useContext(Context);
  const connectHandler = async (e) => {
    e.preventDefault();
    await connectMetaMask();
  };
  const nav = useHistory();

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#b067b5" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={connectHandler}>Авторизоваться</Nav.Link>
              <Nav.Link
                onClick={(e) => {
                  e.preventDefault();
                  nav.push("/personal");
                }}
              >
                Личный кабинет
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export { Header };
