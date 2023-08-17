import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between">
      <button id="backButton"
        className="btn btn-primary btn-md align-items-center"
        onClick={() => props.setPage(props.page - 1)}
      >
        ←
      </button>
      <p>Page: {props.page}</p>
      <button
        className="btn btn-primary btn-md align-items-center"
        onClick={() => props.setPage(props.page + 1)}
      >
        →
      </button>
    </header>
    
  );
}


function CharacterList() {
  const [character, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {character.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
