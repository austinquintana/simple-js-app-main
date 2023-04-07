// empty array 
let pokeDex = (function() {
    let pokemonList = [];

// first page 
pokemonList[0] = {
    name: "Squirtle",
    height: 0.5, 
    types: ["water"]
};

// second page
pokemonList[1] = {
    name: "Charmander",
    height: 0.6,
    types: ["fire"]
};

//third page
pokemonList[2] = {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"]
};

function add(pokemon) {
    pokeDex.push(pokemon);
}

function getAll(){
    return pokemonList;
}

return {
    add: add,
    getAll: getAll
};

})();

pokeDex.getAll().forEach (function(pokemon){
    document.write (pokemon.name+ ', ' + pokemon.height + ', is a ' + pokemon.types + ' type pokemon.<br>')

});

for (let i = 0; i < pokemonList.height; i++){
if (pokemonList[i].height > 1.3){

    document.write("-Wow that's a big Pokemon");
} else {
    document.write(" -Little Man!")
}
document.write("<br>")

};