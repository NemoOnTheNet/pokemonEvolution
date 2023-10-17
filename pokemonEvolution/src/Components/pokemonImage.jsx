import PropTypes from "prop-types";



function PokemonCard({pokemon}) {

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,

}

return(
    <figure>
<img src={pokemon.imgSrc}></img>

</figure>


)};






export default PokemonCard