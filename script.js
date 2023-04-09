

async function LoadPokedex() {

    await RenderPokemonList(200);
}


async function RenderPokemonList(listSize) {

    var index = 0;

    var pokedex_list = document.getElementById('pokedex_list');

    while (index < listSize) {

        var pokemonInfos = await GetPokemonInfosById(index + 1)

        var item = `<div class="div-item">
        <img src="${pokemonInfos.sprites.front_default}" alt=""
           class = "pkm-img" style="background-color:${GetPokemonColor(pokemonInfos.types[0].type.name)}">
        <p>${pokemonInfos.pokemon.name}</p>`

        console.log(item)  

        pokemonInfos.types.forEach(element =>
            item += `<p> <img src="https://veekun.com/dex/media/types/en/${element.type.name}.png" style="padding-left: 5px;"> </p>`
        );

        pokedex_list.innerHTML += item;

        index++;
    }
}


async function GetPokemonList(listSize) {
    let pokeapiurl = `https://pokeapi.co/api/v2/pokemon?limit=${listSize}`;

    var response = await fetch(pokeapiurl).then(data => data.json());

    return response.results;
}

async function GetPokemonInfosById(id) {
    var pokemonInfos = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`).then(data => data.json());

    return pokemonInfos;
}

async function GetPokemonImageById(id) {
}

function GetPokemonColor(type) {

    var color = 'white';
    switch (type) {
        case 'bug':
            color = '#A0C888'
            break;
        case 'grass':
            color = '#90E780';
            break;
        case 'fire':
            color = '#F89030'
        break;
        case 'water':
            color = '#6898F7'
        break;
        case 'ghost':
            color = '#A870F8'
        break;
        case 'poison':
            color = '#E090F8'
        break;
        case 'ice':
            color = '#30D8CF'
        break;
        case 'steel':
            color = '#B8B8D0'
        break;
        case 'ground':
            color = '#E0E000'
        break;
        case 'rock':
            color = '#C8A048'
        break;
        case 'dark':
            color = '#908888'
        break;
        case 'flying':
            color = '#58C8F0'
        break;
        case 'psychc':
            color = '#F838A8'
        break;
        case 'fairy':
            color = '#FF65D5'
        break;
        case 'Electr':
            color = '#E0E000'
        break;
        case 'Dragon':
            color = '#F87070'
        break;
        case 'Normal':
            color = '#B8B8A8'
        break;
        default:
            color = '#B8B8A8'
        break;
    }

    return color;
}