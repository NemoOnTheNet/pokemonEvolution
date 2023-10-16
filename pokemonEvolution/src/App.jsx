import { useState } from 'react'
import './App.css'
import roucoups from './assets/Roucoups.png'
import roucool from './assets/250px-Roucool.png'
import roucarnage from './assets/roucarnage3.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      {count < 18 ? <div>
        <img src={roucool} alt="" /> <h1>Roucool est votre ami</h1></div> :
        count < 36 ? <div> <img src={roucoups} alt="" /> <h1>Roucoups est un compagnon fidèle</h1> </div> :
          <div><img src={roucarnage} alt="" /> <h1>Roucarnage est le maitre des cieux.</h1> </div>}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          level of your pokemon is {count}
        </button>
      </div>


    </>
  )
}

export default App
