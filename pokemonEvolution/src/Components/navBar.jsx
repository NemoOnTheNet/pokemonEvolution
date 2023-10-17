import React from "react";


function NavBar ({pokemon, setPokemonIndex}) {


  return (

<>
{pokemon.map((pokemon, index) => (
<button key={index}  onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
   
))}
</>
      )
}

export default NavBar