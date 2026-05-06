import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("pizza");

  return (
    <div className="app-container">
      <Navbar setView={setView} />

      <main className="main-content">
        {view === "home" && <Home />}
        {view === "login" && <Login />}
        {view === "register" && <Register />}
        {view === "cart" && <Cart />}
        {view === "pizza" && <Pizza />}
      </main>

      <Footer />
    </div>
  );
}

export default App;