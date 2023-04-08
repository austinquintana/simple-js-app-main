// empty array 
let pokeDex = (function () {
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

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
         let button = document.createElement("button");
        button.innerText = pokemon.name; 
        button.classList.add("button-class"); 
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function (event) {
            showDetails(pokemon)
        });
     }

     function showDetails(pokemon) {
        console.log(pokemon.name)
     }

    return {
        add: add,
        getAll: getAll,
         addListItem: addListItem
    };
})();

pokeDex.getAll().forEach(function(pokemon) {
    
    pokeDex.addListItem(pokemon);
});