import './App.css'
import ChampionList from './components/ChampionList'
import ChampionCard from './components/championCard'

function App() {
  return (
    <>
      <div>
        <ChampionCard champions={ChampionList} />
      </div>

    </>
  )


}

export default App
