import { useState } from 'react'
import './App.css'
import roucoups from './assets/Roucoups.png'
import roucool from './assets/Roucool.png'
import roucarnage from './assets/roucarnage3.png'
import braisilion from './assets/Braisilion.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      {count < 18 ? <div>
        <img src={roucool} alt="" /> <h1>Roucool est votre ami</h1>
      </div> :

        count < 36 ? <div> <img src={roucoups} alt="" /> <h1>Roucoups est un compagnon fidèle</h1> </div> :
      <div><img src={roucarnage} alt="" /> <h1>Roucarnage est le maitre des cieux.</h1> </div>}
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
          level of your pokemon is {count}
      </button>
      </div>
    
    
      {count < 18 ? <div>
        <img src={combée} alt="" /> <h1>Combée ne vous pique pas</h1></div> :
        count < 36 ? <div> <img src={mothim} alt="" /> <h1>Mothim fidèle à sa reine</h1> </div> :
          <div><img src={vespicen} alt="" /> <h1>Faites place à la reine Vespicén</h1> </div>}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          level of your pokemon is {count}
        </button>
      </div>
     </>
  )
}

export default App
