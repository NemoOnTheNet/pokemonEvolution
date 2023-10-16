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
  const container = {display: 'flex',
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
   
   

  return (
    <div>
      <section style = {container}>
      <img src={currentPokemon.image} alt={currentPokemon.firstName} style={imageStyle} />
      <h2>{currentPokemon.firstName}</h2>
      <p>{currentPokemon.firstName}</p>
      

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Level {count}
        </button>
      </div>
      </section>
    </div>
  );
}

export default App;
