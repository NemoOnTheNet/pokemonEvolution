import './App.css'
import NavBar from './Components/navBar'
import PokemonCard from './Components/pokemonImage'
import ChampionList from './components/champions/ChampionList'
import ChampionCard from './components/champions/championCard'
import { useState } from 'react';

const Passerouge = {
  image: "http://localhost:5173/assets/07.Passerouge.png",
  firstName: "Passerouge",
}
const Braisillon = {
  image: "http://localhost:5173/assets/08.Braisillon.png",
  firstName: "Braisillon",
}
const Flambusard = {
  image: "http://localhost:5173/assets/09.Flambusard.png",
  firstName: "Flambusard",
}


function App() {
  const [count, setCount] = useState(0);
  const currentPokemon = count < 18 ? Passerouge : count < 36 ? Braisillon : Flambusard;
  const handleLevelUp = () => {
    setLevel(count + 1)
  }
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    border: '2px solid #333',
    backgroundImage: 'url("./public/assets/backgroundImage.jpg")',
    color: '#fcfdf9',
  }
  const imageStyle = {
    maxWidth: '75%',
    maxHeight: '75%',
  }
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const imgClick = () => {
    setPokemonIndex(pokemonIndex);
  }
  const pokemon = pokemonList[pokemonIndex]

  return (

    <div className='bothCard'>
      <div>
        <ChampionCard champions={ChampionList} />
      </div>
      <div>
        <section style={container}>
          <img src={currentPokemon.image} alt={currentPokemon.firstName} style={imageStyle} />
          <h2>{currentPokemon.firstName}</h2>
          <p>{currentPokemon.firstName}</p>
        </section>
      </div>
      {/* <PokemonCard pokemon={pokemon} />
      <NavBar pokemon={pokemonList} setPokemonIndex={setPokemonIndex} /> */}

    </div>

  )
}


export default App;
