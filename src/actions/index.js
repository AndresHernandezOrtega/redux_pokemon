import { SET_POKEMON, UPDATE_FAVORITES, TOGGLE_LOADER} from "./type";
import { getPokemons } from "../api/services/getPokemons";
import axios from "axios";

export const setPokemon = ( payload ) => ({
    type: SET_POKEMON,
    payload
})

export const toggleLoader = () => ({
    type: TOGGLE_LOADER
}) 


export const getPokemonWithDetails = () => (dispatch) => {
    getPokemons(20)
    .then((res) => {
        dispatch(toggleLoader())
        const pokemons = res.data.results
        console.log(pokemons)
        return Promise.all(pokemons.map(pokemon => axios.get(pokemon.url)))
        })
    .then((pokemonResponse) => {
        const pokemonsData = pokemonResponse.map(responses => responses.data)
        dispatch(setPokemon(pokemonsData))
        dispatch(toggleLoader())

    })
}

export const updateFavorites = (payload) => ({
    type: UPDATE_FAVORITES,
    payload
})


export const updateFavoritesAction = (id = null) => (dispatch) => {

    let favorites = localStorage.getItem("favorites") 
    ? JSON.parse(localStorage.getItem("favorites"))
    : localStorage.setItem("favorites", "[]" ) 

    if (id && favorites.find(fav => fav === id) ){
        favorites = favorites.filter(fav => fav !== id)
    }else if(id) favorites.push(id);

    localStorage.setItem("favorites", JSON.stringify(favorites))

    dispatch(updateFavorites(favorites))
}


