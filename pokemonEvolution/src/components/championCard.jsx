const ChampionCard = ({ champions }) => {
    console.log(champions);
    return (
        <>
            <img src={champions.image} alt="" />
            <ul>
                <li>Name : {champions.id} </li>
                <li>Town : {champions.town} </li>
                <li>Type : {champions.type} </li>
            </ul>
        </>
    );
}

export default ChampionCard;