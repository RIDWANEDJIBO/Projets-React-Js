import './App.css'
import {Route,Routes, BrowserRouter} from 'react-router-dom'
import Index from './pages/index'
import Store from './store/store'
import CreateBook from './pages/createBook'

function App() {

  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path="createBook" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
    </Store>
  )
}

export default App
