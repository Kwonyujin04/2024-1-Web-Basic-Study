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

  function compareCap(){
    const comparePokemon = {};
    document.getElementById(".pokemon").onclick = 클릭한 값을 순서대로 comparePokemon에 객체에 넣어준다. ; //그리고 객체의 값이 2개 들어오면 입력을 마친다. 
    if(첫번째 객체의 값 > 두번째 객체의 값){
      console.log(첫번째 키값 + "이 이깁니다. ")
    }
    else if(첫번째 객체의 값 == 두번째 객체의 값){
      console.log("둘의 능력치가 같습니다. ")
    }
    else(){
      console.log(두번째 키값 + "이 이깁니다. ")
    }
  }

  function slectPokemon(){

  }
});
