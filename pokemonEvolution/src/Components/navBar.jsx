import React from "react";



function NavBar({ pokemons, setPokemonIndex }) {
  return (
    <>
      {pokemons.map((pokemon, index) =>
        <button key={index} onClick={() => setPokemonIndex(index)}>{pokemon.name1}</button>
      )}
    </>
  )
}

export default NavBar;