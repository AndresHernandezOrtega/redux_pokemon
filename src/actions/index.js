import { SET_POKEMON } from "./type";
import { getPokemons } from "../api/services/getPokemons";
import axios from "axios";

export const setPokemon = ( payload ) => ({
    type: SET_POKEMON,
    payload
})


export const getPokemonWithDetails = () => (dispatch) => {

    getPokemons(20)
    .then((res) => {
        const pokemons = res.data.results
        console.log(pokemons)
        return Promise.all(pokemons.map(pokemon => axios.get(pokemon.url)))
        })
    .then((pokemonResponse) => {
        const pokemonsData = pokemonResponse.map(responses => responses.data)
        dispatch(setPokemon(pokemonsData))

    })
}