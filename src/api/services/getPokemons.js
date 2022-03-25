import axiosInstance from "../config";

export const getPokemons = (limit = 151 ) => axiosInstance.get(`/pokemon?limit=${limit}`)

export const getPokemonWithDetails = () => {

    return getPokemons(900)
    .then((res) => {
        const pokemons = res.data.results
        console.log(pokemons)
        return Promise.all(pokemons.map(pokemon => axiosInstance.get(pokemon.url)))
        })
    .then((pokemonResponse) => {
        const pokemonsData = pokemonResponse.map(responses => responses.data)
        return pokemonsData
        
    })
    .catch((err) => {
        console.error(err)
    })
}