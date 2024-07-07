import { Outlet } from "react-router-dom";
import "./App.css";
import NavBarCom from "./Components/NavBar/NavBarCom";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <section className="app">
        <ScrollToTop />
        <NavBarCom />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default App;
