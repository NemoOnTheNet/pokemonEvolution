import './App.css'
import NavBar from './Components/navBar'
import ChampionList from './components/champions/ChampionList'
import ChampionCard from './components/champions/championCard'
import { useState } from 'react';
import pokemonList from './PokemonList'
import PokemonCard from './components/pokemon/pokemonCard';

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokeCard = pokemonList[pokemonIndex]
  const imgClick = () => {
    setPokemonIndex(pokemonIndex);
  }
  return (
    <div className='bothCard'>
      <div>
        <ChampionCard champions={ChampionList[0]} />
      </div>
      <div className='pokeNAv'>
        <PokemonCard pokemons={pokeCard} />
        <div>
          <NavBar className='navBar' pokemons={pokemonList} setPokemonIndex={setPokemonIndex} />
        </div>
      </div>
    </div>

  )

}
export default App;
