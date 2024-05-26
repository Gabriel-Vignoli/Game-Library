import Game from "./components/Game"
import Form from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

function App() {
  const { games, addGame, removeGame} = useGameCollection()

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
     <Form addGame={addGame}></Form>
      <div className="games">
        {games.map((game) => (
          <Game
          key={game.id}
          title={game.title}
          cover={game.cover}
          onRemove={() => removeGame(game.id)}
          >
          </Game>
          ))}
      </div>
    </div>
  )
}

export default App