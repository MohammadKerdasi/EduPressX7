import { Outlet } from "react-router-dom";
import "./App.css";
import NavBarCom from "./Components/NavBar/NavBarCom";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <section className="app">
        <NavBarCom />
        <Outlet />
        
        
        <Footer />
      </section>
    </>
  );
}

export default App;
