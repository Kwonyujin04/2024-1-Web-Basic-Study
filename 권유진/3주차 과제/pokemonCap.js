document.addEventListener("DOMContentLoaded", function() {
  const myPokemons = document.querySelectorAll(".container .pokemons .pokemon");	const pokemonlist = document.querySelectorAll(".container .pokemons .pokemon");
  const pokemonCap = {};

  myPokemons.forEach(function(pokemon, index) {
    function randomCap(){
      return Math.floor(Math.random() * 500) + 1;
    }

      const capacity = randomCap();
      const pokemonNum = index + 1
      pokemonCap[pokemonNum] = capacity;
  
      pokemon.addEventListener("click", function() {
        alert("포켓몬" + pokemonNum + "의 능력치는 " + pokemonCap[pokemonNum] + "입니다.");
      });
  });

  const compareButton = document.getElementsByTagName("button");

  compareButton.addEventListener("click", function(){
    const pokemon1 = parseInt(prompt("Pokemon1을 입력해주세요 (숫자 입력)"));
    const pokemon2 = parseInt(prompt("Pokemon2을 입력해주세요 (숫자 입력)"));
    
    if(isNaN(pokemon1) || isNaN(pokemon2) || pokemon1 < 1 || pokemon2 < 1 || pokemon1 > myPokemons.length || pokemon2 > myPokemons.length){
      alert("올바른 값을 입력해주세요.");
      return;
    }
    
    const pokemonCap1 = parseInt(pokemonCap[pokemon1]);
    const pokemonCap2 = parseInt(pokemonCap[pokemon2]);

    if(pokemonCap1>pokemonCap2){
      alert("포켓몬 " + pokemon1 + "가 이깁니다.");
    } else if(pokemonCap1 === pokemonCap2){
      alert("무승부입니다.");
    } else{
      alert("포켓몬 " + pokemon2 + "가 이깁니다.");
    }
  })
})