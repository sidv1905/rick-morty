import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
