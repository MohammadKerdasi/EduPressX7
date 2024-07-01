import { Outlet } from 'react-router-dom';
import './App.css';
import NavBarCom from './Components/NavBar/NavBarCom';
import Footer from './Components/Footer/Footer';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// import CourseSingle from './Pages/CourseSingle';
// import BlogSingle from './Pages/BlogSingle';

function App() {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

  return (
    <>
      <section className="app">
        <NavBarCom />
         <Outlet/> 
         {/* <BlogSingle/> */}
         {/* <CourseSingle/> */}
        <Footer />
        <button onClick={scrollToTop} className='rb-scroll-to-top-button'><FontAwesomeIcon icon={faArrowUp} /></button>
      </section>
    </>
  );
}

export default App;
