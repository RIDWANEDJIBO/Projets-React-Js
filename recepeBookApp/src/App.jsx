import './App.css'
import ListRecipe from './Component/listRecipe/ListRecipe'

function App() {

  return (
    <>
      <nav className='navBar'>
        <h1>Recepe Book App</h1>
      </nav>
      <section>
        <div className='container'>
          <ListRecipe/>
        </div>
      </section>
    </>
  )
}

export default App
