// elements
const input = document.getElementById("search");
const button = document.getElementById("btn");
const container = document.getElementById("pokemon");
const datalist = document.getElementById("pokemon-list");

// helper function to capitalize words
function capitalizeWords(str) {
  return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// fetch all Pokémon names for predictive text
async function loadPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
  const data = await response.json();
  data.results.forEach(pokemon => {
    const option = document.createElement("option");
    option.value = capitalizeWords(pokemon.name);
    datalist.appendChild(option);
  });
}

// fetch + display Pokémon info
async function loadPokemon(name) {
  if(!name) name = "ditto";
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  
  if(!response.ok){
    container.innerHTML = `<p>Pokémon not found</p>`;
    return;
  }

  const data = await response.json();

  const types = data.types.map(t => capitalizeWords(t.type.name)).join(", ");
  const abilities = data.abilities.map(a => capitalizeWords(a.ability.name)).join(", ");
  const stats = data.stats.map(s => `<li>${capitalizeWords(s.stat.name)}: ${s.base_stat}</li>`).join("");

  container.innerHTML = `
    <h2>${capitalizeWords(data.name)}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p><strong>Type:</strong> ${types}</p>
    <p><strong>Abilities:</strong> ${abilities}</p>
    <ul><strong>Stats:</strong> ${stats}</ul>
  `;
}

// event listener for search button
button.addEventListener("click", () => {
  const name = input.value.trim();
  if(name) loadPokemon(name);
});

// initialize
loadPokemon("ditto");
loadPokemonList();


// end of poekmon app.js

