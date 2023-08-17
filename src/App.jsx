import CharacterList from "./components/CharacterLists";

function App() {
  return (
    <div className="bg-light text-danger shadow">
      <h1 className="text-center display-1 py-4">Rick & Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
