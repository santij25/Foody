import { Landing, Home, Detail, Form } from "./views/index";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Loading from "./Components/Loading/Loading";
import { Suspense } from "react";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/Loading" && (
        <NavBar />
      )}

      <Route exact path="/" render={() => <Landing />} />
      <Suspense fallback={<Loading />}>
        <Route path="/Home" render={() => <Home />} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Route exact path="/Detail/:id" render={() => <Detail />} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Route exact path="/Create" render={() => <Form />} />
      </Suspense>
      <Route exact path="/Loading" render={() => <Loading />} />
    </div>
  );
}

export default App;
