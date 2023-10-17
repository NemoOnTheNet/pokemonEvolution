import { useState } from 'react'
import './App.css'
import NavBar from './Components/navBar'
import PokemonCard from './Components/pokemonImage'


function App() {
  
   const pokemonList = [
      {
        name: "Roucool",
        imgSrc: 'https://imgs.search.brave.com/BDjhHJA4V8E4QTTZeIFiAlmuNICZMxIWp3FafDf0XU4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucG9rZW1vbi5j/b20vYXNzZXRzL2Nt/czIvaW1nL3Bva2Vk/ZXgvZnVsbC8wMTYu/cG5n',
    //evoLvl: 18,
    
       //   name: "Roucoups",
       //   imgSrc2: '',
    //  evoLvl1: 36,
    
        //  name: "Roucarnage",
        //  imgSrc3: '',
    },
    {
        name: "Soporifik",
        imgSrc: 'https://imgs.search.brave.com/e867kYsuk6F18EDeAN2SATAJ5_qnWIkUPmKPfgHsEHg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucG9rZW1vbi5j/b20vYXNzZXRzL2Nt/czIvaW1nL3Bva2Vk/ZXgvZnVsbC8wOTYu/cG5n',
       // evoLvl: 26,
    
    
        //  name: "Hypnomade",
        //  imgSrc2: './assets/Hypnomade.webp',
    
    },
    {
        name: "Scrutella",
        imgSrc: './assets/Scutella.webp',
        //evoLvl: 32,
    
        //  name2: "Mesmérella",
        // imgSrc2: './assets/Mesmérella.webp',
        // evoLvl1: 41,
    
        //  name3: "Sidérella",
        //  imgSrc3: './assets/Sidérella.webp',
    },
     {
          name: "Lippouti",
         imgSrc: './assets/lippouti.webp',
        // evoLvl: 30,
    
       // name2: "Lippoutou",
        //  imgSrc2: "./assets/lippoutou.webp",

    
      },
    ];
    
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const imgClick = () => {
      setPokemonIndex(pokemonIndex);
    }
    const pokemon = pokemonList[pokemonIndex]
    
      console.log(pokemonIndex)
    
      
      return (
        
        <>
           <PokemonCard pokemon={pokemon}/>
    
          <NavBar pokemon={pokemonList} setPokemonIndex={setPokemonIndex}/>
        
          </>
    
      )
    }
    

export default App
