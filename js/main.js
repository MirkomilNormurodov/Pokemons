
var elPokemonsList = document.querySelector('.card');
let elPokemonForm = document.querySelector('.content');
var elPokemonsSelect = document.querySelector('.content__select');
let elPokemonInput = document.querySelector('.content__ipt');
let elPokemonSel = document.querySelector('.selects');


function elementCreator(tagname){
    return document.createElement(tagname)
}

for (var i = 0; i < pokemons.length; i++){

    var item = document.createElement('LI');
    var title = document.createElement('H5');
    var img = document.createElement('img');
    var weight = document.createElement('weight');
    var height = document.createElement('height');
    var type = document.createElement('p');
    var option = document.createElement('option');
    var elements = document.createElement('elements')

    item.style.height = "425px"
    item.style.display = "flex"
    item.style.alignItems = "center"
    item.style.flexDirection = "column"
    title.style.position = "relative"
    title.style.top = "260px"
    title.style.left = "-70px"
    title.style.fontWeight = "900"
    type.style.position = "relative"
    type.style.left = "-70px"
    type.style.top = "50px"
    weight.style.position = "relative"
    weight.style.top = "150px"
    weight.style.right = "93px"
    weight.style.fontWeight = "900"
    height.style.position = "relative"
    height.style.top = "127px"
    height.style.right = "30px"
    height.style.fontWeight = "bold"
    img.style.width = "157px"
    img.style.height = "157px"

    img.src = pokemons[i].img
    title.textContent = pokemons[i].name;
    type.textContent = pokemons[i].type;
    weight.textContent = pokemons[i].weight;
    height.textContent = pokemons[i].height;
    elements.textContent = pokemons[i].type


    item.appendChild(title);
    item.appendChild(img);
    item.appendChild(weight);
    item.appendChild(height);
    item.appendChild(type);
    option.appendChild(elements)


    elPokemonsList.appendChild(item);
    elPokemonsSelect.appendChild(option)


}



     var a = ["Grass", "Poison", "Grass", "Poison", "Grass", "Poison", "Fire", "Fire", "Fire", "Flying", "Water", "Water", "Water", "Bug", "Bug", "Bug", "Flying", "Bug",  "Poison", "Bug", "Poison", "Normal", "Flying", "Normal", "Flying", "Normal", "Flying", "Normal", "Normal", "Normal", "Flying", "Normal", "Flying", "Poison", "Poison", "Electric", "Electric", "Ground", "Ground", "Poison", "Poison", "Poison", "Ground", "Poison", "Poison", "Poison", "Ground", "Normal", "Normal", "Fire", "Fire", "Normal", "Normal", "Poison", "Flying", "Poison", "Flying", "Grass", "Poison", "Grass", "Poison", "Grass", "Poison", "Grass", "Poison", "Grass", "Poison", "Grass", "Poison", "Grass", "Poison", "Bug", "Poison", "Bug", "Poison", "Bug", "Poison", "Bug", "Poison", "Ground", "Ground", "Normal", "Normal", "Water", "Water", "Fighting", "Fighting", "Fire", "Fire", "Water", "Water", "Water", "Fighting", "Psychic", "Psychic", "Psychic", "Fighting", "Fighting", "Fighting", "Grass", "Poison", "Grass", "Poison", "Grass", "Poison",  "Water", "Poison", "Rock", "Ground", "Rock", "Ground", "Fire", "Fire", "Water", "Psychic",  "Electric", "Electric", "Normal", "Flying", "Normal", "Flying", "Normal", "Flying", "Water", "Water", "Ice", "Poison", "Poison", "Water", "Water", "Ice", "Ghost", "Poison", "Ghost", "Poison", "Ghost", "Poison", "Rock", "Ground", "Psychic", "Psychic", "Water", "Water", "Electric", "Electric", "Grass", "Psychic", "Grass", "Psychic", "Ground", "Ground", "Fighting", "Fighting", "Normal", "Poison", "Poison", "Ground", "Rock", "Ground", "Rock", "Normal", "Grass", "Normal", "Water", "Water", "Water", "Water", "Water", "Water", "Psychic", "Psychic", "Bug", "Flying", "Ice", "Psychic", "Electric", "Fire", "Bug", "Normal", "Water", "Water", "Flying", "Ice", "Normal", "Normal", "Water", "Electric", "Fire", "Normal", "Rock", "Water", "Rock", "Water", "Rock", "Water", "Rock", "Flying", "Normal", "Ice", "Flying", "Electric", "Flying", "Fire", "Flying", "Dragon", "Dragon", "Dragon", "Flying", "Psychic", "Psychic",];
     var b = [];


      for (let i = 0; i < a.length; i++){
          if (b.indexOf(a[i]) === -1){
              b.push(a[i]);
          }
      }
console.log(b);
