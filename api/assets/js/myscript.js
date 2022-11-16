let pokemonJumlah = document.getElementById("jumlah_pokemon");
let pokemonShow = document.getElementById("pokemon");

fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then((response) => {
    response.json().then((data) => {
      pokemonJumlah.innerHTML = data.count;
      data.results.forEach(pokemonList);
    });
  })
  .catch((error) => {
    console.log("datas => ", error);
  });

const pokemonList = (index) => {
  pokemonShow.innerHTML += `<li>${index.name}<li>`;
};
