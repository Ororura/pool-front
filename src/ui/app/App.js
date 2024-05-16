import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { paths } from "../../constants/paths";
import { Header } from "../hoc/header/Header";
import "bootstrap/dist/css/bootstrap.css";
import { ContextProvider } from "../../core/Context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header>
          <Switch>
            {paths.map((path, index) => (
              <Route exact path={path.path} component={path.element} key={index} />
            ))}
          </Switch>
        </Header>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
