
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBarCom from './Components/NavBar/NavBarCom';
import Footer from './Components/Footer/Footer';
import "./App.css";
import CourseSingle from './Pages/CourseSingle';
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBarCom from "./Components/NavBar/NavBarCom";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <>
      <section className="app">
        <NavBarCom />

        {/* <Outlet/> */}
        <CourseSingle/> 
=======
        <Outlet />
        
        

        <Footer />
      </section>
    </>
  );
}

export default App;
