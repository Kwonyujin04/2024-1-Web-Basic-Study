document.addEventListener("DOMContentLoaded", function() {
  var myPokemons = document.querySelectorAll(".pokemon");
  
  myPokemons.forEach(function(pokemon, index) {
    pokemon.dataset.ability = Math.floor(Math.random() * 100) + 1;
    pokemon.dataset.pokemonOrder = index + 1;
  });
  
  myPokemons.forEach(function(pokemon) {
    pokemon.addEventListener("click", function() {
      var ability = this.dataset.ability;
      var pokemonOrder = this.dataset.pokemonOrder;
      alert("포켓몬" + pokemonOrder + "의 능력치는" + ability + "입니다. ");
    });
  });
});