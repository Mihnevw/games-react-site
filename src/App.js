import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Create from "./components/Create";
import CatalogPage from "./components/CatalogPage";
import Register from "./components/Register";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [page, setPage] = useState('/home')


  const routes = {
    '/home': <WelcomeWorld />, //Това е резултата от компонента а това WelcomeWorld е референция към компонента
    '/games': <CatalogPage />,
    '/create': <Create />,
    '/register': <Register />,
    '/login': <Login />,
  }

  const navigationChangeHandler = (path) => {
    setPage(path)
  }

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">

        {routes[page] || <ErrorPage />}

      </main>

    </div>

  );
}

export default App;