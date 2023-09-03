
function convertPokemonInLI(pokemon){
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ul class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ul>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                        alt="${pokemon.name}"
                    >
                </div>
            </li>
        `
}


let pokemonsList = document.getElementById('pokemonList');

pokeApi.getAllPokemons().then((pokemons = [])=>{
    pokemonsList.innerHTML += pokemons.map(convertPokemonInLI).join('');
})
