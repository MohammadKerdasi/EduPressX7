import { Outlet } from 'react-router-dom';
import './App.css';
import NavBarCom from './Components/NavBar/NavBarCom';
import Footer from './Components/Footer/Footer';



import "./App.css";
// import CourseSingle from './Pages/CourseSingle';



function App() {
  return (
    <>
      <section className="app">
        <NavBarCom />
         <Outlet/> 
          {/* <CourseSingle/> */}
        <Footer />
      </section>
    </>
  );
}

export default App;
