import './championCard.css'
import { Fragment } from "react";


const ChampionCard = ({ champions }) => {
    console.log(champions);
    return (
        <aside className="champsCard">
            <img src={champions.image} alt={champions.id} />
            <ul className='address'>
                <li>Name : {champions.id} </li>
                <li>Town : {champions.town} </li>
                <li>Type : {champions.type} </li>
            </ul>
        </aside>
    );
}

export default ChampionCard;