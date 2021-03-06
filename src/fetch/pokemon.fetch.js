export const fetchPokemons = (limit) => {
  const promise = fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`
  );
  return promise;
}

export const fetchPokemonByURL = (url) => {
  const promise = fetch(url);
  return promise;
}

export const fetchPokemonById = (id, abortController) => {
  const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { signal: abortController.signal });
  return promise;
}