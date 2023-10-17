import './PokemonCard.css'
import { useState } from 'react';

const PokemonCard = ({ pokemons }) => {
    const [level, setLevel] = useState(0);
    const handleClickLevel = () => {
        setLevel(level + 1)
    }

    return (<div>
        <section className='container'>
            {level < pokemons.evoLvl ?
                <img src={pokemons.imgSrc1} alt={pokemons.name1} className='imageStyle' /> :
                level < pokemons.evoLvl2 ? <img src={pokemons.imgSrc2} alt={pokemons.name2} className='imageStyle' /> :
                    <img src={pokemons.imgSrc3} alt={pokemons.name3} className='imageStyle' />}
            {level < pokemons.evoLvl ? <h2>{pokemons.name1}</h2> :
                level < pokemons.evoLvl2 ? <h2>{pokemons.name2}</h2> :
                    <h2>{pokemons.name3}</h2>
            }

        </section>

        < button onClick={handleClickLevel}> Level {level}</button>
    </div >);
}


export default PokemonCard;



