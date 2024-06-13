import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'
function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <p><FontAwesomeIcon icon={fas.faHouse} />
    <FontAwesomeIcon icon={far.faMouse} />
    <FontAwesomeIcon icon={fal.faCheese} /></p>
    </>
  )
}

export default App
