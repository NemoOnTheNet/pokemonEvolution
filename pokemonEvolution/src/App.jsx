import { useState } from 'react';

const Passerouge = {
  image: "http://localhost:5174/assets/Passerouge.png",
  firstName: "Passerouge",
}

const Braisillon = {
  image: "http://localhost:5174/assets/Braisillon.png",
  firstName: "Braisillon",
}

const Flambusard = {
  image: "http://localhost:5174/assets/Flambusard.png",
  firstName: "Flambusard",
}
import './App.css'
<<<<<<< HEAD
import ChampionList from './components/ChampionList'
import ChampionCard from './components/championCard'
=======
import roucoups from './assets/Roucoups.png'
import roucool from './assets/250px-Roucool.png'
import roucarnage from './assets/roucarnage3.png'
import pokemonArray from './PokemonList'
>>>>>>> 297a9b04a15b48cc659c55b05ad36e9ece709ce8

function App() {
  const [count, setCount] = useState(0);
  const currentPokemon = count < 18 ? Passerouge : count < 36 ? Braisillon : Flambusard;


  const handleLevelUp = () => {
    setLevel(count + 1)
  }


  return (
    <>
      <div>
<<<<<<< HEAD
        <ChampionCard champions={ChampionList} />
=======
      </div>
      {count < 18 ? <div>
        <img src={roucool} alt="" /> <h1>Roucool est votre ami</h1></div> :
        count < 36 ? <div> <img src={roucoups} alt="" /> <h1>Roucoups est un compagnon fidèle</h1> </div> :
          <div><img src={roucarnage} alt="" /> <h1>Roucarnage est le maitre des cieux.</h1> </div>}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Level of your Pokemon is {count}
        </button>
      </div>
>>>>>>> 297a9b04a15b48cc659c55b05ad36e9ece709ce8

      </div>
      {/* {count < 18 ? <div>
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
        <div><img src={Flâmigator} alt="Flâmigator" /><h1>J'ai un oiseau en feu sur le nez, il me sert de micro dans l'une de mes attaques</h1></div>} */}

      <div>
        <img src={currentPokemon.image} alt={currentPokemon.firstName} />
        <h1>{currentPokemon.firstName}</h1>
        <p>{currentPokemon.firstName}</p>

        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Level {count}
          </button>
        </div>
      </div>
    </>
  )
  

}

export default App;
