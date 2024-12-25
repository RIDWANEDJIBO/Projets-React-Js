import OpenModal from './Components/OpenModal'
import './App.scss'

function App() {


  function handleClick(){
    OpenModal();
  }

  return (
    <>
      <button className='btn' onClick={handleClick} >Ouvrir la modal</button>
    </>
  )
}

export default App
