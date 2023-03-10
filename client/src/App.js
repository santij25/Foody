import { Landing, Home, Detail, Form } from "./views/index";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import "./app.css"

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/Loading" && (
        <NavBar />
      )}

      <Route exact path="/" render={() => <Landing />} />
      <Route path="/Home" render={() => <Home />} />
      <Route exact path="/Detail/:id" render={() => <Detail />} />
      <Route exact path="/Create" render={() => <Form />} />
    </div>
  );
}

export default App;
