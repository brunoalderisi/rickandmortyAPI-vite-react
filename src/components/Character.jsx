function Character({ character }) {
  return (
    <div className="text-center p-2 text-white">
      <h2>{character.name}</h2>
      <img className="img-fluid rounded-pill" src={character.image} alt="" />
      <h3>Status: {character.status}</h3>
      <p>Gender: {character.gender}</p>
      <p>Specie: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
}

export default Character;
