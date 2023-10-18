/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");



function createPokemon(pokemon) {
  const container = document.createElement("div")
  const img = document.createElement("img");
  
  const name = document.createElement("h2");
  const id = document.createElement("span");
  const title = document.createElement("div");
  title.classList.add("pokemon__titleWrapper");
  title.appendChild(id);
  title.appendChild(name);

  container.classList.add("pokemon__container");
  img.classList.add("pokemon__image");
  name.classList.add("pokemon__name");
  id.classList.add("pokemon__id");

  name.textContent = pokemon.name;
  id.textContent = pokemon.id;
  img.src = pokemon.image;
  
  const typesContainer = document.createElement("div");
  typesContainer.classList.add("pokemon__typesWrapper");
  for(const type of pokemon.types) {
    const typeElement = document.createElement("div");
    typeElement.classList.add("pokemon__type");
    typeElement.textContent = type;
    typesContainer.appendChild(typeElement);
  }
  
  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("contentWrapper");
  contentWrapper.appendChild(title);
  contentWrapper.appendChild(typesContainer);

  container.appendChild(img)
  container.appendChild(contentWrapper);

  return container;
}

function renderPokemons(pokemons) {
  pokemonsContainer.innerHTML = "";
  for (const pokemon of pokemons) {
    pokemonsContainer.appendChild(createPokemon(pokemon))
  } 
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
// renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons, types, text) {
  const filtered = [];
  const regex = new RegExp(`${text}`, "i")
  const contains = el => types.includes(el);
  for(const pokemon of pokemons) {
    if(regex.test(pokemon.name) && pokemon.types.some(contains)){
      filtered.push(pokemon)
    }
  }
  return filtered;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  const checked = [...document.querySelectorAll("input[type=checkbox]:checked")].map(el => el.id)
  const text = document.getElementById("pokemon-name").value;
  console.log("dupa");
  renderPokemons(filterPokemons(pokemons, checked, text));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
