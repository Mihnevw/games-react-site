import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import Create from "./components/Create";
import Edit from "./components/Edit";
import GameDetails from "./components/GameDetails";
import CatalogPage from "./components/CatalogPage";

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">

        <WelcomeWorld />
        <Login />
        <Register />
        <Create />
        <Edit />
        <GameDetails />
        <CatalogPage />

      </main>













    </div>

  );
}

export default App;