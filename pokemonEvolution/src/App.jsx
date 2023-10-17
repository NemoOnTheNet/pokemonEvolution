import { useState } from 'react';
import './App.css'
import ChampionList from './components/champions/ChampionList'
import ChampionCard from './components/champions/championCard'

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

function App() {
  const [count, setCount] = useState(0);
  const currentPokemon = count < 18 ? Passerouge : count < 36 ? Braisillon : Flambusard;

  const handleLevelUp = () => {
    setLevel(count + 1)
  }

  return (
    <>
      <div className='bothCard'>
        <section>
          <div>
            <ChampionCard champions={ChampionList[0]} />
          </div>
        </section>
        <section>
          <div>
            <img src={currentPokemon.image} alt={currentPokemon.firstName} />
            <h1>{currentPokemon.firstName}</h1>
            <p>{currentPokemon.firstName}</p>
          </div >

          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              level of your pokemon is {count}
            </button>
          </div>
        </section >
      </div>
    </>
  )

}

export default App;
