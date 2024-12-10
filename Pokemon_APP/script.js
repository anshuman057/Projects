let resultDisplayed = false;

async function searchPokemon() {
  const pokemonName = document.getElementById("pokemon-search").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    const result = document.getElementById("result");
    if (!resultDisplayed) {
      result.style.display = "block"; // Show the result
      resultDisplayed = true;
    }
    result.innerHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Type: ${data.types.map((type) => type.type.name).join(", ")}</p>
      <p>Height: ${data.height}</p>
      <p>Weight: ${data.weight}</p>
      <p>Abilities: ${data.abilities
        .map((ability) => ability.ability.name)
        .join(", ")}</p>
      <p>Stats: ${data.stats
        .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
        .join(", ")}</p>
    `;
  } catch (error) {
    const result = document.getElementById("result");
    if (!resultDisplayed) {
      result.style.display = "block"; // Show the result
      resultDisplayed = true;
    }
    result.innerHTML = `
      <h2>Pokémon not found</h2>
      <p>Sorry, we couldn't find any information on the Pokémon "${pokemonName}".</p>
    `;
  }
}
