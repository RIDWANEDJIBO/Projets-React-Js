import ToggleLangs from './Components/ToggleLangs';
import ContextProvider from './Context/langContext';
import { useState } from 'react';
import COntenu from './Components/Contenu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextProvider>
        <ToggleLangs/>
        <COntenu/>
      </ContextProvider>
    </>
  )
}

export default App
