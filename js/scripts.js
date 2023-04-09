// empty array 
let pokeDex = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150"; 

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll(){
        return pokemonList;
    }

    // creates a list of buttons for the pokemon names and includes an event listener. Which allows the user to "click" to find out more details on that specfic pokemon
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        pokemonList.classList.add("list-group");

        let listpokemon = document.createElement("li");
        listpokemon.classList.add("list-group-item");

        let button = document.createElement("button");
        button.innerText = pokemon.name; 
        button.classList.add("pokemon"); 
        button.classList.add("btn");
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", ".modal");

        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);

        button.addEventListener("click", function (event) {
            showDetails(pokemon);
        });
     }
    
     // fetches pokemon info from the API and catches any errors 
    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

    //Specifies specific details about the pokemon pulled from the API
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.id = details.id
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }
 
      //Displays the details of said pokemon in a modal 
     function showDetails(pokemon) {
        pokeDex.loadDetails(pokemon).then(function() {
        showModal(pokemon);
     });
    }

    // displays a modal
    function showModal(item) {

        pokeDex.loadDetails(item).then(function () {

        let modalNumber = document.querySelector(".modal-number")
        modalNumber.innerHTML = "#" + item.id;

        let modalTitle = document.querySelector(".modal-title");
        modalTitle.innerText = ". " + item.name;

        let pokemonHeight = document.querySelector(".pokemon-height");
        pokemonHeight.innerHTML = "Height: " + "<br>" + (item.height/10) + "m";

        let itemTypes = "";
        item.types.forEach(function(types) {
          itemTypes += [types.type.name + "<br>"];
        });

        let pokemonTypes = document.querySelector(".pokemon-types");
        pokemonTypes.innerHTML = "Types: " + "<br>" + itemTypes;

        let pokemonImg = document.querySelector(".pokemon-img");
        pokemonImg.src = item.imageUrl;
    
    });
  }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };
})();

pokeDex.loadList().then(function() {
    pokeDex.getAll().forEach(function(pokemon) {
      pokeDex.addListItem(pokemon);
    }); 
});