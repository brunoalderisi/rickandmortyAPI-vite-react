function Character({ character }) {
  return (
    <div className="text-center p-2 text-dark shadow">
      <h2>{character.name}</h2>
      <img className="img-fluid rounded-pill shadow" src={character.image} alt="" />
      <h3>Status: {character.status}</h3>
      <p>Gender: {character.gender}</p>
      <p>Specie: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
}

export default Character;
