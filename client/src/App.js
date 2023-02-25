import { Landing, Home, Detail, Form } from "./views/index";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Loading from "./Components/Loading/Loading";
// import NotFound from "./Components/NotFound/NotFound";

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
      <Route exact path="/Loading" render={() => <Loading />} />
      {/* <Route path="*" render={() => <NotFound />} /> */}
    </div>
  );
}

export default App;
