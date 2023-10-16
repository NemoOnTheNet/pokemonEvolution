import { useState } from 'react';

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

  return (
    <div>
      <img src={currentPokemon.image} alt={currentPokemon.firstName} />
      <h1>{currentPokemon.firstName}</h1>
      <p>{currentPokemon.firstName}</p>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Level {count}
        </button>
      </div>
    </div>
  );
}

export default App;
