import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BaristaForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='containerRow'>
          <img className="imgCoffee" src="https://image.similarpng.com/very-thumbnail/2021/06/Coffee-cup-icon-on-transparent-background-PNG.png" />
          <h1>Barista test</h1>
        </div>
        <div>
          <h4>Try it!</h4>
        </div>

        <BaristaForm />        

      </div>
    </>
  )
}

export default App
