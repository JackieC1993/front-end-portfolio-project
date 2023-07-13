// Function to fetch Pokémon data by ID
function fetchPokemonById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error fetching Pokémon data:", error);
      return null;
    });
}

// Function to fetch Pokémon species data by ID
function fetchPokemonSpeciesById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error fetching Pokémon species data:", error);
      return null;
    });
}

// Export the functions to make them accessible to other files
export { fetchPokemonById, fetchPokemonSpeciesById };
