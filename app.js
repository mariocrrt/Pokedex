const searchPokemon = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const getPokemonData = async choice => {
    const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;
    const response = await fetch(url);

    if(response.status == 404 || response.statusText == 'Not found') {
        document.getElementById('showError').style.visibility = 'visible';
        return;
    }

    const pokemon = await response.json()
    debugger

    document.getElementById('pokemonPic').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    document.getElementById('pokemonName').innerHTML = pokemon.name;
    document.getElementById('hp').innerHTML = `HP: ${pokemon.stats[0].base_stat}`
    document.getElementById('dynamicType').innerHTML = `${pokemon.types[0].type.name}`
    document.getElementById('dynamicWeight').innerHTML = `${pokemon.weight}kg`
    document.getElementById('dynamicHeight').innerHTML = `${pokemon.height}PkM`
}

searchButton.addEventListener('click', () => getPokemonData(searchPokemon.value))
