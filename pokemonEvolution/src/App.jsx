import { useState } from 'react'
import './App.css'


// pokemons de type vol !
import roucoups from './assets/Roucoups.png'
import roucool from './assets/250px-Roucool.png'
import roucarnage from './assets/roucarnage3.png'

// pokemons de type feu !
import Salamèche from './assets/Salamèche.png'
import Reptincel from './assets/Reptincel.png'
import Dracaufeu from './assets/Dracaufeu.png'
import Héricendre from './assets/Héricendre.png'
import Feurisson from './assets/Feurisson.png'
import Typhlosion from './assets/Typhlosion.png'
import Chochodile from './assets/Chochodile.png'
import Crocogril from './assets/Crocogril.png'
import Flâmigator from './assets/Flâmigator.png'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      
      {count < 18 ? <div>
        <img src={roucool} alt="Roucool" /> <h1>Roucool est votre ami</h1></div> :
        count < 36 ? <div> <img src={roucoups} alt="Roucoups" /> <h1>Roucoups est un compagnon fidèle</h1> </div> :
          <div><img src={roucarnage} alt="Roucarnage" /> <h1>Roucarnage est le maitre des cieux.</h1> </div>}

      {count < 16 ? <div>
        <img src={Salamèche} alt="Salamèche" /> <h1>Salamèche et loyal</h1></div> :
        count < 36 ? <div> <img src={Reptincel} alt="Reptincel" /> <h1>Reptincel et un taigneux</h1></div> :
          <div><img src={Dracaufeu} alt="Dracaufeu" /><h1>Ne venait pas le chercher, il vous carboniserait</h1></div>}

      {count < 17 ? <div>
        <img src={Héricendre} alt="Héricendre" /> <h1>Je suis timide et j'ai peur</h1></div> :
        count < 36 ? <div> <img src={Feurisson} alt="Feurisson" /><h1>Mon dresseur et cool avec moi</h1></div> :
        <div><img src={Typhlosion} alt="Typhlosion" /><h1>C'est moi le plus doué</h1></div>}

      {count < 16 ? <div>
        <img src={Chochodile} alt="Chochodile" /> <h1>Petit croco sympa, on joue ensemble</h1></div> :
        count < 36 ? <div> <img src={Crocogril} alt="Crocogril" /> <h1>Regarde je danse, je suis chaud</h1></div> :
        <div><img src={Flâmigator} alt="Flâmigator" /><h1>J'ai un oiseau en feu sur le nez, il me sert de micro dans l'une de mes attaques</h1></div>}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          level of your pokemon is {count}
        </button>
      </div>

      </>
  
  )
}

export default App
